var express = require('express');
var app = express();
app.get("/json", (req, res) => { let message = ""; (process.env.MESSAGE_STYLE == "uppercase") ? 
message=message.toUpperCase() : message="Hello json"; res.json({"message": message}); });



































 module.exports = app;
