// import fs from 'fs';
import axios from 'axios';
// import * as openai from 'openai';
import OpenAI from 'openai';
// import Configuration from 'openai';

const review = () => {
  const ai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });

  ai.chat.completions
    .create({
      model: 'gpt-4-turbo-preview',
      messages: [{ role: 'system', content: 'Hi!' }]
      // prompt: `Review the following code:\n\n${fileContent}`,
      // temperature: 0.7,
      // max_tokens: 1024,
      // n: 1,
      // stop: null
      // frequency_penalty: 0,
      // presence_penalty: 0
    })
    .then(response => {
      console.log('Response:', response.choices[0].message.content);
    })
    .catch(error => {
      console.error('Error calling OpenAI API:', error);
    });
  // */
};

export const codeReviewHandler = async () => {
  // ------ Date:

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

  // ------ Mock Data:

  const apiUrl = `https://jsonplaceholder.typicode.com/todos/1`;

  try {
    const response = await axios.get(apiUrl);
    console.log('------------>', response.data.title);
  } catch (error) {
    console.error('Failed:', error);
  }

  // ------ Code review:

  review();
};

codeReviewHandler();
