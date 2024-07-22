// import React from "react";

// export default function Header({ onDonateButtonClick, isLoggedIn }) {
//   return (
//     <>
//       <div>
//         <header className="bgimg-1 w3-display-container" id="home">
//           <div className="head">
//             <div className="w3-display-left w3-text-white" id="div1">
//               <span className="w3-jumbo w3-hide-small">
//                 Start something that matters
//               </span>
//               <br></br>
//               <span className="w3-xxlarge w3-hide-large w3-hide-medium">
//                 Start something that matters
//               </span>
//               <br></br>
//               <span className="w3-large">
//                 Stop wasting valuable food with consciousness, that just isn't
//                 you.
//               </span>
//               <p>
//                 <a
//                   href="#about"
//                   className="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off"
//                 >
//                   Learn more and start today
//                 </a>
//               </p>
//             </div>
//           </div>
//           <div className="">
//             <div className="w3-display-left w3-text-white w3-large" id="div2">
//               <i
//                 id="icon2"
//                 className="fa fa-facebook-official w3-hover-opacity"
//               ></i>
//               <i id="icon2" className="fa fa-instagram w3-hover-opacity"></i>
//               <i id="icon2" className="fa fa-snapchat w3-hover-opacity"></i>
//               <i id="icon2" className="fa fa-pinterest-p w3-hover-opacity"></i>
//               <i id="icon2" className="fa fa-twitter w3-hover-opacity"></i>
//               <i id="icon2" className="fa fa-linkedin w3-hover-opacity"></i>
//             </div>
//             <div className="btn1">
//               <button
//                 id="btn10"
//                 type="button"
//                 className="btn btn-success btn-lg"
//                 onClick={onDonateButtonClick}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="25"
//                   height=""
//                   fill="currentColor"
//                   className="bi bi-heart-pulse-fill"
//                   viewBox="0 0 16 16"
//                 >
//                   <path d="M1.475 9C2.702 10.84 4.779 12.871 8 15c3.221-2.129 5.298-4.16 6.525-6H12a.5.5 0 0 1-.464-.314l-1.457-3.642-1.598 5.593a.5.5 0 0 1-.945.049L5.889 6.568l-1.473 2.21A.5.5 0 0 1 4 9z" />
//                   <path d="M.88 8C-2.427 1.68 4.41-2 7.823 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C11.59-2 18.426 1.68 15.12 8h-2.783l-1.874-4.686a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8z" />
//                 </svg>{" "}
//                 {isLoggedIn ? "Donate Now" : "Donate Now"}
//               </button>
//             </div>
//           </div>
//         </header>
//       </div>
//     </>
//   );
// }
import React from "react";

export default function Header({ onDonateButtonClick, isLoggedIn, isAdmin }) {
  return (
    <>
      <div>
        <header className="bgimg-1 w3-display-container" id="home">
          <div className="head">
            <div className="w3-display-left w3-text-white" id="div1">
              <span className="w3-jumbo w3-hide-small">
                Start something that matters
              </span>
              <br></br>
              <span className="w3-xxlarge w3-hide-large w3-hide-medium">
                Start something that matters
              </span>
              <br></br>
              <span className="w3-large">
                Stop wasting valuable food with consciousness, that just isn't
                you.
              </span>
              <p>
                <a
                  href="#about"
                  className="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off"
                >
                  Learn more and start today
                </a>
              </p>
            </div>
          </div>
          <div className="">
            <div className="w3-display-left w3-text-white w3-large" id="div2">
              <i
                id="icon2"
                className="fa fa-facebook-official w3-hover-opacity"
              ></i>
              <i id="icon2" className="fa fa-instagram w3-hover-opacity"></i>
              <i id="icon2" className="fa fa-snapchat w3-hover-opacity"></i>
              <i id="icon2" className="fa fa-pinterest-p w3-hover-opacity"></i>
              <i id="icon2" className="fa fa-twitter w3-hover-opacity"></i>
              <i id="icon2" className="fa fa-linkedin w3-hover-opacity"></i>
            </div>
            {!isAdmin && (
              <div className="btn1">
                <button
                  id="btn10"
                  type="button"
                  className="btn btn-success btn-lg"
                  onClick={onDonateButtonClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height=""
                    fill="currentColor"
                    className="bi bi-heart-pulse-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.475 9C2.702 10.84 4.779 12.871 8 15c3.221-2.129 5.298-4.16 6.525-6H12a.5.5 0 0 1-.464-.314l-1.457-3.642-1.598 5.593a.5.5 0 0 1-.945.049L5.889 6.568l-1.473 2.21A.5.5 0 0 1 4 9z" />
                    <path d="M.88 8C-2.427 1.68 4.41-2 7.823 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C11.59-2 18.426 1.68 15.12 8h-2.783l-1.874-4.686a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8z" />
                  </svg>{" "}
                  {isLoggedIn ? "Donate Now" : "Donate Now"}
                </button>
              </div>
            )}
          </div>
        </header>
      </div>
    </>
  );
}
