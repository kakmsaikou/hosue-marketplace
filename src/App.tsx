import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Explore from './pages/Expore';
import Offer from './pages/Offer';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/offer" element={<Offer />} />
          <Route path='/profile' element={<SignIn/>} />
          <Route path='/sign-in' element={<SignIn/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/forgot-password' element={<ForgotPassword/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
