import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Title></Title>
    </div>
  );
}

export function Title(){
  return(
    <>
      <h1>This is Title</h1>
      <p>This is description</p>
      <b>This is bold text</b>
      </>
    
  )
}
export default App;
