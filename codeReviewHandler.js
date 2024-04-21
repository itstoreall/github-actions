const fs = require('fs').promises; // Use fs promises for easier async handling
const path = require('path');
const axios = require('axios');
const sendToGPTForReview = require('./sendToGPTForReview');

(async function codeReviewHandler() {
  const args = process.argv.slice(2);
  console.log(`codeReviewHandler args ------>`, args);

  const directoryName = args[0];

  try {
    const directoryPath = path.resolve(directoryName);
    console.log(`Reading directory ------> ${directoryPath}`);

    const files = await fs.readdir(directoryPath);
    console.log(`Contents of ${directoryName}:`, files);
  } catch (e) {
    console.error('Error reading directory:', e);
  }

  // ------ Date
  const dateUkraine = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'Europe/Kyiv'
  }).format(new Date());

  console.log(`new Date() --------->: ${dateUkraine}`);

  // ------ Mock Data
  const apiUrl = `https://jsonplaceholder.typicode.com/todos/1`;

  try {
    const response = await axios.get(apiUrl);
    console.log('axios ------------>', response.data.title);
  } catch (error) {
    console.error('Failed:', error);
  }

  sendToGPTForReview();
})();
