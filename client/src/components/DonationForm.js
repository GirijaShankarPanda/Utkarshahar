import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import "./Donate.css";
import { useAuth } from "../context/auth";

const DonationForm = ({ isActive, closeForm }) => {
  const [foodType, setFoodType] = useState("");
  const [items, setItems] = useState([]);
  // const [donateTo, setDonateTo] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [newItemName, setNewItemName] = useState("");
  const [newQuantity, setNewQuantity] = useState("");
  const [auth] = useAuth();

  const handleFoodTypeChange = (e) => setFoodType(e.target.value);

  const handleAddItem = () => {
    if (!foodType || !newItemName || !newQuantity || newQuantity <= 0) {
      toast.error("Please complete all fields before adding an item.");
      return;
    }
    const newItem = {
      name: newItemName,
      quantity: newQuantity,
      type: foodType,
    };
    setItems([...items, newItem]);
    setNewItemName("");
    setNewQuantity("");
  };

  const handleRemoveItem = () => setItems(items.slice(0, -1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(auth?.user?.email);
    const data = { foodType, items, phone, address };
    console.log("Submitting donation with data:", data);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/donation",
        data
      );
      if (response.data.success) {
        toast.success("Donation submitted successfully");
        setFoodType("");
        setItems([]);
        // setDonateTo("");
        setPhone("");
        setAddress("");
        closeForm();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error submitting donation");
      console.error("Error submitting donation", error);
    }
  };

  return (
    <div className={`donation-form ${isActive ? "active" : ""}`}>
      <div className="form-container">
        <span className="close-icon" onClick={closeForm}>
          <i className="material-icons">close</i>
        </span>
        <h2>Make a Donation</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="foodType">Food Type:</label>
            <div className="radio-buttons">
              <div>
                <input
                  type="radio"
                  id="veg"
                  name="foodType"
                  value="veg"
                  checked={foodType === "veg"}
                  onChange={handleFoodTypeChange}
                />
                <label htmlFor="veg">Veg</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="non-veg"
                  name="foodType"
                  value="non-veg"
                  checked={foodType === "non-veg"}
                  onChange={handleFoodTypeChange}
                />
                <label htmlFor="non-veg">Non-Veg</label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="items">Items:</label>
            <div className="item-list">
              {items.map((item, index) => (
                <div key={index} className="item">
                  <span>
                    {item.name} - {item.quantity}
                  </span>
                </div>
              ))}
            </div>
            <div className="add-item">
              <input
                type="text"
                placeholder="Item Name"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
              />
              <input
                type="number"
                placeholder="Quantity"
                value={newQuantity}
                onChange={(e) => setNewQuantity(e.target.value)}
                min="1"
              />
              <button type="button" onClick={handleAddItem}>
                Add Item
              </button>
            </div>
          </div>
          {/* <div className="form-group">
            <label htmlFor="donateTo">Donate To:</label>
            <select
              id="donateTo"
              value={donateTo}
              onChange={(e) => setDonateTo(e.target.value)}
            >
              <option value="">Select an Option</option>
              <option value="organization1">Organization 1</option>
              <option value="organization2">Organization 2</option>
              <option value="other">Other</option>
            </select>
          </div> */}
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              maxLength="10"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
            />
          </div>
          <button type="submit" className="submit-btn">
            Donate
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationForm;
