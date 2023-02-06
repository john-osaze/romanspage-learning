import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";

function App() {

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/signin" element={<SignIn />}></Route>
                    <Route path="/signup" element={<SignUp />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </div>
        </Router>
    )
}

export default App;
