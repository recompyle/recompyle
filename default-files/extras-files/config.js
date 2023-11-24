exports.config = {
  // DB
  db: {
    local: true,
    // mongo: {
    //   url: 'mongodb://localhost:27017/recompyle',
    // },
  },
  // RECOMPYLE APP
  app: {
    port: 3100,
    websocketPort: 3101,
  },
  // TARGET APP
  targetApp: {
    debugPort: 9227,
  },
  // Console.log
  // consoleLog: {
  //   showScopeForLog: {
  //     targetFiles: true,
  //   },
  //   // by default console, log and logger are included
  //   logFunctions: ['pino', 'bunyan'],
  // },
  // STATE
  // scope: {
  //   show: { closure: true, global: false },
  //   mergeAll: false, // merge local closure and global
  //   maxDepth: 7, // max depth of an object
  //   timeout: 900, // timeout to query an object in ms
  //   showHashtagInfos: true,
  // },
  // PATHS
  // IF not working by default
  // IF using NX or other monorepo tools
  // path: {
  //   // the absolute path of all the project files
  //   // ( in case of NX, where nx.json is )
  //   // for teams + git
  //   // projectRoot: require("./projectRoot.js).projectRoot",
  //   ideRoot: '/home/dam/project/recompyle',
  //   appRoot: 'package/myApp',
  // },
  // ui: {
  //   showDuration: true,
  //   showExtras: true, // #className #description
  // },
};
