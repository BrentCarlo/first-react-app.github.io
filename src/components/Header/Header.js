import "./Header.css";

const Header = () => {
  return (
    <div class="container-fluid">
      <div class="row header">
        <div class="col">
          <div class="container text-center mt-3 text-white">
            <a href="#top">
              <img src="assets/ACT-Media.jpg" class="head-pic" />
            </a>
          </div>
        </div>
        <div class="col">
          <div class="container nav">
            <div class="d-flex justify-content-evenly mt-3 text-white">
              <h5>
                <a href="#portfolio">PORTFOLIO</a>
              </h5>
              <h5>
                <a href="#about">ABOUT</a>
              </h5>
              <h5>
                <a href="#about">CONTACT</a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
