#!/usr/bin/env bash
# Voice gate for zacforge.com. The rules it enforces are in CLAUDE.md and are
# binding, not stylistic. Run it before every commit that touches copy.
#
#   bash scripts/voice-check.sh
#
# Exits non-zero on any hard violation. "Review" findings are printed but do
# not fail the run, because they need a human to judge the usage.

set -uo pipefail
cd "$(dirname "$0")/.."

fail=0
# Everything that ships or is published with the repo. package.json and
# README.md are included deliberately: the old grep covered only src/, public/
# and index.html, and both of those files carried "AI-native" for months.
SHIPS=(src public index.html package.json README.md tools)
# The em dash rule reaches further than shipping copy. Drew has restated that
# it covers code comments, docs, assets and commit messages.
ALL=(src public index.html package.json README.md CLAUDE.md docs scripts tools)

hit() { # <label> <paths...> with $PAT preset
  local label="$1"; shift
  local out
  out=$(grep -rInE --exclude-dir=node_modules --exclude-dir=dist \
        --exclude=voice-check.sh "$PAT" "$@" 2>/dev/null) || return 0
  printf '\n\033[31mFAIL\033[0m  %s\n%s\n' "$label" "$out"
  fail=1
}

hit_perl() { # like hit, but Perl regex so lookahead works
  # Not grep -P: macOS /usr/bin/grep has no -P, and with stderr discarded the
  # check silently passed everything. Perl ships with macOS and Linux.
  local label="$1"; shift
  local out
  out=$(find "$@" -type f -not -path '*/node_modules/*' -not -path '*/dist/*' \
          -not -name voice-check.sh \( -name '*.ts' -o -name '*.tsx' -o -name '*.css' \
          -o -name '*.html' -o -name '*.txt' -o -name '*.xml' -o -name '*.json' -o -name '*.md' \) \
          -print0 2>/dev/null \
        | xargs -0 perl -CSD -ne 'BEGIN { $p = shift } print "$ARGV:$.:$_" if /$p/; close ARGV if eof' "$PAT")
  [ -z "$out" ] && return 0
  printf '\n\033[31mFAIL\033[0m  %s\n%s\n' "$label" "$out"
  fail=1
}

review() {
  local label="$1"; shift
  local out
  out=$(grep -rInE --exclude-dir=node_modules --exclude-dir=dist \
        --exclude=voice-check.sh "$PAT" "$@" 2>/dev/null) || return 0
  printf '\n\033[33mREVIEW\033[0m  %s\n%s\n' "$label" "$out"
}

# 1. "AI" as identity. Since 2026-09-23 the bare word is allowed in offer
#    names, page headlines and descriptions of assistants, so it is a review
#    item. The compounds that describe ZAC itself are still a hard failure.
PAT='[Aa][Ii]-(native|first|powered|driven)' hit 'AI-* compound' "${SHIPS[@]}"
PAT='\bAI\b'                     review '"AI" (allowed for offers and assistants, never as what ZAC is)' "${SHIPS[@]}"

# 1b. No prices anywhere. The only permitted dollar sign is the Heritage
#     Global Partners figure, written "$1 billion" or, on the v5 case study
#     card, "$1B+".
PAT='\$(?!1 billion|1B\b)[0-9]'   hit_perl 'dollar amount (only the $1 billion HGP figure is allowed)' src public index.html

# 2. Em dashes, anywhere at all.
PAT='—'                          hit 'em dash' "${ALL[@]}"

# 3. Exclamation points and emoji, prose surfaces only. Source is excluded
#    because "!" is an operator and would drown the signal.
PAT='!'                          hit 'exclamation point' public/llms.txt public/robots.txt
PAT='[\x{1F300}-\x{1FAFF}\x{2600}-\x{27BF}]' hit_perl 'emoji' "${SHIPS[@]}"

# 4. Banned vocabulary. CLAUDE.md has the full list and the reasoning.
PAT='\b(solutions|synergy|cutting-edge|best-in-class|world-class|seamless|robust|empower|unlock|elevate|passionate about|ship fast|10x|force multiplier)\b'
hit 'banned vocabulary' "${SHIPS[@]}"

# 5. Judgment calls. "leverage" is banned as a verb only, so the noun is fine
#    and a hard failure here would train people to ignore the gate.
PAT='\bleverage[ds]?\b'          review '"leverage" (banned as a verb, noun is allowed)' "${SHIPS[@]}"
# Contractions are allowed since 2026-11-03 (decision 41), so there is no
# check for them.

# 6. Retired offers and section names (v5 pre-launch checklist). Shipping
#    surfaces only: docs/ keeps them for history.
PAT='\b(Backlog Review|Two-Week Proof|Snapshot|Advise)\b'
hit 'retired offer name' src public index.html

if [ "$fail" -eq 0 ]; then
  printf '\n\033[32mPASS\033[0m  voice gate clean\n'
else
  printf '\n\033[31mvoice gate failed\033[0m\n'
fi
exit "$fail"
