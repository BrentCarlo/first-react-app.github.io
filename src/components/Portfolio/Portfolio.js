import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div class="flex-container-portfolio justify-content-evenly ">
      <div class="row-portfolio" id="portfolio">
        <div class="flex-container-about justify-content-evenly">
          <img src="assets/ACT-Media.jpg" class="portpic" />
          <h2>What We Do ?</h2>
          <hr />
          <p className="par">
            We combine strategy and industrial knowledge from our various
            locations worldwide to help retailers and brands communicate
            effectively to shoppers in-store, where the final purchase decision
            is made. We create our in-store advertising with ActMedia’s unique
            sensorial- based creatives, including shelf-media, digital signages
            and in-store Taste and Touch.​ ​
          </p>
        </div>
      </div>
      <div class="flex-container-about justify-content-evenly">
        <img src="assets/cokexmass.jpg" class="portpic2 img-fluid" />
      </div>
    </div>
  );
};

export default Portfolio;
