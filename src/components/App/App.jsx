import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Dashboard from "../Dashboard/Dashboard";
import Review from "../Review/Review";
import Reviews from "../Reviews/Reviews";
import AboutMe from "../AboutMe/AboutMe";
import Contact from "../AboutMe/Contact";
import MyStory from "../AboutMe/MyStory";
import Hobbies from "../AboutMe/Hobbies";
import AboutUs from "../AboutUs/AboutUs";
import SiteHistory from "../AboutUs/SiteHistory";
import SiteMission from "../AboutUs/SiteMission";
import PageNotFound from "../PageNotFound/PageNotFound";

function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://api.nomoreparties.co/emoji-critic-ens")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setReviews(data);
      })
      .catch((err) => {
        console.error("Error fetching reviews:", err);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews reviews={reviews} />} />
        <Route
          path="/reviews/:reviewId"
          element={<Review reviews={reviews} />}
        />
        <Route path="/about-me" element={<AboutMe />}>
          <Route path="my-story" element={<MyStory />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/about-us" element={<AboutUs />}>
          <Route path="site-history" element={<SiteHistory />} />
          <Route path="site-mission" element={<SiteMission />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
