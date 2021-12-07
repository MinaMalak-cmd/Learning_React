import Navbar from './navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import First from './First';
import BlogDetail from './BlogDetail';
import New from "./New"
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          df
          {/* <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <First />
            </Route>
            <Route path="/blogDetail/:id">
              <BlogDetail />
            </Route>
          </Switch> */}
          <New />
        </div>
      </div>
    </Router>
  );
}

export default App;
