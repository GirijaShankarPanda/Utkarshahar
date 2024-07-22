import DonationModel from "../models/DonationModel.js";

export const donationController = async (req, res) => {
  try {
    const { foodType, items, donateTo, address, phone, check } = req.body;
    const email = req.user.email; // Retrieve the email from the authenticated user

    // Validation
    if (!foodType) {
      return res.status(400).send({ message: "Type is required" });
    }
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).send({ message: "Items are required" });
    }

    if (!phone) {
      return res.status(400).send({ message: "Phone number is required" });
    }
    if (!address) {
      return res.status(400).send({ message: "Address is required" });
    }

    // Save donation
    const donation = new DonationModel({
      foodType,
      items,
      donateTo,
      address,
      phone,
      email,
      check, // Save the email
    });

    await donation.save();

    res.status(201).send({
      success: true,
      message: "Donation recorded successfully",
      donation,
    });
  } catch (error) {
    console.error("Error recording donation:", error);
    res.status(500).send({
      success: false,
      message: "Error in recording donation",
      error: error.message,
    });
  }
};
export const getDonationsController = async (req, res) => {
  try {
    const email = req.user.email; // Get the user's email from the request
    const donations = await DonationModel.find({ email }); // Filter donations by email
    res.status(200).send({ success: true, donations });
  } catch (error) {
    console.error("Error fetching donations:", error);
    res.status(500).send({
      success: false,
      message: "Error fetching donations",
      error: error.message,
    });
  }
};

export const getDonationsControlleradmin = async (req, res) => {
  try {
    const donations = await DonationModel.find();
    res.status(200).send({ success: true, donations });
  } catch (error) {
    console.error("Error fetching donations:", error);
    res.status(500).send({
      success: false,
      message: "Error fetching donations",
      error: error.message,
    });
  }
};
export const updateDonationStatusController = async (req, res) => {
  try {
    const donationId = req.params.id;
    const { check, donateTo } = req.body;

    // Find the donation by ID and update the status
    const donation = await DonationModel.findByIdAndUpdate(
      donationId,
      { check, donateTo },
      { new: true }
    );

    if (!donation) {
      return res
        .status(404)
        .send({ success: false, message: "Donation not found" });
    }

    res.status(200).send({
      success: true,
      message: "Donation status updated successfully",
      donation,
    });
  } catch (error) {
    console.error("Error updating donation status:", error);
    res.status(500).send({
      success: false,
      message: "Error updating donation status",
      error: error.message,
    });
  }
};
