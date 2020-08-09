import React from "react";

let articleData = [
  {
    title: "This Apple IIe Robot Is the Best Thing You’ll See Today",
    summary:
      "It’s the teryifying, clunky, robotic monster of your parents’ Y2K nightmares.",
    author: "Alasdair Allan",
    image: "images/1-apple-bot.jpg",
    alt: "Test",
    key: "1"
  },
  {
    title: "Cheap Iot Gadgets Betray You Even After You Toss Them in the Trash",
    summary: "They collect your private data – and then what?",
    author: "Alasdair Allan",
    image: "images/2-iot.jpg",
    alt: "Test",
    key: "2"
  },
  {
    title: "Picking the Right Arduino",
    summary: "We’ll help you comb through their 8-bit and 32-bit options.",
    author: "James Lewis",
    image: "images/3-arduino.jpg",
    alt: "Test",
    key: "3"
  }
];

const articleList = articleData.map(item => {
  return (
    <article className="featured-article border pb-30 pt-30" key={item.key}>
      <div className="aspect-ratio-box">
        <img alt={item.alt} src={item.image} />
      </div>
      <div className="featured-article-text">
        <h3>{item.title}</h3>
        <p className="article-summary body-m mt-05">{item.summary}</p>
        <p className="author body-s mt-10 color-pebble">{item.author}</p>
      </div>
    </article>
  );
});

const FeaturedArticles = props => {
  return (
    <section className="featured-articles-section">
      <h5>Featured Articles</h5>
      {articleList}
    </section>
  );
};

export default FeaturedArticles;
