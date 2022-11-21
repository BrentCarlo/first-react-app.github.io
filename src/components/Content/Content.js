import "./Content.css";

const Content = () => {
  return (
    <div class="row content container-fluid">
      <div class="d-flex content-container flex-column justify-content-center align-items-center">
        <div class="mt-5"></div>
        <div class="flex-container-content container-fluid">
          <div>
            <img src="assets/act1.jfif" class="act img-fluid" alt="pic" />
          </div>
          <div>
            <img src="assets/act2.jpg" class="act img-fluid" alt="pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
