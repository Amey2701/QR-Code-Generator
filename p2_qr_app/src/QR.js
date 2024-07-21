import React, { useState, useRef } from 'react';
import { saveAs } from 'file-saver';

export default function QrCodeGenerator() {
  const rUrl = useRef();
  const [url, setUrl] = useState('');
  const [qrcode, setQrcode] = useState('');

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const generateQrCode = (event) => {
    event.preventDefault();
    if (url === '') {
      alert('You did not enter a URL');
      rUrl.current.focus();
      setQrcode('');
      return;
    }
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(url)}`;
    setQrcode(qrUrl);
  };

  const downloadQrCode = () => {
    if (qrcode === '') {
      alert('No QR code found');
      return;
    }
    saveAs(qrcode, 'qrcode.png');
  };

  const clearQrCode = () => {
    setUrl('');
    setQrcode('');
    rUrl.current.focus();
  };

  return (
    <center>
      <h1>QR Code Generator</h1>
      <form onSubmit={generateQrCode}>
        <input
          type="text"
          placeholder="Enter URL"
          onChange={handleUrlChange}
          value={url}
          ref={rUrl}
        />
        <br /><br />
        <input type="submit" value="Generate QR Code" />
      </form>
      <br />
      {qrcode && (
        <div>
          <img src={qrcode} alt="QR Code" />
          <br />
          <div className="button-container">
            <button type="button" onClick={downloadQrCode} className="download-button">Download QR Code</button>
            <button type="button" onClick={clearQrCode} className="clear-button">Clear</button>
          </div>
        </div>
      )}
    </center>
  );
}
