import './App.scss';
import Home from './pages/Home/Home';
import Uploads from './pages/Uploads/Uploads';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/videos/84e96018-4022-434e-80bf-000ce4cd12b8" />} />
          <Route path="/upload" element={<Uploads />} />
          <Route path="/videos/:videoId" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;