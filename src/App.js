import {Routes, Route} from 'react-router-dom'

import Navigation from './routes/navigation/Navigation';
import Home from './routes/home/Home';
import SignIn from './routes/sign-up/SignIn';
import About from './routes/About/About';
import Store from './routes/Store/Store';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home />} />
        <Route path="/store" >
          <Route path=":id" element={<Store />} />
          {/* <Route path="/store/high-top" element={<Store />} />
          <Route path="/store/runners" element={<Store />} /> */}
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
