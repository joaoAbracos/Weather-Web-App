import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Weather from './Weather';

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<Weather />} />
        </Routes>
    )
}

export default AppRouter