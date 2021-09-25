//react
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

//redux
import store from './redux/index';

//component 
import Pages from './pages/Pages';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Pages />
      </Router>
    </Provider>
  );
}

export default App;
