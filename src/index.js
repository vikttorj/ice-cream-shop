import React from "react";
import App from './components/App/App'

import { createRoot } from "react-dom/client";

import * as flavors from './constants/icecreams_flavors';
import { actions as actionsFreezer } from "./ducks/freezer";
import store from "./store";

setInterval(() => {
    store.dispatch(actionsFreezer.addIceCream(flavors.FABADA, 5))
}, 3500);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
//   <React.StrictMode>
    <App />
//   </React.StrictMode>
);
