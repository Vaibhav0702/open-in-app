import './App.css';
import { AllRoutes } from './Routes/AllRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <>
      <AllRoutes />
      <ToastContainer />
    </>
  )
}