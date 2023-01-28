
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthorContext } from './AuthorContext'
import { ToastContext } from './ToastContext'
import LoginP from './LoginP';
import Registerp from './Registerp';
import Posts from './Posts';
import Senting from './Senting';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <ToastContext>
          <AuthorContext>
            <Routes>
              <Route path='/' element={<LoginP/>}/>
              <Route path='/register' element={<Registerp/>}/>
              <Route path ='/post' element={<Posts/>}/>
              <Route  path='/send' element={<Senting/>}/>
            </Routes>
          </AuthorContext>
        </ToastContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
