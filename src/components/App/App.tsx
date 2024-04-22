// import { codeReviewHandler } from './codeReviewHandler';
import { useEffect } from 'react';
import './App.css';

const App = () => {
  // console.log('App', codeReviewHandler());

  const title = 'Github Actions 111';

  useEffect(() => {
    console.log('App:', title);
  }, []);

  return (
    <div className='App'>
      <h1>{title}</h1>
    </div>
  );
};

export default App;
