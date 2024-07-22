# Utkarshahar

Utkarshahar is a full-stack web application developed using the MERN stack (`MongoDB`, `Express.js`, `React.js`, `Node.js`). This project aims to facilitate the donation of surplus food from individuals to food donation organizations. So that the organizations further can provide these surplus food to the needy.

## Table of Contents

- [Overview](#overview)
  
- [Features](#features)
  
- [Technologies Used](#technologies-used)
  
- [Installation](#installation)
  
- [Usage](#usage)
  
- [Contributing](#contributing)
  
- [License](#license)

## Overview

Utkarshahar provides a platform for users to donate surplus food that would otherwise go to waste. Food donation organizations, acting as admins on the platform, can accept and manage donated food items. The application simplifies the food donation process and ensures that excess food reaches those in need efficiently.

## Features

- **User Registration and Authentication**: Allows users to register and authenticate themselves to start donating food.
- **Donor Dashboard**: Enables users to list and manage the food items they wish to donate.
- **Admin Dashboard**: Food donation organizations can accept donations, manage pickup schedules, and track donation history.
- **Real-time Notifications**: Users and admins receive notifications for donation requests, acceptance, and pickup schedules.
- **Search and Filter**: Users can efficiently search for specific types of food donations based on categories and locations.
- **Responsive Design**: Ensures a seamless experience across devices and screen sizes.

## Technologies Used

- **Frontend**: `React.js`, `HTML`/`CSS`, `Bootstrap`
- **Backend**: `Node.js`, `Express.js`, `MongoDB` (Mongoose)
- **Authentication**: `JSON Web Tokens` (JWT)
- **Deployment**: `Cyclic`

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**: 
   ```bash
   git clone <repository-url>
2. **Navigate to the project directory**:
   ```bash
   cd utkarshahar
3. **Install dependencies for both backend and frontend**:
   ```bash
   cd server
   npm install
   cd ../client
   npm install
4. **Set up environment variables**:
- Create a `.env` file in the server directory and add necessary variables like `PORT`, `MONGO_URI`, `JWT_SECRET`, etc.
5. **Run the backend server**:
   ```bash
   cd server
   npm start
6. **Run the frontend application**:
   ```bash
   cd ../client
   npm start
7. **Access the application in your browser at**:
   http://localhost:3000

## Usage

- **User Registration**: Register and then log in as a user to start donating food items.
- **Donating Food**: Add details of the surplus food items you wish to donate.
- **Admin Access**: Register and then log in as an admin to view, accept donation(as per your convenience) requests and update donation statuses.

## Contributing

Contributions are welcome! To contribute, follow these steps:

1. **Fork the repository**.
2. **Create a new branch**:
   ```bash
   git checkout -b feature
3. **Make your changes**.
4. **Commit your changes**:
   ```bash
   git commit -am 'Add feature'
5. **Push to the branch**:
   ```bash
   git push origin feature
6. **Create a new Pull Request**.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.



