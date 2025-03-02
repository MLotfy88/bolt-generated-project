import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Supplies from './pages/Supplies';
import Categories from './pages/Categories';
import Companies from './pages/Companies';
import Calendar from './pages/Calendar';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [supplies, setSupplies] = useState([]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard supplies={supplies} />} />
        <Route path="/supplies" element={<Supplies supplies={supplies} setSupplies={setSupplies} />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/calendar" element={<Calendar supplies={supplies} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
