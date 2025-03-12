#!/bin/bash
# entrypoint.sh

if [ -n "$ORG_SECRETS" ]; then
  echo "Parsing ORG_SECRETS and exporting variables..."
  eval "$(
    echo "$ORG_SECRETS" \
      | jq -r 'to_entries | map("export " + .key + "=" + (.value|@sh)) | .[]'
  )"
fi

if [ -n "$WEB_SERVICE_SECRETS" ]; then
  echo "Parsing WEB_SERVICE_SECRETS and exporting variables..."
  eval "$(
    echo "$WEB_SERVICE_SECRETS" \
      | jq -r 'to_entries | map("export " + .key + "=" + (.value|@sh)) | .[]'
  )"
fi

# Optionally, print out the new variables to verify:
echo "NEXTAUTH_URL: $NEXTAUTH_URL"