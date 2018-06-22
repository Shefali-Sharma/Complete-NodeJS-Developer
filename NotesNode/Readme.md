## To run debug mode
Command: node inspect <filename.js>
To leave debug mode: Ctrl+C (twice) or type command '.exit'

Commands in debug mode:

* list(10)    :   List 10 lines
* n           :   Move to next line
* c           :   Continue till the program completes
* repl        :   To have application as it currently stands. Ctrl+C : to leave 'repl debug mode'.
* 'debugger;' :   Write this in code to create a breakpoint. Enter debug mode - and type 'c' - it will run the entire code up-till line where 'debugger;' is present and then stop there.

We can use 'nodemon' with the debugger to automatically start the app every-time we make a change to the app. And if we have 'debugger;' anywhere in the code, then our application will automatically stop at the first 'debugger;' found when application is restarted by nodemon.
