import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Uploads from './pages/Uploads/Uploads';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Uploads />} />
          <Route path="/:id" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;