process.on("beforeExit", (code) => {
  console.log("beforeExit: ", code);
});

process.on("exit", (code) => {
  console.log("exit: ", code);
});

// process.exit(); //? Exits immediately, no more code is executed after this line - the beforeExit event will not be called

process.exitCode = 1; //? You can set the exit code without exiting immediately

process.on("uncaughtException", (err) => {
  console.error("There was an uncaught error", err.message);
});

// a(); //? This will cause an uncaught exception

// console.log("This will not be executed");

process.on("warning", (warn) => {
  console.warn(warn);
});

process.emit("warning", "This is a warning message from emit");
process.emitWarning("This is a warning message from emitWarning", { code: "MY_WARNING" });
