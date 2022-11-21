import "./Portfolio.css";

const Portfolio2 = () => {
  return (
    <div class="client-head container-fluid">
      <h3>Our clients</h3>
      <h4>Trusted by Retailers & Clients Worldwide​ ​</h4>
      <div
        id="carouselExampleInterval"
        class="carousel-slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner flex-container justify-content-evenly">
          <div class="carousel-item active" data-bs-interval="1500">
            <img
              src="client/coke.jpg"
              class="d-block w-100 img-fluid"
              alt="..."
            />
          </div>
          <div class="carousel-item" data-bs-interval="1500">
            <img
              src="client/gatorade.jpg"
              class="d-block w-100 img-fluid"
              alt="..."
            />
          </div>
          <div class="carousel-item" data-bs-interval="1500">
            <img
              src="client/nestle.png"
              class="d-block w-100 img-fluid"
              alt="..."
            />
          </div>
          <div class="carousel-item" data-bs-interval="1500">
            <img
              src="client/nissin.png"
              class="d-block w-100 img-fluid"
              alt="..."
            />
          </div>
          <div class="carousel-item" data-bs-interval="1500">
            <img
              src="client/sanmig.jpg"
              class="d-block w-100 img-fluid"
              alt="..."
            />
          </div>
          <div class="carousel-item" data-bs-interval="1500">
            <img
              src="client/urc.png"
              class="d-block w-100 img-fluid"
              alt="..."
            />
          </div>
          <div class="carousel-item" data-bs-interval="1500">
            <img
              src="client/fritolay.png"
              class="d-block w-100 img-fluid"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Portfolio2;
