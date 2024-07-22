import React from "react";

export default function Footer() {
  return (
    <>
      <footer class="w3-center w3-black w3-padding-64">
        <a href="#home" class="w3-button w3-light-grey">
          <i class="fa fa-arrow-up w3-margin-right"></i>To the top
        </a>
        <div class="w3-xlarge w3-section">
          <i id="icon2" class="fa fa-facebook-official w3-hover-opacity"></i>
          <i id="icon2" class="fa fa-instagram w3-hover-opacity"></i>
          <i id="icon2" class="fa fa-snapchat w3-hover-opacity"></i>
          <i id="icon2" class="fa fa-pinterest-p w3-hover-opacity"></i>
          <i id="icon2" class="fa fa-twitter w3-hover-opacity"></i>
          <i id="icon2" class="fa fa-linkedin w3-hover-opacity"></i>
        </div>
        <p>
          copyright
          <span>
            {" "}
            <i class="fa fa-copyright"></i>{" "}
          </span>
          2024 Utkarshahar. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
