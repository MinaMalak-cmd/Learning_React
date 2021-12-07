import Navbar from './navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import First from './First';
import BlogDetail from './BlogDetail';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <First />ghhh
            </Route>
            <Route path="/blogDetail/:id">
              <BlogDetail />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
