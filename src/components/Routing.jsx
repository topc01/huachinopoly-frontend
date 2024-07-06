import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App';
import Us from '../profile/Us'
import Board from './Board'
import Instructions from './Instructions'
import Principal from './Principal'
import VentanaJuego from './VentanaJuego';
import Register from './Register';
import AdminCheck from '../protected/AdminCheck'
import UserCheck from '../protected/UserCheck'
import Login from './Login'
import Logout from './Logout'
import Unirse from './Unirse'


function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<App />}/>
                <Route path={'/aboutUs'} element={<Us />}/>
                <Route path={'/instructions'} element={<Instructions />}/>
                <Route path={'/Board'} element={<Board />}/>
                <Route path={'/Principal'} element={<Principal />}/>
                <Route path={'/VentanaJuego'} element={<VentanaJuego />}/>
                <Route path={'/Register'} element={<Register />}/>
                <Route path={"/Admincheck"} element={<AdminCheck />}/>
                <Route path={"/Usercheck"} element={<UserCheck />}/>
                <Route path={"/Login"} element={<Login />}/>
                <Route path={"/Logout"} element={<Logout />}/>
                <Route path={"/Unirse"} element={<Unirse />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;