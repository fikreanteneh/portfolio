
import { Outlet } from 'react-router-dom';
import Navbar from './../components/Navbar';


const RootLayout = () => {
    return (
        <div className='mx-3'>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default RootLayout