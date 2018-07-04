## To run debug mode
#### Command:
```
node inspect <filename.js>
```
To leave debug mode: Ctrl+C (twice) or type command '.exit'

#### Commands in debug mode:

* list(10)    :   List 10 lines
* n           :   Move to next line
* c           :   Continue till the program completes
* repl        :   To have application as it currently stands. Ctrl+C : to leave 'repl debug mode'.
* 'debugger;' :   Write this in code to create a breakpoint. Enter debug mode - and type 'c' - it will run the entire code up-till line where 'debugger;' is present and then stop there.

We can use 'nodemon' with the debugger to automatically start the app every-time we make a change to the app. And if we have 'debugger;' anywhere in the code, then our application will automatically stop at the first 'debugger;' found when application is restarted by nodemon.

## Debugging using Chrome Developer Tools
#### Command:
```
node --inspect-brk <filename.js>
```
* --inspect-brk : This tell the node that we want to run the inspect mode but we don't want to run via the Command Line (i.e. commands like 'n' and 'c' won't work and output won't be displayed on the terminal). And we also want to break ('-brk') after the first line.

After running the above command, go over to Chrome Browser and in the URL section enter command:

#### chrome://inspect/

Once the page opens, click on:
* Open dedicated Dev Tools for Node

'Developer Tools - Node' will open up.

### Arraow Functions Vs. Regular Functions
* Arrow functions do not allow us to access variables, while regular functions do.
* You cannot pass arguments to arrow functions.
