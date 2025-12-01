import "../css/App.css";
import { useState } from "react";

// IMAGES 

// card one
import bgImg from "../assets/images/illustration-article.svg";
import firstUser from "../assets/images/image-avatar.webp";

// card two
import secondBgImg from "../assets/images/second-illustration-article.svg";

// card three
import thirdBgImg from "../assets/images/third-illustration-article.svg";


function BlogPreviewCard() {
  const [index, setIndex] = useState(0);

  const cards = [
    {
      // default
      img: bgImg,
      banner: "Learning",
      date: "Published 21 Dec 2023",
      title: "HTML & CSS Foundations",
      desc: "These languages are the backbone of every website, defining structure, content, and presentation.",
      user: "Greg Hooper",
      avatar: firstUser,
      theme: {
        bgColor: "#fae246" // yellow
      }
    },
    {
      // my version
      img: secondBgImg,
      banner: "Not Started",
      date: "Published 23 Dec 2023",
      title: "JavaScript Essentials for the Frontend",
      desc: "Understand variables, functions, events, and the DOM so you can make your interfaces interactive and respond to user actions with confidence.",
      user: "Greg Hooper",
      avatar: firstUser,
      theme: {
        bgColor: "#60ffd2ff" // mint green
      }
    },
    {
      // my version
      img: thirdBgImg,
      banner: "Not Started",
      date: "Published 25 Dec 2023",
      title: "Building Interfaces with React",
      desc: "Dive into components, props, and state to build reusable UI blocks and manage complex views with a clean, declarative mindset.",
      user: "Greg Hooper",
      avatar: firstUser,
      theme: {
        bgColor: "#54b7e9ff" // aqua "React" blue
      }
    }
  ];
  
  const activeBg = cards[index];
  const bgColor = activeBg.theme.bgColor;

  return (
    <div className="bg-container" style={{ backgroundColor: bgColor }}>
      <div className="container" >
        
        <div className="blog-cards-display">
          {cards.map((c, idx) => (
            <div 
              key={idx} 
              className={`blog-card ${index === idx ? "is-active" : "not-active"}`}
              onClick={() => setIndex(idx)}
            >

              <span className="img-wrapper" aria-label={`${c.title} Blog`}>
                <img src={c.img} alt={`${c.title} Blog`} aria-label="Blog Image"/>
              </span>

              <div className="banner-wrapper">
                <span className="blog-banner">
                  {c.banner}
                </span>
              </div>

              <div className="date-wrapper">
                <p className="blog-date">{c.date}</p>
              </div>

              <h1 className="blog-title">{c.title}</h1>
              <p className="blog-desc">{c.desc}</p>

              <div className="blog-author">
                <span className="avatar-img-wrapper" aria-label={`${c.user}`}>
                  <img src={c.avatar} alt={`${c.user}`} aria-label="Profile Image"/>
                </span>

                <span className="avatar-name-wrapper">
                  <p className="avatar-name">
                    {c.user}
                  </p>
                </span>

              </div>
            </div>
          ))}
      </div>
      </div>
        
    </div>
  )
}

export default BlogPreviewCard
