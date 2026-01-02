
import {observer} from "mobx-react-lite";
import React, {useContext, useEffect} from "react";
import {Spinner} from "react-bootstrap";
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/NavBar";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../src/styles/custom.scss'
import './styles/index.css';
import {getUser} from "./api/userApi";
import {Context} from "./index";
import {getPhotoList} from "./api/cardApi";


const App = observer(() => {
  const [loading, setLoading] = React.useState(true);
  const {user, photoList} = useContext(Context)

  useEffect(() => {
    getUser().then((data) => {
        if (data) {
            user.setUser(data);
            user.setIsAuth(true);
            user.setIsStaff(data.is_staff)
        }
    })
    getPhotoList({page: 1, per_page: 10}).then(data => {
        if (data) {
            photoList.setPhotos(data);
        }
    }).finally(() => {
        setLoading(false);
    })
  }, [])

  if(loading)
  {
    return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <Spinner animation="border" variant="dark"/>
    </div>;
  }

  return (
      <BrowserRouter>
        <div className="d-flex flex-column align-items-center justify-content-between">
            <NavBar/>
            <AppRouter />
            <div style={{height: '60px'}}></div>
            <Footer/>
        </div>
      </BrowserRouter>
  );
})

export default App;
