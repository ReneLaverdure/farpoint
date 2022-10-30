import {Routes, Route} from 'react-router-dom'
import { useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "./utils/firebase";
import {useDispatch} from 'react-redux'

import Navigation from './routes/navigation/Navigation';
import Home from './routes/home/Home';
import Auth from './routes/Auth/Auth';
import About from './routes/About/About';
import Shop from './routes/Shop/Shop';
import Checkout from './routes/Checkout/Checkout'
import {setCurrentUser} from './store/features/user';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  return (

    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home />} />
        <Route path="/shop/*" element={<Shop />} >
          {/* <Route path=":id" element={<Store />} /> */}
          {/* <Route path="/store/high-top" element={<Store />} />
          <Route path="/store/runners" element={<Store />} /> */}
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<Auth />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
 
  );
}

export default App;
