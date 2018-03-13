const express = require("express");
const app = express();
const multer = require("multer");
var upload = multer({ dest: 'uploads/' })

app.use(express.static(__dirname+"/public/"));

app.post("/upload", upload.single("file"), (req, res)=>{
    var json = {
        fileSize: req.file.size + " bytes"
    };
    res.json(json);
});

app.listen(process.env.PORT, ()=>{
   console.log("Now listening on port "+ process.env.PORT);
});