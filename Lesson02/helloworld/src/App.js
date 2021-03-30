import logo from './logo.svg';
import './App.css';
import Blog from './components/Blog';
import Header from './components/Header';
function App() {
  const appjsClick=(text)=>{
    console.log('Click in App.js TEXT:',text)
  }
  return (
    <div className="App" htmlFor="">
      <Header appjsClick={appjsClick}/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <label htmlFor="">Label Sample</label>
         Hello World!!!
        <Blog></Blog>
        
      <Blog/>
        <Blog/>
        <Blog/>
        <Blog/> 
      </header> */}
    </div>
  );
}

export default App;