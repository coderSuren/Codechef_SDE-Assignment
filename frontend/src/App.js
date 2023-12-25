import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import SignIn from './components/signin/Signin';
import Signup from './components/signup/SignUp';
import { ContextProvider } from './Context';
import BlogPost from './components/blog/BlogPost';
import {useLayoutEffect} from 'react';

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 
function App() {
  return (
    <BrowserRouter>
    <ContextProvider>
    <Wrapper>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/signin' element={<SignIn></SignIn>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='/blog/:id' element={<BlogPost />}></Route>
    </Routes>
    </Wrapper>
    </ContextProvider>

    </BrowserRouter>
    
  );
}

export default App;