const path = require("path");

const log = console.log;

log(path.delimiter);
log(path.sep);
log(path.join("C:", "a.txt"));
log(path.join("a/b/c", "a.txt"));
log(path.join("a/b/c/", "/a.txt"));
log(path.join("a/b/c/", "..", "/a.txt"));
log(__dirname);
log(path.join(__dirname, "..", "a.txt"));
log(path.dirname("C:/a/b/c/m.exe"));
log(path.extname("C:/a/b/c/m.exe"));
log(path.extname("C:/a/b/c/m.exe.bts"));
log(path.isAbsolute("C:/a.txt"));
log(path.isAbsolute("/a.txt"));
log(path.isAbsolute("a/a.txt"));
log(path.isAbsolute("./a.txt"));
log(path.parse(__dirname));
log(path.parse(__filename));
log(
  path.format({
    root: "C:\\",
    dir: "C:\\Users\\mohammad.farhadi\\Desktop\\Practice\\Node\\fundamental__node\\1.fundamental\\3.path-and-os\\2.path",
    base: "index.ts",
    ext: ".ts",
    name: "index",
  })
);
