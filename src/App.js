import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [message, setMessage] = useState('');
  const [error, setError] = useState('')

  useEffect(()=> {
    fetchMessage();
  }, []);

  const fetchMessage = async () => {
    try {
      const response = await axios.get("https://pu0pudrwd6.execute-api.eu-west-1.amazonaws.com/Prod/hello/", {
        headers: {

        },
        response : true
      });
      setMessage(response.data.message)
      console.log(response)
    } catch (error) {
      setError(error)
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {message}
        </p>
        <p>
          {error}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
