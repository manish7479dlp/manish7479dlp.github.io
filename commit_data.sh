#!/bin/bash

# Configuration
BRANCH="main"
REMOTE="origin"

# ANSI Color Codes
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}▶ Staging src/data.js...${NC}"
git add src/data.js

echo -e "${BLUE}▶ Committing changes...${NC}"
git commit -m "chore: update portfolio data configuration"

echo -e "${GREEN}✔ Successfully committed data configuration!${NC}"

echo -e "${BLUE}▶ Pushing to ${REMOTE}/${BRANCH}...${NC}"
git push $REMOTE $BRANCH

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✔ Successfully deployed to remote!${NC}"
else
    echo -e "${YELLOW}✖ Push failed. Check your network or upstream configuration.${NC}"
fi
