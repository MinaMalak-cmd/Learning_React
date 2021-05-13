import Navbar from './navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import BlogDetail from './BlogDetail';
import CreateBlog from './CreateBlog';
import NotFound from './NotFound';
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
              <CreateBlog />
            </Route>
            <Route path="/blogDetail/:id">
              <BlogDetail />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
