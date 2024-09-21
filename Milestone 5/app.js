const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.use(express.json());

app.post('/api/saveResume', (req, res) => {
  const { id, html } = req.body;
  
  // Save the resume HTML to a file or database
  const filePath = path.join(__dirname, `resumes/${id}.html`);
  fs.writeFileSync(filePath, html);

  res.status(200).json({ message: 'Resume saved successfully', id });
});

app.get('/resumes/:resumeId', (req, res) => {
  const resumeId = req.params.resumeId;
  const filePath = path.join(__dirname, `resumes/${resumeId}.html`);

  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).send('Resume not found');
  }
});

app.listen(3000, () => console.log('Server started on port 3000'));