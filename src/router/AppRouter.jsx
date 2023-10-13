import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import News from "../pages/News";
import Video from "../pages/Video";
import Features from "../pages/Features";
import Topics from "../pages/Topics";
import Live from "../pages/Live";
import Footer from "../components/Footer";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <Router >
      <Navbar />
      <Routes>
        <Route path="/" element={<News/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/login" element={<Login />} />
        <Route path="" element={<PrivateRouter/>}>
          <Route path="/video" element={<Video />} />
          <Route path="/features" element={<Features />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/live" element={<Live />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default AppRouter;
