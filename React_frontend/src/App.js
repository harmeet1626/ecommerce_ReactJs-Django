import { useEffect } from "react";
import NavbarComponent from "./components/navbar";
import Router_view from './routes/index'
import { useDispatch } from "react-redux";
import { checkAuth } from "./store/login";
import { useLocation } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const dispatch = useDispatch()
  const location = useLocation()
  useEffect(() => {
    dispatch(checkAuth())
  }, [])
  return (
    <div ><ToastContainer />
      <header className="App-header">
        {location.pathname != '/login' ?
          <NavbarComponent /> : ""
        }
      </header>
      <Router_view />
    </div>
  );
}

export default App;
