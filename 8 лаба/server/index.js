const express = require("express");
const path = require("path");
const fs = require('fs');
const app = express();
const port = 4000;

app.use(express.json());

app.listen(port, () => {
  console.log(`\nServer is running at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
  console.log("\nHTML is uploaded!");
});

app.get("/get", (req, res) => {
   const filePath = path.resolve(__dirname, 'data/employees.json');

   fs.readFile(filePath, 'utf8', (err, data) => {
     if (err) {
       console.error('Error reading JSON file:', err);
       res.status(500).json({ error: 'Internal Server Error' });
       return;
     }
 
     try {
       const jsonData = JSON.parse(data);
       console.log(jsonData);
       res.json({text: jsonData});
     } catch (parseError) {
       console.error('Error parsing JSON:', parseError);
       res.status(500).json({ error: 'Internal Server Error' });
     }
   });
});

app.post("/post", (req, res) => {
 const filePath = path.resolve(__dirname, 'data/employees.json');

   fs.readFile(filePath, 'utf8', (err, data) => {
     if (err) {
       console.error('Error reading JSON file:', err);
       res.status(500).json({ error: 'Internal Server Error' });
       return;
     }
 
     try {
       const jsonData = JSON.parse(data);
       console.log(jsonData);
       res.json({text: jsonData});
     } catch (parseError) {
       console.error('Error parsing JSON:', parseError);
       res.status(500).json({ error: 'Internal Server Error' });
     }
   });
});

app.post("/postData", (req, res) => {
  const data = req.body;

  console.log("POST-сервис принял следующее сообщение: \n", data);

  res.json({ message: "Данные успешно получены." });
});

app.get("/file", (req, res) => {
  const acceptHeader = req.get("Accept");

  let file;

  if (acceptHeader.includes("application/json")) {
    file = path.resolve(__dirname, "files", "index.json");
  
  } else if (acceptHeader.includes("application/xml")) {
    file = path.resolve(__dirname, "files", "index.xml");

  } else if (acceptHeader.includes("application/html")) {
    file = path.resolve(__dirname, "files", "index.html");

  } else {
    res.status(406).send("Not Acceptable");
    return;
  }

  res.download(file);
});