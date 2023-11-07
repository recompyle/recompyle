// to import in your app if needed

// for node.js to let recompyle know that it need to disconnect the debugger
function onProcessRestart() {
  ['SIGINT', 'SIGUSR1', 'SIGUSR2', 'SIGTERM', 'exit'].forEach((eventType) => {
    process.on(eventType, (reason, p) => {
      console.log('** APP SHUTDOWN **');
    });
  });
}

// onProcessRestart();
