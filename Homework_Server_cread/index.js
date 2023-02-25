const fs = require("fs");
const path = require("path");
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/path") {
    res.write(" /Folder-created , /Txt-created , /Txtni-change , /Txt-reading , /Txt-deleted , /Folder-deleted");
    res.end();
  }else if (req.url === "/Folder-created") {
    res.write(`<button onclick=${cread()}>${"Folder-created"}</button>`);
    res.end();
  } else if (req.url === "/Txt-created") {
    res.write(`<button onclick=${creadfs()}>${"Txt-created"}</button>`);
    res.end();
  } else if (req.url === "/Txtni-change") {
    res.write(`<button onclick=${writed()}>${"Txt-change"}</button>`);
    res.end();
  } else if (req.url === "/Txt-reading") {
    res.write(`<button onclick=${reading()}>${"Txt-reading"}</button>`);
    res.end();
  } else if (req.url === "/Txt-deleted") {
    res.write(`<button onclick=${fayldeleted()}>${"Txt-deleted"}</button>`);
    res.end();
  } else if (req.url === "/Folder-deleted") {
    res.write(`<button onclick=${txtdeleted()}>${"Folder-deleted"}</button>`);
    res.end();
  } else {
    res.write("404 not found");
    res.end();
  }
});
const cread = () => {
  fs.mkdir(path.join("practise"), (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Created file");
  });
};
const creadfs = () => {
  setTimeout(() => {
    fs.writeFile(path.join("practise", "text.txt"), '"created"', (err) => {
      if (err) {
        return console.log(err);
      }
    });
  }, 3000);
};
const writed = () => {
  setTimeout(() => {
    fs.rename(
      path.join("practise", "text.txt"),
      path.join("practise", "index.txt"),
      (err) => {
        if (err) {
          return console.log(err);
        } else {
          console.log("File rename");
        }
      }
    );
  }, 4000);
};
const reading = () => {
  setTimeout(() => {
    fs.readFile(path.join("practise", "index.txt"), "utf-8", (err, data) => {
      if (err) {
        return console.log(err);
      } else {
        console.log("file reading");
        console.log(data);
      }
    });
  }, 5000);
};
const fayldeleted = () => {
  setTimeout(() => {
    fs.rm(path.join("practise", "index.txt"), (err) => {
      if (err) {
        return console.log(err);
      } else {
        console.log("file deleted");
      }
    });
  }, 6000);
};
const txtdeleted = () => {
  setTimeout(() => {
    fs.rmdir(path.join("practise"), (err) => {
      if (err) {
        return console.log(err);
      } else {
        console.log("folder deleted");
      }
    });
  }, 7000);
};
server.listen(3300, () => {
  console.log("The server listens:", 3300);
});
