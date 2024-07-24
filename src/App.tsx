import { useState } from 'react';
import DataJson from './data.json'
import Nav from "./components/Navbar/Navbar";
import './App.css'

function App() {
  const [Data, setData] = useState(DataJson[0]);
  const [toggleLanguage, setToggleLanguage] = useState<Boolean>(true);

  const Changelanguage = () => {
    if (toggleLanguage) {
      setData(DataJson[1])
    } else {
      setData(DataJson[0])
    }
    setToggleLanguage(!toggleLanguage);
  }

  
  return (
    <div className={toggleLanguage ? "EN" : "AR"}>
      <Nav  navData={Data.nav} language={toggleLanguage} setToggle={Changelanguage} Data ={Data}  ></Nav>
    </div>

  );
}

export default App;
