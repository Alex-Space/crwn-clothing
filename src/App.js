import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Routes, Route } from 'react-router-dom';

const TopicsList = () => {
  return (
  <div>
    TopicsList page
  </div>
  );
};

const TopicDetail = () => (
  <div>
    TopicDetail page
  </div>
);

function App() {
  return (
    <Routes>
      <Route exec={false} path='/' element={<HomePage />} />
      <Route path='/topics' element={<TopicsList />} />
      <Route path='/topics/:tipicId' element={<TopicDetail />} />
    </Routes>
  );
}

export default App;
