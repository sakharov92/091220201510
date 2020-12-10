import React from 'react';
import './App.css';
import store from "./Store/store";
import { Provider } from "react-redux";
import  Header from "./components/Header/Header"
import Statistic from "./components/Statistic/Statistic";
import Feedbacks from "./components/Feedbaсks/Feedbacks"

function App() {
  return (
      <Provider store={store}>
        <div className="App">
            <Header/>
            <Statistic/>
            <Feedbacks/>
        </div>
      </Provider>
  );
}

export default App;
