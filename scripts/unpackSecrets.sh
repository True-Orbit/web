#!/bin/bash
# entrypoint.sh

if [ -n "$WEB_SERVICE_SECRETS" ]; then
  echo "Parsing WEB_SERVICE_SECRETS and exporting variables..."
  eval "$(
    echo "$WEB_SERVICE_SECRETS" \
      | jq -r 'to_entries | map("export " + .key + "=" + (.value|@sh)) | .[]'
  )"
fi

# Optionally, print out the new variables to verify:
echo "OAUTH_GITHUB_ID: $OAUTH_GITHUB_ID"
echo "OAUTH_GITHUB_SECRET: $OAUTH_GITHUB_SECRET"
echo "OAUTH_GOOGLE_CLIENT_ID: $OAUTH_GOOGLE_CLIENT_ID"
echo "OAUTH_GOOGLE_CLIENT_SECRET: $OAUTH_GOOGLE_CLIENT_SECRET"
echo "NEXTAUTH_SECRET: $NEXTAUTH_SECRET"
echo "NEXTAUTH_URL: $NEXTAUTH_URL"