import {Routes,Route} from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import SingleProductPage from './SingleProductPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/product/:id" element={<SingleProductPage/>}></Route>
      </Routes>
    </>
  );
}

export default App;
