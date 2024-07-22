import React from "react";

export default function Section5() {
  return (
    <>
      <div className="w3-container" id="work">
        <h3 className="w3-center">
          <b>OUR WORK</b>
        </h3>
        <p className="w3-center w3-large">What we've done for people</p>
        <div className="sec6">
          <div className="w3-row-padding">
            <div className="w3-col l3 m6">
              <div className="image-container">
                <img
                  id="img1"
                  src="img1.jpg"
                  // onclick={onClick(this)}
                  className="w3-hover-opacity"
                  alt="An old man"
                />
                <div className="txt-overlay">
                  Feeding India , a very big NGO and our community patner
                  donated food to approximately 500 people in Chandaneswar,a
                  very poor village in Odisha ,after collecting food from us
                  .The happiness can be felt from the satisfied eyes of the old
                  man.
                </div>
              </div>
            </div>

            <div className="w3-col l3 m6">
              <div className="image-container">
                <img
                  id="img1"
                  src="img2.jpg"
                  // onclick={onClick(this)}
                  className="w3-hover-opacity"
                  alt="A poor hand"
                />
                <div className="txt-overlay">
                  Robin Hood Army organized a food donation camp in Balasore,
                  Odisha, distributing meals to the needy. Volunteers came
                  together to support the community and address hunger,
                  embodying the organization's mission to fight food insecurity
                  through collective efforts and goodwill.
                </div>
              </div>
            </div>

            <div className="w3-col l3 m6">
              <div className="image-container">
                <img
                  id="img1"
                  src="img3.jpg"
                  // onclick={onClick(this)}
                  className="w3-hover-opacity"
                  alt="A girl"
                />
                <div className="txt-overlay">
                  Annakshetra Foundation in Jaipur tirelessly provided
                  nutritious meals to underprivileged children, ensuring their
                  health and well-being. Through our community "Utkarshahar"
                  support and dedicated volunteers, they combat hunger and aim
                  to empower every child with essential nourishment for a
                  brighter future.
                </div>
              </div>
            </div>

            <div className="w3-col l3 m6">
              <div className="image-container">
                <img
                  id="img1"
                  src="img4.jpg"
                  // onclick={onClick(this)}
                  className="w3-hover-opacity"
                  alt="A group"
                />
                <div className="txt-overlay">
                  "No Food Waste" NGO organized a food donation camp in a
                  village in Uttar Pradesh, providing essential meals to local
                  residents. Their initiative aimed to alleviate hunger and
                  foster community support, reflecting their commitment to
                  combating food insecurity through proactive and compassionate
                  efforts.
                </div>
              </div>
            </div>
          </div>

          <div className="w3-row-padding w3-section">
            <div className="w3-col l3 m6">
              <div className="image-container">
                <img
                  id="img1"
                  src="img5.jpg"
                  // onclick={onClick(this)}
                  className="w3-hover-opacity"
                  alt="A bonding"
                />
                <div className="txt-overlay">
                  Campaign at Santragachi, providing food to the little children
                  and the needy ones,because "Sevice to man is service to
                  GOD".These happy faces adds stars to our Utkarshahar.
                </div>
              </div>
            </div>

            <div className="w3-col l3 m6">
              <div className="image-container">
                <img
                  id="img1"
                  src="img6.jpg"
                  // onclick={onClick(this)}
                  className="w3-hover-opacity"
                  alt="A boy"
                />
                <div className="txt-overlay">
                  The Roti Bank Foundation brought smiles to children's faces in
                  Gujarat by providing them with nourishing meals. The smiles
                  radiated satisfaction and happiness, reflecting the NGO's
                  dedication and our Utkarshahar service in alleviating hunger
                  and bringing joy to those in need through our compassionate
                  efforts.
                </div>
              </div>
            </div>

            <div className="w3-col l3 m6">
              <div className="image-container">
                <img
                  id="img1"
                  src="img7.jpg"
                  // onclick={onClick(this)}
                  className="w3-hover-opacity"
                  alt="A socity"
                />
                <div className="txt-overlay">
                  Utkarshahar contributed to alleviating hunger in West Bengal
                  by donating food to underprivileged communities,
                  simultaneously raising awareness about food insecurity
                  issues.Our efforts aimed to provide immediate relief while
                  promoting long-term solutions to combat hunger and improve
                  livelihoods.
                </div>
              </div>
            </div>

            <div className="w3-col l3 m6">
              <div className="image-container">
                <img
                  id="img1"
                  src="img8.jpg"
                  // onclick={onClick(this)}
                  className="w3-hover-opacity"
                  alt="A school"
                />
                <div className="txt-overlay">
                  Utkarshahar helped needy people to get food , fighting hunger
                  and spreading joy and happiness among the people because "We
                  feel Hunger"
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div id="modal01" class="w3-modal w3-black" onclick="this.style.display='none'">
        <span class="w3-button w3-xxlarge w3-black w3-padding-large w3-display-topright" title="Close Modal Image">×</span>
        <div class="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
        <img id="img01" class="w3-image">
        <p id="caption" class="w3-opacity w3-large"></p>
        </div>
        </div> */}
    </>
  );
}
