import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './CRUD/Create';
import Read from './CRUD/Read';
import Update from './CRUD/Update';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path='/' element={<Create />} />
          <Route path='/read' element={<Read />} />
           <Route path='/update' element={<Update />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;