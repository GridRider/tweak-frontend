import './App.css';
import { Routes, Route,BrowserRouter } from 'react-router-dom';

import Home from './components/home/Home';
import LanguageSelection from './components/language-selection/LanguageSelection';
import SignUp from './components/sign-up/SignUp';
import CreateTweak from './components/create-tweak/CreateTweak';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/language-selection" element={<LanguageSelection />} />
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/create-tweak" element={<CreateTweak/>}/>
      </Routes>
    </div>
  );
}

export default App;
