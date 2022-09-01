import {Routes, Route} from 'react-router-dom'

import Navigation from './routes/navigation/Navigation';
import Home from './routes/home/Home';
import Auth from './routes/Auth/Auth';
import About from './routes/About/About';
import Shop from './routes/Shop/Shop';
import Checkout from './routes/Checkout/Checkout'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home />} />
        <Route path="/shop*" element={<Shop />} >
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
