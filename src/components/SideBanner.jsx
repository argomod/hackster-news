import React, { Component } from "react";

class SideBanner extends Component {
  render() {
    return (
      <aside className="side-banner">
        <div className="banner-ad border pb-30 mb-30">
          <img
            className="desktop-banner-ad"
            alt="Banner ad"
            src="images/banner-ad.png"
          />
          <img
            className="mobile-banner-ad"
            alt="Banner ad"
            src="images/banner-ad-mobile.png"
          />
          <div className="ad-label mt-10">Advertisement</div>
        </div>
        <div className="newsletter-cta">
          <div className="newsletetr-cta-text mb-15">
            <p className="body-l pr-10">
              Get our weekly newsletter when you join Hackster.
            </p>
            <img src="images/spaceman-with-mail.png" />
          </div>
          <input
            type="text"
            className="newsletter-form mb-10"
            placeholder="Enter your email"
          />
          <button
            className="button-large button-primary button-full-width"
            type="submit"
          >
            Sign up
          </button>
        </div>
      </aside>
    );
  }
}

export default SideBanner;
