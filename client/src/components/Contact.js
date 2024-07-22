import React from "react";

export default function Contact() {
  return (
    <>
      <div class="w3-container w3-light-grey" id="contact">
        <h3 class="w3-center">
          <b>CONTACT</b>
        </h3>
        <p class="w3-center w3-large">Lets get in touch. Send us a message. </p>
        <div id="form">
          <p>
            <i class="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i>{" "}
            Bhubaneswar, Odisha
          </p>
          <p>
            <i class="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i> Phone:
            +91 9938814350
          </p>
          <p>
            <i class="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"> </i>{" "}
            Email: utkarshahar@gmail.com
          </p>
          <br></br>
          <form action="https://api.web3forms.com/submit" method="POST">
            <input
              type="hidden"
              name="access_key"
              value="6d2b5782-06df-4072-91d3-661d946fefdd"
            ></input>
            <p>
              <input
                class="w3-input w3-border"
                type="text"
                placeholder="Name"
                required
                name="Name"
              />
            </p>
            <p>
              <input
                class="w3-input w3-border"
                type="text"
                placeholder="Email"
                required
                name="Email"
              />
            </p>
            <p>
              <input
                class="w3-input w3-border"
                type="text"
                placeholder="Subject"
                required
                name="Subject"
              />
            </p>
            <p>
              <input
                class="w3-input w3-border"
                type="text"
                placeholder="Message"
                required
                name="Message"
              />
            </p>
            <p>
              <button class="w3-button w3-black" type="submit">
                <i class="fa fa-paper-plane"></i> SEND MESSAGE
              </button>
            </p>
          </form>
          <img id="img3" alt="last image" src="img9a.png" class="w3-image " />
        </div>
      </div>
    </>
  );
}
