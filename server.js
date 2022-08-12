const express = require("express");

const server = express();
const wordle = "place";
server.get("/guess/:word", (req, res) => {
  const userGuess = req.params.word;
  let result = [];
  for (let i = 0; i < userGuess.length; i++) {
    let ch = userGuess[i];
    if (wordle[i] == ch) {
      result.push("green");
    } else if (wordle.includes(ch)) {
      result.push("#b59f3b");
    } else {
      result.push("gray");
    }
  }
  res.json(result);
});

server.use(express.static("public"));

server.listen(3000, () => {
  console.log("server is working :)");
});
