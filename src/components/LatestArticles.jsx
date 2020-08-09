import React from "react";

let today = new Date();
let month = [];
month[0] = "Jan";
month[1] = "Feb";
month[2] = "Mar";
month[3] = "Apr";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "Aug";
month[8] = "Sept";
month[9] = "Oct";
month[10] = "Nov";
month[11] = "Dec";
let pubDate = month[today.getMonth()] + " " + (today.getDate() - 1);

let articleData = [
  {
    title: "“Unexpected” LED Matrix Display",
    date: "27 min ago",
    key: "0"
  },
  {
    title:
      "MIT Researchers Develop RFID System to Improve Robot Picking Accuracy",
    date: "2 hours ago",
    key: "1"
  },
  {
    title:
      "Turn Arduino Sensors Into Long Distance Industrial Sensors with Industruino’s 4–20mA.ker",
    date: "6 hours ago",
    key: "2"
  },
  {
    title: "Hackster’s Handpicked Projects of the Week",
    date: "11 hours ago",
    key: "3"
  },
  {
    title: "This Outlet Mount Displays [Hides] Your RetroPie Setup in Style",
    date: pubDate,
    key: "4"
  },
  {
    title: "The Problem with Throwing Away a Smart Device…",
    date: pubDate,
    key: "5"
  },
  {
    title: "Review: Polymaker’s Polysher Makes Your 3D Prints Shiny and Smooth",
    date: pubDate,
    key: "6"
  }
];

const articleList = articleData.map(item => {
  return (
    <article className="latest-article border pt-15 pb-15" key={item.key}>
      <header>
        <h4>{item.title}</h4>
      </header>
      <div className="byline body-s color-pebble mt-05">
        <time>{item.date}</time>
      </div>
    </article>
  );
});

const LatestArticles = props => {
  return (
    <section className="latest-articles-section">
      <ul className="tab-sort border">
        <li className="tab-active h5-style">Latest</li>
        <li className="h5-style">Trending</li>
      </ul>
      {articleList}
    </section>
  );
};

export default LatestArticles;
