import EventEmitter from "events";
import { readFileSync } from "fs";

export default class Finder extends EventEmitter {
  #regex;
  #files;
  constructor(regex) {
    super();
    this.#regex = regex;
    this.#files = [];
  }

  addFiles(files) {
    if (typeof files === "string") {
      this.#files.push(files);
    } else if (files instanceof Array) {
      for (const file of files) {
        this.#files.push(file);
      }
    }
    return this; //? For chaining
  }

  find() {
    for (const file of this.#files) {
      try {
        const content = readFileSync(file, "utf-8");
        const matches = content.match(this.#regex);
        if (matches) {
          for (const match of matches) {
            this.emit("match", file, match);
          }
        }
      } catch (error) {
        this.emit("error", error);
      }
    }
    return this; //? For chaining
  }
}
