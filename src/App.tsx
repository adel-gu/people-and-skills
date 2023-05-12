import React from 'react';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="p-16">
        <Home></Home>
      </div>
    </Provider>
  );
}

export default App;
