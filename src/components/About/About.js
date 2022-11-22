import "./About.css";

const About = () => {
  return (
    <div class="row-about" id="about">
      <div class="flex-container-about justify-content-evenly ">
        <div className="flex-container-about justify-content-evenly">
          <div>
            <h2>
              70% of purchase decisions are made <br />
              after a shopper enters a store
            </h2>

            <hr />
            <p className="par">
              We apply our continuous understanding of Retailers, Brands, and
              Shoppers to design
              <br />
              effective know-how solutions that drive significant long-term
              revenue and brand affinity. Retail partners and brand
              <br />
              clients across the globe have trusted us with result-
              <br />
              driven omnichannel marketing to stay connected with shoppers,
              which are crucial and
              <br />
              experiential during and post-pandemic.
            </p>
          </div>
          <div>
            <img
              src="assets/supermarket.jpg"
              class="aboutPic img-fluid"
              alt="supermarket"
            />
          </div>
        </div>
      </div>
      <div class="flex-container-description justify-content-evenly">
        <div>
          <dl>
            <dt>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-shop"
                viewBox="0 0 16 16"
                color="red"
              >
                <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
              </svg>
              For Retailers
            </dt>
            <dd>
              Improve in-store shopping journey to stimulate purchases and
              encourage bigger basket size through
            </dd>
            <ul>
              <li>Multi-touch points</li>
              <li>Efficient shelf and stock management </li>
              <li>Reward and loyalty approach</li>
            </ul>
          </dl>
        </div>
        <div>
          <dt>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              class="bi bi-megaphone"
              viewBox="0 0 16 16"
              color="red"
            >
              <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49a68.14 68.14 0 0 0-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 74.663 74.663 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199V2.5zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0zm-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233c.18.01.359.022.537.036 2.568.189 5.093.744 7.463 1.993V3.85zm-9 6.215v-4.13a95.09 95.09 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A60.49 60.49 0 0 1 4 10.065zm-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68.019 68.019 0 0 0-1.722-.082z" />
            </svg>
            For Brands
          </dt>
          <dd>
            Initiate communication and engagement with shoppers to aid product
            discovery and build trust through
          </dd>
          <ul>
            <li>Five senses (see, touch, taste, smell, hear) presentation</li>
            <li>In-person sampling and demos</li>
            <li>On-site shopper behavior insight</li>
          </ul>
        </div>
        <div>
          <dt>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              class="bi bi-people"
              viewBox="0 0 16 16"
              color="red"
            >
              <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
            </svg>
            For Shoppers
          </dt>
          <dd>
            Create personalized and sensory shopping experience to make and
            inspire purchase decisions through: ​
          </dd>
          <ul>
            <li>Simplified shopping journey</li>
            <li>Receptive, trusted messaging</li>
            <li>Made-for-actions communication points</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
