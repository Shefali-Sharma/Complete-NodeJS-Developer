## To run debug mode
#### Command: node inspect <filename.js>
To leave debug mode: Ctrl+C (twice) or type command '.exit'

Commands in debug mode:

* list(10)    :   List 10 lines
* n           :   Move to next line
* c           :   Continue till the program completes
* repl        :   To have application as it currently stands. Ctrl+C : to leave 'repl debug mode'.
* 'debugger;' :   Write this in code to create a breakpoint. Enter debug mode - and type 'c' - it will run the entire code up-till line where 'debugger;' is present and then stop there.

We can use 'nodemon' with the debugger to automatically start the app every-time we make a change to the app. And if we have 'debugger;' anywhere in the code, then our application will automatically stop at the first 'debugger;' found when application is restarted by nodemon.

## Debugging using Chrome Developer Tools
Command: node --inspect-brk <filename.js>

* --inspect-brk : This tell the node that we want to run the inspect mode but we don't want to run via the Command Line (i.e. commands like 'n' and 'c' won't work and output won't be displayed on the terminal). And we also want to break ('-brk') after the first line.

After running the above command, go over to Chrome Browser and in the URL section enter command:

#### chrome://inspect/

Once the page opens, click on:
* Open dedicated Dev Tools for Node

'Developer Tools - Node' will open up.

## nodemon
Nodemon runs nodejs script automatically everytime there is a change made.

### Installation
#### Command: npm install nodemon -g

 * '-g’ flag is global — ‘-g’ instead of ’save'
* If an error is encountered where the nodemon doesn't get installed because of permission problem, use 'sudo' in the beginning. This can be done for all commands which fail to run because of permission problems.
Eg: sudo npm install nodemon -g

### Run Nodemon
Instead on 'node', simply use 'nodemon' to run the application
#### Command: nodemon <filename.js>
#### Command: nodemon inspect <filename.js>
#### Command: nodemon --inspect-brk <filename.js>
