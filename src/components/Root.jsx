/* eslint-disable no-unused-vars */
import { Outlet } from 'react-router-dom';
import CenteredTabs from './TopNav';
//import classes from '../pages/Root.module.css';

export default function RootLayout() {
    return (
        <div>
            <CenteredTabs />
            <Outlet />
        </div>
    )
}
