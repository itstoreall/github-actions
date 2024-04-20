const axios = require('axios');

export const codeReviewHandler = async () => {
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

  console.log(`codeReviewHandler date: ${dateUkraine}`);

  // ------ Weather

  const apiUrl = `https://jsonplaceholder.typicode.com/todos/1`;

  try {
    const response = await axios.get(apiUrl);
    console.log('------------>', response.data.title);
  } catch (error) {
    console.error('Failed:', error);
  }
};

codeReviewHandler();
