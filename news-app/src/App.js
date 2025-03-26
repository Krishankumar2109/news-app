import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
function App() {
    const [count, setCount] = useState(0);
    return (_jsx(_Fragment, { children: _jsx(Home, {}) }));
}
export default App;
