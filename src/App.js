import logo from './logo.svg';
import Navbar from './navbar';
import Home from './Home';
function App() {
  // const col = 'green';
  return (
    <div className="App">
      <Navbar />
      <div className="content">
       <Home />
      </div>
    </div>
  );
}

export default App;
