import React from "react";

export default function Section1() {
  return (
    <>
      <div className="sec1">
        <div className="w3-container" id="about">
          <h3 className="w3-center">
            <b>ABOUT THE COMPANY</b>
          </h3>
          <p className="w3-center w3-large">Key features of our company</p>
          <div className="sec2">
            <div className="w3-row-padding w3-center" id="div3">
              <div className="w3-quarter">
                <i className="fa fa-gears w3-margin-bottom w3-jumbo w3-center"></i>
                {/* <p className="w3-large">Service</p> */}
                <div class="w3-center w3-padding-16">
                  <span class="w3-large w3-bar-item w3-button w3-hover-none w3-border-white w3-bottombar w3-hover-border-black">
                    Service
                  </span>
                  <p>
                    Connecting NGOs with people who have surplus food to provide
                    meals for the needy, reducing hunger and food waste
                    efficiently.
                  </p>
                </div>
              </div>

              <div className="w3-quarter">
                <i className="fa fa-heart w3-margin-bottom w3-jumbo"></i>
                {/* <p className="w3-large">Passion</p> */}
                <div class="w3-center w3-padding-16">
                  <span class="w3-large w3-bar-item w3-button w3-hover-none w3-border-white w3-bottombar w3-hover-border-black">
                    Passion
                  </span>
                  <p>
                    Our passion is to bridge the gap between extra food and
                    those in need, fostering a community of compassion.
                  </p>
                </div>
              </div>
              <div className="w3-quarter">
                <i className="fa fa-balance-scale w3-margin-bottom w3-jumbo"></i>
                {/* <p className="w3-large">Equality</p> */}
                <div class="w3-center w3-padding-16">
                  <span class="w3-large w3-bar-item w3-button w3-hover-none w3-border-white w3-bottombar w3-hover-border-black">
                    Equality
                  </span>
                  <p>
                    Our equality policy ensures that every individual,
                    regardless of background, has equal access to our services
                    and opportunities.
                  </p>
                </div>
              </div>
              <div className="w3-quarter">
                <i className="fa fa-handshake-o w3-margin-bottom w3-jumbo"></i>
                {/* <p className="w3-large">Support</p> */}
                <div class="w3-center w3-padding-16">
                  <span class="w3-large w3-bar-item w3-button w3-hover-none w3-border-white w3-bottombar w3-hover-border-black">
                    Support
                  </span>
                  <p>
                    We offer 24/7 support to facilitate smooth connections
                    between donors and NGOs, addressing any queries promptly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
