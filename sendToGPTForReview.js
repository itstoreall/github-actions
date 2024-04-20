// const fs = require('fs');
const { OpenAI } = require('openai');

module.exports = function sendToGPTForReview() {
  console.log('OPENAI_API_KEY --->', process.env.OPENAI_API_KEY);
  console.log('OpenAI --->', OpenAI);

  const ai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });

  console.log('ai --->', ai);
};

// const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });

// console.log('OPENAI_API_KEY --->', process.env.OPENAI_API_KEY);
// console.log('OpenAI --->', OpenAI);

// const ai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
//   dangerouslyAllowBrowser: true
// });

// console.log('ai --->', ai);

// const openai = new OpenAIApi(configuration);
// const filePath = './build-files';

// fs.readFile(filePath, 'utf8', (err, fileContent) => {
//   if (err) return console.error('Error reading file:', err);

//   openai
//     .createCompletion({
//       model: 'gpt-4-turbo-preview',
//       prompt: `Review the following code:\n\n${fileContent}`,
//       temperature: 0.7,
//       // max_tokens: 1024,
//       n: 1,
//       stop: null
//       // frequency_penalty: 0,
//       // presence_penalty: 0
//     })
//     .then(response => {
//       console.log('GPT Review:', response.data.choices[0].text);
//     })
//     .catch(error => {
//       console.error('Error calling OpenAI API:', error);
//     });
// });
