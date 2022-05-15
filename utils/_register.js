const fs = require("fs");
const path = require("path");
const registerFilePath = path.join(__dirname, "../data/register-db.json");

function getRegister() {
    return JSON.parse(fs.readFileSync(registerFilePath, "utf-8"));
}

module.exports = { registerFilePath, getRegister };