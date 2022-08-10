import {Link, Outlet} from 'react-router-dom'
import { Fragment } from 'react';

import Footer from '../../components/footer/Footer';
import './navigation.scss'

export default function navigation() {
  return (
    <Fragment>
        <nav className='navbar'>
            <Link to="/">
                <h1>Farpoints</h1>
            </Link>

            <div className='navbar-container'>
                <Link className='navbar-container-link' to="/store/sneaker">
                    <p>Sneaker</p>
                </Link>
                <Link className='navbar-container-link' to="/store/high-top">
                    <p>High Top</p>
                </Link>
                <Link className='navbar-container-link' to="/store/runners">
                    <p>Runners</p>
                </Link>
                <Link className='navbar-container-link' to="/about">
                    <p>About</p>
                </Link>
                <Link className='navbar-container-link' to="/sign-in">
                    <p>Sign In</p>
                </Link>
            </div>

        </nav>
        <Outlet />
        <Footer />
    </Fragment>
  )
}
