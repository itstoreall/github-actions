const fs = require('fs');
const fetch = require('node-fetch');
const FormData = require('form-data');

const uploadFiles = async () => {
  const openaiApiKey = process.env.OPENAI_API_KEY;
  const buildDir = 'build';

  fs.readdir(buildDir, (err, files) => {
    if (err) {
      console.error('Error reading the build directory:', err);
      return;
    }

    files.forEach(file => {
      const filePath = `${buildDir}/${file}`;
      if (fs.statSync(filePath).isFile()) {
        const formData = new FormData();
        formData.append('file', fs.createReadStream(filePath));
        formData.append('purpose', 'code_review');

        fetch('https://api.openai.com/v1/files', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${openaiApiKey}`
          },
          body: formData
        })
          .then(response => response.json())
          .then(data => {
            console.log(`Uploaded file: ${file}`, data);
          })
          .catch(error => {
            console.error('Error uploading file:', error);
          });
      }
    });
  });
};

uploadFiles();
