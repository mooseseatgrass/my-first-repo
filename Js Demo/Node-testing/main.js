const rl = require('readline').createInterface(process.stdin, process.stdout);

const input = require("./input.js");
const output = require("./output.js");

rl.setPrompt('What is your name?\n');
rl.prompt();

let name = input.input(rl);

/**
 * We can go over how to solve this problem during code review if you would like
 */