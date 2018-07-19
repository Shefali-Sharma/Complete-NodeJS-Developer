# Complete NodeJS Developer

## Run Application
To run the node app, you simply use the command:
```
node <filename.js>
```

## Version
Get currently installed npm version.
This can also be used to find out in npm is installed, as the command will not work if npm was not installed.
#### Command:
```
npm -v
```

## NPM Init
Used to create package.json for the current application
#### Command:
```
Npm init
```
Once the command is run, you can input ‘description’ (of the application), ‘author’ (give Author's name), and other details. To finish and confirm the information that is input, type ‘yes’ and press enter. This will create 'package.json' with all the details entered in the fields above.

## Yargs
Documentation page for yargs: https://www.npmjs.com/package/yargs

### methods
#### .command
Documents the commands exposed by your application.

#### For implmentational details, see -
* NodesNode/app.js

Ex:
```
const argv = yargs
  .command('add', 'Add a new note', {
    title : {
      describe: 'Title of node',
      demand: true,
      alias: 't'
    }
  })
  .help()
  .argv;
```
* describe: Provide a description of the argument
* demand: true -> This is used to make the argument 'required' or 'optional'. Setting the 'demand' to true, will make it mandatory for the user to provide the respective argument. By default, 'demand' is set to false.
* alias: to give an alias name for the command.
Ex:
```
node app.js -t="flag title" --body="flag title body"
```
## nodemon
Nodemon runs nodejs script automatically every-time there is a change made.

### Installation
#### Command:
```
npm install nodemon -g
```
 * '-g’ flag is global — ‘-g’ instead of ’save'
* If an error is encountered where the nodemon doesn't get installed because of permission problem, use 'sudo' in the beginning. This can be done for all commands which fail to run because of permission problems.
Eg:
```
sudo npm install nodemon -g
```

### Run Nodemon
Instead on 'node', simply use 'nodemon' to run the application
#### Commands
* nodemon <filename.js>
* nodemon inspect <filename.js>
* nodemon --inspect-brk <filename.js>

## Help
To execute the help command run the command below:
#### Command:
```
node <filename.js> --help
```
This command will show the 'Commands' that can be executed with your application, as well as 'Options' that are available.

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

10. Change the request URL by adding a "key" query string. That would be something like the following. Note I've added "&" to separate the key value pairs. The new key value pair is "key" for the key and the API Key from Google for the value.
https://maps.googleapis.com/maps/api/geocode/json?address=1301+lombard+st+philadelphia&key=YOURKEYHERE

11. The request should work without any errors.
