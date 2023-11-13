# Recompyle Documentation - [Website](https://www.recompyle.com)

A Javascript Developer Friendly Console / Debugger.

It let you debug your app more efficiently.

I have always been annoyed of the console.log not being practical enough, and 
the debugger "too slow".
So i made Recompyle to fix that, it solves multiple frictions of the 
debugging experience.

- Need to write console.log everywhere, then remove them.
- When you click on a filePath in chrome it opens in the dev console not in
the IDE.
- A log history better than "Preserve Log"
- A nicer JSON viewer ( Especially on Node.js )


# Screenshots

An example of code :

![An example of code](https://asset.recompyle.com/readme/recompyle/recompyle-code.png)


What it look like in Recompyle :

![An example of code](https://asset.recompyle.com/readme/recompyle/recompyle-output-1.png)


# How it works

It parse you project & files, connect to your app
with the debugger api, set breakpoints, pause at X breakpoints, query
the state, resume the breakpoint. Kind of a mix of the debugger and the
console + some parsing.

# Requirements
- A Node.js or Browser App built with Javascript or Typescript.
- The Source Maps enabled ( it's generally enabled by default in 
  development )

# Get Started
- Create an account on Recompyle [recompyle.com/signup](https://www.recompyle.com/signup)
( 7 day free trial )
- Install recompyle globally
  -  npm install recompyle -g
- Install the plugin for your IDE :
  - [Jetbrains Plugin](https://plugins.jetbrains.com/plugin/23004-recompyle)
  - [VsCode Plugin](https://marketplace.visualstudio.com/items?itemName=Recompyle.recompyle-vscode-plugin)
- Start your App in debug
  - in node.js :
    - node app.js --inspect=9227
    - With Nodemon + Typescript 
      - create a file nodemon.json
      - {exec : "node --inspect=9230 -r ts-node/register 
        server/app.ts}
  - In the browser :
    - On Chrome
      - chrome --remote-debugging-port=9227 
      --user-data-dir=/home/hello/chromium-profile
      - flatpak run org.chromium.Chromium --remote-debugging-port=9227 
        --user-data-dir=/home/hello/chromium-profile
    - On Firefox
      - firefox --remote-debugging-port 9227
- Select a file with your IDE
  - On jetbrains you have an Icon <img src="https://asset.recompyle.com/readme/jetbrains/recompyle-icon-task-bar.png" alt="image" width="30" height="auto"> or Tools > Recompyle > Select FIle
  - On VsCode Command Palette ( CTRL + Shift + P ) > "Select File Recompyle"


# Features

### Menu / Header

![Default / Custom](https://asset.recompyle.com/readme/recompyle/header-menu.png)

When the header is all green you are ready to go.
 
- 1 - show project name (name in package.json) selected + pause / resume 
  recomyple
- 2 -  The port used to connect with you IDE, can be changed in config.js > 
  app.websocketPort
- 3 - the debug port used to connect to you app, click on it to change it.
- 4 - let you know what's going on

### Target files 

![Default / Custom](https://asset.recompyle.com/readme/recompyle/target-files.png)


"Breakpoints" are the files that will log more informations :
  - will log "Function Start isAuth( req, res, next ) 238ms" + the scope.
  - will log the scope when you have a console.log.
  - will log the breakpoints in your IDE.

"Available" is a back pocket of your files

All files opened in your IDE are added to "Breakpoints"



Some explanation about MF, AF, Default ;
- MF = Main Functions = will logs all the first level functions.
- AF = ALL Functions = will logs all functions
- Default / Custom : Open a popup that let you select what you want to log.

<img src="https://asset.recompyle.com/readme/recompyle/pick-list-functions.png" alt="image" width="500" height="auto">


### Tabs : let you keep an history of your logs.

- Right click on tabs to delete old tabs
- Search bar for logs

### Console

![Default / Custom](https://asset.recompyle.com/readme/recompyle/recompyle-console.png)

- Pretty formatting : show parameters + scope
- In the JSON viewer
  - Right click on nodes to copy keys / values.
  - Ctrl + Left Click to expand fully a node. 
- on the file name on the left :
  - Right click : Open the file in your IDE
  - Left click : Add / Remove file from "Breakpoints"

# Configuration

Once you have selected a file in your IDE, recompyle will create a folder in 
you project ./recompyle/ inside there will be a 
- config.js : to change the ports and other apps settings, the settings are 
  explained in the file. some more detailed explanation for the most 
  important settings
  - scope.timeout  (300ms by default): The timeout to query an object in ms
    will show RecompyleMaxTimeout = true if the querying the data takes
    more that the timeout value. Increasing the timeout will make recompyle 
    slower at each breakpoint. If you need some data that is not showing, 
    increase the timeout as needed, then use the file data-filter.js to 
    query only the data needed. 
- data-filter.js : let you customize filter the data from the scope. it 
  takes time to query objects, by keeping only what you need it get faster.

- the "#" with extras infos  (scope.showHashtagInfos)
  - className
  - subType : show the subtype for some objects
  - ignored : the ignored keys from data-filter.js
  
<img src="https://asset.recompyle.com/readme/recompyle/hashtag-extras-infos.png" alt="image" width="500" height="auto">


You can start multiple instances of recompyle if you need to.


# Closed Source, Paid Software, Need Registration.
7 day free trial, then 30€ + tax / user / year.


# Privacy & Security TLDR
Yes you need an account to use recompyle.

The account is used to validate the license. Nothing more.

The only thing send to our server is a hash of your "machineId" (https://www.npmjs.com/package/node-machine-id)

The App run on you computer, your code is private and not send to our servers.

No analytics or error tracking.

# Support 
Preferably on Github issues. Or by email support@recompyle.com


# Roadmap 
- Show the result of Promise, Await, Callback, Subscription.
- Call method to get the data : right now recompyle log only values, it will 
  be possible to call a method and log the result. it would be a 
  configuration in data-filter.js ( callMethod : [string] )
- Make Recompyle work with testing framework.


<br /><br />
<img src="https://asset.recompyle.com/logo/logo-256.jpg" alt="image" width="256" height="auto">
