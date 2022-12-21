import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './Pages/Landing'
import Main from './Pages/Main';

function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route exact path='/' element={<Landing/>}/>
      <Route exact path='/main' element={<Main/>}/>
    </Routes>
    </BrowserRouter>
    

 
  );
}

export default App;
