/* eslint-disable no-unused-vars */
import { Outlet } from 'react-router-dom';
import IconMenu from './IconMenu'
//import classes from '../pages/Root.module.css';

function RootLayout() {
    return (
        <>
            <IconMenu />
            <Outlet />
        </>
    )
}
export default RootLayout;