/* eslint-disable no-unused-vars */
import { Outlet } from 'react-router-dom';
import IconMenu from './IconMenu';
//import classes from '../pages/Root.module.css';

function RootLayout() {
    return (
        <div>
            {/* <IconMenu /> */}
            <Outlet />
        </div>
    )
}
export default RootLayout;