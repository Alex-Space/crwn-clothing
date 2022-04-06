import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exect path='/' element={<HomePage />} />
      <Route path='/shop' element={<ShopPage />} />
    </Routes>
  );
}

export default App;
