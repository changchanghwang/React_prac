import { Route, Link } from 'react-router-dom';
import Cat from './Cat';
import Dog from './Dog';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">홈</Link>
        <Link to="/cat/g">고양이</Link>
        <Link to="/dog">개</Link>
      </div>
      <Route path="/" exact>
        <Home data={'hi'} />
      </Route>
      <Route path="/cat/:cat_name" component={Cat} />
      <Route path="/dog">
        <Dog />
      </Route>
    </div>
  );
}

export default App;
