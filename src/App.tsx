import Home from './components/Pages/Home';
import {Routes, Route} from 'react-router-dom'
import Features from './components/Pages/Features'
import Courses from './components/Pages/Courses';
import Footer from './components/Footer';
import Faq from './components/Pages/Faq';
import SignIn from './components/Pages/SignIn';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/features' element={<Features/>}></Route>
      <Route path='/courses' element={<Courses/>}></Route>
      <Route path='/faq' element={<Faq/>}></Route> 
      <Route path='/signup' element={<SignIn/>}></Route> 
    </Routes>
    <Footer />
    </>
  );
}

export default App;
