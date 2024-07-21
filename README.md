# QR Code Generator Web Application

## Overview

The QR Code Generator is a dynamic and user-friendly web application developed using React. It allows users to generate QR codes from URLs and download them as PNG images. This application leverages the QR Code Generator API and the file-saver library for its core functionalities.


## Deployment

The application is deployed and can be accessed at [ameyqrgapp.web.app](https://ameyqrgapp.web.app).

## Video Demonstration

You can watch the video demonstration [here](https://github.com/Amey2701/QR-Code-Generator/blob/main/Screenshots%202024-07-21%20at%2012.09.01.mov).

## Features

- **Real-time QR Code Generation**: Generate QR codes instantly by entering a URL.
- **Download Functionality**: Download the generated QR code as a PNG image.
- **Clear Functionality**: Clear the URL input and the generated QR code.
- **Responsive Design**: The application is designed to be responsive across all mobile and desktop device screens.
- **User-friendly Interface**: Easy-to-use interface with clear instructions and alerts for user actions.

## Technologies Used

- **React**: For building the user interface.
- **QR Code Generator API**: To generate QR codes.
- **file-saver**: To enable downloading of QR codes as PNG images.
- **React Hooks**: To manage state and side effects (useState, useRef).

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Amey2701/QR-Code-Generator.git
   cd qrcode-generator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Application

1. **Start the development server:**
   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. Enter a URL in the input field.
2. Click on "Generate QR Code" to generate the QR code for the entered URL.
3. To download the generated QR code, click on the "Download QR Code" button.
4. To clear the input field and the generated QR code, click on the "Clear" button.

## Project Structure

```
qrcode-generator/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.js
│   ├── index.js
│   ├── QrCodeGenerator.js
│   └── ...
├── package.json
├── README.md
└── ...
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to the creators of the QR Code Generator API and file-saver library for providing essential tools for this application.


