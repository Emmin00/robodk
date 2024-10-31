import {Routes, BrowserRouter, Route} from "react-router-dom";
import App from "./App";

export function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={
                    <App />
                } path="/" />

                <Route element={
                    <App />
                } path="/:page" />
            </Routes>
        </BrowserRouter>
    )
}