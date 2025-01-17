import React from "react";
import "./App.css";

export default function TouristInfoCards() {
  return (
    <div className="card card-list">
      <a
        href="https://peoplemakeglasgow.com/"
        target="_blank"
        className="tourist-info-card"
        rel="noopener noreferrer"
      >
        <div className="card-body">
          <img
            className="card-img-top"
            src="https://media.timeout.com/images/105400989/750/422/image.jpg"
            alt=""
          />
          <h3>Glassgow</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, optio?
          </p>
        </div>
      </a>
      <a
        href="https://www.visitmanchester.com/"
        target="_blank"
        className="tourist-info-card"
        rel="noopener noreferrer"
      >
        <div className="card-body">
          <img
            className="card-img-top"
            src="https://static.amazon.jobs/locations/118/thumbnails/Manchester_-_Thumbnail.jpg?1456767226"
            alt="manchester"
          />
          <h3>Manchester</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, optio?
          </p>
        </div>
      </a>
      <a
        href="https://visitlondon.com/"
        target="_blank"
        className="tourist-info-card"
        rel="noopener noreferrer"
      >
        <div className="card-body">
          <img
            className="card-img-top"
            src="https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg"
            alt="london"
          />
          <h3>London</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, optio?
          </p>
        </div>
      </a>
    </div>
  );
}
