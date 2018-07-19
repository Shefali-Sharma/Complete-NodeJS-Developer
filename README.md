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
