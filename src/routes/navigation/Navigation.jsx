import {Link, Outlet} from 'react-router-dom'
import { Fragment } from 'react';
import {useSelector} from 'react-redux'
import { signOutUser } from '../../utils/firebase';
import CartIcon from '../../components/CartIcon/CartIcon';
import Footer from '../../components/footer/Footer';
import CartSide from '../../components/CartSide/CartSide';

import { getCartStatus } from '../../store/features/cart';

import './navigation.scss'

export default function Navigation() {
    const cartStatus = useSelector(getCartStatus)
  
    const currentUser = useSelector((state) => state.user.currentUser)
  return (
    <Fragment>
        <nav className='navbar'>
            <Link to="/">
                <h1>Farpoints</h1>
            </Link>

            <div className='navbar-container'>
                {/* <Link className='navbar-container-link' to="/store/sneaker">
                    <p>Sneaker</p>
                </Link>
                <Link className='navbar-container-link' to="/store/high-top">
                    <p>High Top</p>
                </Link>
                <Link className='navbar-container-link' to="/store/runners">
                    <p>Runners</p>
                </Link> */}
                <Link className='navbar-container-link' to="/shop">
                    <p>Shop</p>
                </Link>
                <Link className='navbar-container-link' to="/about">
                    <p>About</p>
                </Link>

                {currentUser ? (
                    <div onClick={signOutUser} className='navbar-container-link' >
                        <p>sign Out</p>
                    </div>
                ) : (
                    <Link className='navbar-container-link' to="/sign-in">
                    <p>Sign In</p>
                </Link>
                )

                }
                
                <div className="navbar-container-link">
                    <CartIcon  />
                </div>
                
            </div>
         {cartStatus && <CartSide />}       
        </nav>
        <div>
            <Outlet />
        </div>
        
        <Footer />
    </Fragment>
  )
}
