import logo from './logo.svg';
import './App.css';
import Blog from './components/Blog';
function App() {
  return (
    <div className="App" htmlFor="">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <label htmlFor="">Label Sample</label>
         Hello World!!!
        {/* <Blog></Blog> */}
        <Blog/>
        <Blog/>
        <Blog/>
        <Blog/>
        <Blog/>
      </header>
    </div>
  );
}

export default App;