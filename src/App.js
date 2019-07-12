import React, {useState} from 'react';
import './App.css';


function ButtonClick(props){
  return(
    <button onClick={props.onClick}>{props.setValue}</button>
  )
}

function App() {
  
  const [randomclickvalue, setrandomclickvalue] = useState(0);
  const [uprandomQuotes, setuprandomQuotes] =  useState([
    {quote: "I love you the more in that I believe you had liked me for my own sake and for nothing else.",
     vote: 0},
    {quote: "But man is not made for defeat. A man can be destroyed but not defeated." , vote: 0},
    {quote: "There is nothing permanent except change." , vote: 0},
    {quote: "You cannot shake hands with a clenched fist." , vote: 0},
    {quote: "Let us sacrifice our today so that our children can have a better tomorrow." , vote: 0}
      ]);
    const [rquote, setRquote] = useState(uprandomQuotes[0]);
  
  const nextQuote = () =>{
    const randomValue = Math.floor(Math.random()*5);    
    setrandomclickvalue(randomValue);
    setRquote(uprandomQuotes[randomValue]);    
  }

  const vote = () => {
        let randomQuotes = uprandomQuotes;
    randomQuotes[randomclickvalue].vote = randomQuotes[randomclickvalue].vote + 1;
     setuprandomQuotes(randomQuotes.map((element) => element));        
    setRquote(uprandomQuotes[randomclickvalue]);     
  }
  
  return (
    <div className="App">
      <div>
      {rquote.quote}
      </div>
      <div>
        the vote given to this quote is {rquote.vote}
      </div>
      <ButtonClick setValue="next quote" onClick={nextQuote}  />
      <ButtonClick setValue="vote" onClick={vote} />
    </div>
  );
}

export default App;
