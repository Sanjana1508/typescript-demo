import React from "react";
import { combineReducers } from "redux";
import { createStore } from "redux";
import { Provider, RootStateOrAny } from "react-redux";

import "./App.css";
import Product from "./components/pages/Product";
import CustomButton from "./components/atoms/CustomButton";

const rootReducer: RootStateOrAny = combineReducers({});

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Product />
      </div>
      <CustomButton>{(num) => <p>The number is {num}</p>}</CustomButton>
    </Provider>
  );
}

export default App;
