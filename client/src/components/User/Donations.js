// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-hot-toast"; // Assuming you use react-hot-toast for notifications
// import Usermenu from "../Usermenu";
// import Footer from "../Footer";
// import "./Donations.css"; // Make sure to import your custom CSS file

// const Donations = () => {
//   const [donations, setDonations] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchDonations = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:8080/api/v1/auth/donations"
//         );
//         if (response.data.success) {
//           setDonations(response.data.donations);
//           toast.success("Donations fetched successfully");
//         } else {
//           toast.error("Failed to fetch donations");
//         }
//       } catch (error) {
//         toast.error("Error fetching donations");
//         console.error("Error fetching donations", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDonations();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="dashboard-container">
//       <div className="w3-top">
//         <div className="w3-bar w3-white w3-card" id="myNavbar">
//           <a href="#home" className="w3-bar-item w3-button w3-wide">
//             <b>UTKARSHAHAR</b>
//           </a>
//           <div className="w3-right w3-hide-small">
//             <a href="/" className="w3-bar-item w3-button">
//               Go Back
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="container-fluid m-3 p-3">
//         <div className="row">
//           <div className="col-md-3">
//             <Usermenu />
//           </div>

//           <div className="col-md-9">
//             <h2>Donations</h2>
//             {donations.length === 0 ? (
//               <p>No donations available</p>
//             ) : (
//               <div className="donations-list">
//                 {donations.map((donation) => (
//                   <div className="card donation-card mb-3" key={donation._id}>
//                     <div className="card-body">
//                       <div className="status">{donation.check}</div>
//                       <h3 className="card-title">
//                         Donation to: {donation.donateTo}
//                       </h3>
//                       <p className="card-text">
//                         <strong>Address:</strong> {donation.address}
//                       </p>
//                       <ul className="list-group list-group-flush">
//                         {donation.items.map((item, index) => (
//                           <li className="list-group-item" key={index}>
//                             {item.name} - {item.quantity} ({item.type})
//                           </li>
//                         ))}
//                       </ul>
//                       <p className="card-text">
//                         <small className="text-muted">
//                           Created At:{" "}
//                           {new Date(donation.createdAt).toLocaleString()}
//                         </small>
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className="sec3">
//         <div className="w3-container w3-light-grey">
//           <div className="w3-row-padding">
//             <div className="w3-col m6">
//               <h3>"We feel the hunger"</h3>
//               <p>
//                 Our website connects people with surplus food to NGOs dedicated
//                 to feeding the hungry. Through efficient coordination and our
//                 wide-reaching network, we facilitate the donation and
//                 distribution of safe, high-quality food to those in need. Our
//                 efforts ensure that excess food is not wasted but instead
//                 reaches those who need it most, combating hunger and fostering a
//                 community of compassion and sustainability.
//               </p>
//             </div>
//             <div className="w3-col m6">
//               <img
//                 id="img30"
//                 className="w3-image w3-round-large"
//                 src={`${process.env.PUBLIC_URL}/img30.jpg`}
//                 alt="Buildings"
//                 width="700"
//                 height="394"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Donations;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast"; // Assuming you use react-hot-toast for notifications
import Usermenu from "../Usermenu";
import Footer from "../Footer";
import "./Donations.css"; // Make sure to import your custom CSS file

const Donations = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/auth/donations"
        );
        console.log("API Response:", response.data);
        if (response.data.success) {
          setDonations(response.data.donations);
          toast.success("Donations fetched successfully");
        } else {
          toast.error("Failed to fetch donations");
        }
      } catch (error) {
        toast.error("Error fetching donations");
        console.error("Error fetching donations", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDonations();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <div className="w3-top">
        <div className="w3-bar w3-white w3-card" id="myNavbar">
          <a href="#home" className="w3-bar-item w3-button w3-wide">
            <b>UTKARSHAHAR</b>
          </a>
          <div className="w3-right w3-hide-small">
            <a href="/" className="w3-bar-item w3-button">
              Go Back
            </a>
          </div>
        </div>
      </div>

      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <Usermenu />
          </div>

          <div className="col-md-9">
            <h2>Donations</h2>
            {donations.length === 0 ? (
              <p>No donations available</p>
            ) : (
              <div className="donations-list">
                {donations.map((donation) => (
                  <div className="card donation-card mb-3" key={donation._id}>
                    <div className="card-body">
                      <div
                        className={`status ${
                          donation.check === "Accepted" ? "accepted" : "pending"
                        }`}
                      >
                        {donation.check}
                      </div>
                      <h3 className="card-title">
                        Donation to: {donation.donateTo}
                      </h3>
                      <h5>
                        <strong>Donated Items</strong>
                      </h5>
                      <ul className="list-group list-group-flush">
                        {donation.items.map((item, index) => (
                          <li className="list-group-item" key={index}>
                            {item.name} - {item.quantity} ({item.type})
                          </li>
                        ))}
                      </ul>
                      <p className="card-text">
                        <strong>Phone:</strong> {donation.phone}
                      </p>
                      <p className="card-text">
                        <strong>Address:</strong> {donation.address}
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Created At:{" "}
                          {new Date(donation.createdAt).toLocaleString()}
                        </small>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

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
            </div>
            <div className="w3-col m6">
              <img
                id="img30"
                className="w3-image w3-round-large"
                src={`${process.env.PUBLIC_URL}/img30.jpg`}
                alt="Buildings"
                width="700"
                height="394"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Donations;
