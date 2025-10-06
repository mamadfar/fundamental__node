import fs from "fs";

//? fs.watch will use underlying operating system facilities to watch for changes on the specified path, and it will emit events when changes occur.
//? It is more efficient than fs.watchFile, especially for monitoring multiple files or directories, as it leverages native OS capabilities.
//? However, its behavior can vary across different platforms, and it may not be as reliable for certain types of file changes.
const watch = fs.watch("watchFile-test", { recursive: true });
watch.on("change", (eventType, filename) => {
  if (watch.isFirstTime) return;
  watch.isFirstTime = true;
  console.log({ eventType, filename });
  setTimeout(() => (watch.isFirstTime = false), 100);
});
