import React from "react";

export default function Section2() {
  return (
    <>
      <div className="sec3">
        <div className="w3-container w3-light-grey">
          <div className="w3-row-padding">
            <div className="w3-col m6">
              <h3>"We feel the hunger"</h3>
              <p>
                Our website connects people with surplus food to NGOs dedicated
                to feeding the hungry. Through efficient coordination and our
                wide-reaching network, we facilitate the donation and
                distribution of safe, high-quality food to those in need. Our
                efforts ensure that excess food is not wasted but instead
                reaches those who need it most, combating hunger and fostering a
                community of compassion and sustainability.
              </p>
              <p>
                <a href="#work" className="w3-button w3-black">
                  <i className="fa fa-th"> </i> View Our Works
                </a>
              </p>
            </div>
            <div className="w3-col m6">
              <img
                id="img30"
                className="w3-image w3-round-large"
                src="img30.jpg"
                alt="Buildings"
                width="700"
                height="394"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
