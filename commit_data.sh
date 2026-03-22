#!/bin/bash
set -euo pipefail

# ─── Configuration ────────────────────────────────────────────────────────────
BRANCH="main"
REMOTE="origin"
TARGET_FILE="src/data.js"
COMMIT_MSG="${1:-chore: update portfolio data [$(date '+%Y-%m-%d %H:%M')]}"

# ─── Colors ───────────────────────────────────────────────────────────────────
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# ─── Helpers ──────────────────────────────────────────────────────────────────
info()    { echo -e "${BLUE}▶ $*${NC}"; }
success() { echo -e "${GREEN}✔ $*${NC}"; }
warn()    { echo -e "${YELLOW}⚠ $*${NC}"; }
err()     { echo -e "${RED}✖ $*${NC}" >&2; exit 1; }

# ─── Guards ───────────────────────────────────────────────────────────────────
[ -f "$TARGET_FILE" ] || err "$TARGET_FILE not found."

if git diff --quiet HEAD -- "$TARGET_FILE" && ! git ls-files --others --exclude-standard | grep -q "$TARGET_FILE"; then
    warn "No changes detected in $TARGET_FILE — nothing to commit."
    exit 0
fi

# ─── Stage ────────────────────────────────────────────────────────────────────
info "Staging $TARGET_FILE..."
git add "$TARGET_FILE"

# ─── Commit ───────────────────────────────────────────────────────────────────
info "Committing: \"$COMMIT_MSG\""
git commit -m "$COMMIT_MSG"
success "Committed successfully."

# ─── Push ─────────────────────────────────────────────────────────────────────
info "Pushing to $REMOTE/$BRANCH..."
if git push "$REMOTE" "$BRANCH"; then
    success "Deployed to $REMOTE/$BRANCH."
else
    err "Push failed — check your network or upstream configuration."
fi
