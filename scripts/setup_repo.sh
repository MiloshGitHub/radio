#!/usr/bin/env bash
set -e
REPO_DIR=$(dirname "$0")/..
mkdir -p $REPO_DIR/recordings
cp $REPO_DIR/backend/.env.example $REPO_DIR/backend/.env
sed -i 's/CHANGE_ME_ADMIN_PASSWORD/'"$(openssl rand -hex 8)"'/g' $REPO_DIR/icecast_config/icecast.xml
sed -i 's/change_me_admin_key/'"$(openssl rand -hex 8)"'/g' $REPO_DIR/backend/.env
echo 'Setup complete. Run docker compose up --build to start the stack.'