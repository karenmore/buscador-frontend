import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layout/AuthLayout'
import ProtectedRoutes from './layout/ProtectedRoutes';

import Login from './pages/Login';
import ForgetPassword from './pages/ForgetPassword';
import ChangePassword from './pages/ChangePassword';
import Product from './pages/Product';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './pages/Register';
import Admin from './pages/Admin';

import { AuthProvider } from './context/AuthProvider';
import { EditProductProvider } from './context/EditProductProvider';

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <EditProductProvider>
        <Routes>
          <Route path='/' element={<AuthLayout />}>
            <Route index element={<Login />}/>
            <Route path='register' element={<Register />}/>
            <Route path='forget-password' element={<ForgetPassword />}/>
            <Route path='change-password' element={<ChangePassword />}/>

          </Route>  

          <Route path='/product' element={<ProtectedRoutes/>}>
            <Route index element={<Product/>}/>
            <Route path='admin' element={<Admin/>}/>
          </Route>

          </Routes> 
          <ToastContainer />
        </EditProductProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
