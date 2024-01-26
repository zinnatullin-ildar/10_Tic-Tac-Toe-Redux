import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Game } from "./game/game";

import { ReduxRenderer } from "./reduxManager";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ReduxRenderer store={store}>
            <Game />
        </ReduxRenderer>
    </React.StrictMode>,
);
