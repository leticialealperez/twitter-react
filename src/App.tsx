import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyled from './configs/GlobalStyles';
import AppRoutes from './routes/AppRoutes';
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyled />
      <AppRoutes/>
    </Provider>
  );
}

export default App;
