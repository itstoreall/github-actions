import { useEffect } from 'react';
import './App.css';

const App = () => {
  const title = 'Github Actions 115';

  useEffect(() => {
    console.log('App:', title);
  }, [title]);

  return (
    <div className='App'>
      <h1>{title}</h1>
    </div>
  );
};

export default App;

/*
import { codeReviewHandler } from './codeReviewHandler';
console.log('App', codeReviewHandler());
*/
