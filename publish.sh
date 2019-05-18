curl \
-H "Authorization: Bearer $TOKEN_CHROME_STORE"  \
-H "x-goog-api-version: 2" \
-X PUT \
-T packages/hubcare.*.chrome.zip \
-v \
https://www.googleapis.com/upload/chromewebstore/v1.1/items/$APP_ID

curl \                       
-H "Authorization: Bearer $TOKEN_CHROME_STORE"  \
-H "x-goog-api-version: 2" \
-H "Content-Length: 0" \
-X POST \
-v \
https://www.googleapis.com/chromewebstore/v1.1/items/$APP_ID/publish