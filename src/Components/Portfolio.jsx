/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/pic2.jpg";

const imageAltText = "Man working on a laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "TrailBlaze",
    description:
      "TrailBlaze is an all-in-one movie and TV show app built using React, Redux Toolkit, and the TMDB API. With a beautifully designed front-end, it offers a seamless viewing experience for users. The app allows users to choose from various genres and filter their search results by rating, making it easy to find the perfect movie or TV show to watch.",
    url: "https://github.com/SurajPratap10/TrailBlaze",
  },
  {
    title: "Imagine_AI",
    description:
      "The IMAGINE - AI, which is built using the OpenAI API library DALL-E 2, aims to solve the problem of limited creativity and imagination. This is a fully mobile responsive image generator built with Node.js and Express that uses OpenAI's Dall-E models to generate images.",
    url: "https://github.com/SurajPratap10/Imagine_AI",
  },
  {
    title: "Remindify",
    description:
      "Remindify is a MERN stack app that can easily add tasks with their deadlines to ensure that you stay on top of your to-do list. Once you've added a task, our app will automatically send you a WhatsApp message at the specified time to remind you of what you need to do.",
    url: "https://github.com/SurajPratap10/Remindify",
  },
  {
    title: "CoinMeter",
    description:
      "CoinMeter is a completely responsive and functional real-time Cryptocurrency data fetching app. This app gives you the facility to analyze the top cryptocurrencies across the world and see their real-time market cap and exchanges with the help of a properly designed historical chart for each coin with a clean UI experience.It also has a trending section where the last 24 hours profitable coins are shown.",
    url: "https://github.com/SurajPratap10/CoinMeter_Project6",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
