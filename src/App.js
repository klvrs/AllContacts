import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import AddContact from './components/AddContact';
import UpdateContact from './components/UpdateContact';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
            <Route path= '/' element= {<Home />} />
            <Route path= 'add-contact' element= {<AddContact />} />
            <Route path= 'update-contact/:id' element= {<UpdateContact />} />
        </Routes>
    </div>
  );
}

export default App;
