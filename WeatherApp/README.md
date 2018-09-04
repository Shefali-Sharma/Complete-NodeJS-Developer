## Package Information
To create ```package.json``` file, use command:
```
npm init
```
Fill the details as required, and enter 'yes'. This will create ```package.json``` file in the current folder for the project.

## Request
Documentation Link:
https://www.npmjs.com/package/request

### Installation
```
npm install request@2.87.0 --save
```
* ```2.87.0``` is the current version of the 'request' package at the time of the creation of this project. Please replace this with latest version from 'Version' given at https://www.npmjs.com/package/request.
* ```--save``` will save the installed package information in ```package.json```. This way we will not have to install request every time we restart the system(reboot the computer).  

### Error: OVER_QUERY_LIMIT
```
{ error_message: 'You have exceeded your daily request quota for this API. We recommend registering for a key at the Google Developers Console: https://console.developers.google.com/apis/credentials?project=_',
  results: [],
  status: 'OVER_QUERY_LIMIT' }
```
When trying to use request, if you encounter the error as shown above (for any URL), then follow the steps mentioned below:

1. Head over to the link below: https://console.developers.google.com/projectselector/apis/credentials?supportedpurview=project

2. Click "Create" to create a new project (you'll need to create or sign in to a Google account).

3. On the "New Project" screen, click "create" to create the project with the default name.

4. Visit "Library" in the sidebar.

5. Search for "Geocoding API" and select it.

6. On the Geocoding API page, click "Enable" and wait for the API to be enable. This can fail. If it does, just click "enable" a second time.

7. This will bring you over to the library dashboard page. Select the 'Credentials' tab near the top of the page.

8. Click on 'Create credentials'. This will open a pop-up menu.

9. Choose 'API key' which will generate the API key for you. Copy the key value to the clipboard.

10. Change the request URL by adding a "key" query string. That would be something like the following. Note I've added "&" to separate the key value pairs. The new key value pair is "key" for the key and the API Key from Google for the value:
https://maps.googleapis.com/maps/api/geocode/json?address=1301+lombard+st+philadelphia&key=YOURKEYHERE

11. The request should work without any errors.


## Special Notes
* In ```app.js``` inside :
```argv = yargs
  .options({
    a:{}
    })
```
'a' is short for address.
