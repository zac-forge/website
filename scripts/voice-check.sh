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
SHIPS=(src public index.html package.json README.md)
# The em dash rule reaches further than shipping copy. Drew has restated that
# it covers code comments, docs, assets and commit messages.
ALL=(src public index.html package.json README.md CLAUDE.md docs scripts)

hit() { # <label> <paths...> with $PAT preset
  local label="$1"; shift
  local out
  out=$(grep -rInE --exclude-dir=node_modules --exclude-dir=dist \
        --exclude=voice-check.sh "$PAT" "$@" 2>/dev/null) || return 0
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

# 1. The word "AI". Case-sensitive so "detail", "chain" and "main" do not hit.
PAT='\bAI\b'                     hit 'the word "AI"' "${SHIPS[@]}"
PAT='[Aa][Ii]-(native|first|powered|driven)' hit 'AI-* compound' "${SHIPS[@]}"

# 2. Em dashes, anywhere at all.
PAT='—'                          hit 'em dash' "${ALL[@]}"

# 3. Exclamation points and emoji, prose surfaces only. Source is excluded
#    because "!" is an operator and would drown the signal.
PAT='!'                          hit 'exclamation point' public/llms.txt public/robots.txt
PAT='[\x{1F300}-\x{1FAFF}\x{2600}-\x{27BF}]' hit 'emoji' "${SHIPS[@]}"

# 4. Banned vocabulary. CLAUDE.md has the full list and the reasoning.
PAT='\b(solutions|synergy|cutting-edge|best-in-class|world-class|seamless|robust|empower|unlock|elevate|passionate about|ship fast|10x|force multiplier)\b'
hit 'banned vocabulary' "${SHIPS[@]}"

# 5. Judgment calls. "leverage" is banned as a verb only, so the noun is fine
#    and a hard failure here would train people to ignore the gate.
PAT='\bleverage[ds]?\b'          review '"leverage" (banned as a verb, noun is allowed)' "${SHIPS[@]}"
PAT="\b(doesn't|don't|won't|can't|isn't|aren't|it's|that's|we're|you're|we've|there's)\b"
review 'contraction' "${SHIPS[@]}"

if [ "$fail" -eq 0 ]; then
  printf '\n\033[32mPASS\033[0m  voice gate clean\n'
else
  printf '\n\033[31mvoice gate failed\033[0m\n'
fi
exit "$fail"
