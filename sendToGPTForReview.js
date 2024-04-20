const fs = require('fs').promises;
const path = require('path');
const { OpenAI } = require('openai');

module.exports = async function sendToGPTForReview() {
  // console.log('OPENAI_API_KEY --->', process.env.OPENAI_API_KEY);
  // console.log('OpenAI --->', OpenAI);

  const ai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });

  // const filePath = './build-files';
  const directoryPath = path.join(__dirname, 'build-files');

  console.log('filePath --->', directoryPath);

  try {
    const files = await fs.readdir(directoryPath);

    for (const file of files) {
      console.log(`Reviewing file ---> ${file}`);

      const filePath = path.join(directoryPath, file);
      const fileContent = await fs.readFile(filePath, 'utf8');

      console.log(`Content of ${file}:`, fileContent);

      ai.chat.completions
        .create({
          model: 'gpt-4-turbo-preview',
          messages: [
            {
              role: 'system',
              content: `Review the following code:\n\n${fileContent}`
            }
          ]
        })
        .then(response => {
          console.log('Response:', response.choices[0].message.content);
        })
        .catch(error => {
          console.error('Error calling OpenAI API:', error);
        });

      // Example of sending content to GPT (simplified)
      /*
      const response = await ai.createCompletion({
        model: 'text-davinci-003',
        prompt: `Review the following code:\n\n${fileContent}`,
        temperature: 0.7,
        max_tokens: 1024,
      });
      console.log(`GPT Review for ${file}:`, response.data.choices[0].text);
      */
    }
  } catch (error) {
    console.error('Error processing files:', error);
  }

  /*
  fs.readFile(filePath, 'utf8', (err, fileContent) => {
    if (err) return console.error('Error reading file:', err);

    console.log('fileContent =======>', fileContent);

    ai.chat.completions
      .create({
        model: 'gpt-4-turbo-preview',
        messages: [{ role: 'system', content: 'Hi!' }]
      })
      .then(response => {
        console.log('Response:', response.choices[0].message.content);
      })
      .catch(error => {
        console.error('Error calling OpenAI API:', error);
      });
  });
  // */
};

/*
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

// -------------------

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
