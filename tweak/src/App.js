import './App.css';
import { Routes, Route,BrowserRouter } from 'react-router-dom';

import Home from './components/home/Home';
import LanguageSelection from './components/language-selection/LanguageSelection';
import SignUp from './components/sign-up/SignUp';
import CreateTweak from './components/create-tweak/CreateTweak';
import ListTweak from './components/list-tweak/ListTweak';
import EachTweak from './components/list-tweak/EachTweak';
import DescriptionTweak from './components/description-tweak/DesriptionTweak';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/language-selection" element={<LanguageSelection />} />
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/create-tweak" element={<CreateTweak/>}/>
        <Route path="/list-tweak" element={<ListTweak/>}/>
        <Route path="/each-tweak" element={<EachTweak/>}/>
        <Route path="/description-tweak" element ={<DescriptionTweak/>}/>
      </Routes>
    </div>
  );
}

export default App;
