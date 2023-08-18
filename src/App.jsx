import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Gallery from './Pages/Gallery/Gallery'
import Destination from './Pages/Destination/Destination'
import Blog from './Pages/Blog/Blog'
import SinglePage from './components/SinglePage/SinglePage'
import BlogSingle from './Pages/Blog/Blog-Single-Page/BlogSingle'
import Testimonial from './Pages/Testimonial/Testimonial'
import Contact from './Pages/Contact/Contact'
import Login from './Pages/Login/Login'
import Register from './Pages/Login/Register'
import Footer from './Pages/footer/Footer'
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/gallery" element={<Gallery/>}></Route>
        <Route path="/destination" element={<Destination/>}></Route>
        <Route path="/singlePage/:id" element={<SinglePage/>}></Route>
        <Route path="/blogSingle/:id" element={<BlogSingle/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/testimonial" element={<Testimonial/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/sign-in" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
