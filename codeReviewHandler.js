const axios = require('axios');
const sendToGPTForReview = require('./sendToGPTForReview');

(async function codeReviewHandler(args) {
  console.log(`codeReviewHandler fn!!!`);
  console.log(`codeReviewHandler args ------>`, args);

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

// codeReviewHandler();
