/* eslint-disable no-unused-vars */
import { Outlet } from 'react-router-dom';
import CenteredTabs from './TopNav';
import DrawerAppBar from './TopNav';
//import classes from '../pages/Root.module.css';

function RootLayout() {
    return (
        <div>
            <DrawerAppBar />
            <Outlet />
        </div>
    )
}
export default RootLayout;