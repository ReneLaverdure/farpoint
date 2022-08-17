import {Routes, Route} from 'react-router-dom'

import Navigation from './routes/navigation/Navigation';
import Home from './routes/home/Home';
import Auth from './routes/Auth/Auth';
import About from './routes/About/About';
import Store from './routes/Store/Store';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Store />} >
          {/* <Route path=":id" element={<Store />} /> */}
          {/* <Route path="/store/high-top" element={<Store />} />
          <Route path="/store/runners" element={<Store />} /> */}
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<Auth />} />
      </Route>
    </Routes>
  );
}

export default App;
