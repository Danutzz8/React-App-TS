import React, { useState } from "react";
import QRCode from "react-qr-code";

function QRCodeGenerator() {
    const [qrCode, setQrCode] = useState("");
    const [input, setInput] = useState("");

  const handleGenerateQrCode = () => {
    setQrCode(input);
    setInput('');
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <div className="text-center mt-4">
      <h1 className="text-2xl font-bold my-3">QR Code Generator</h1>
      <div className="flex justify-center items-center">
        <input
          type="text"
          value={input}
          onChange={handleInputChange} 
          placeholder="Enter text here"
          style={{ width: "300px", padding: "10px", fontSize: "16px" }}
        />
          <button
            disabled={input && input.trim() !== "" ? false : true}
            onClick={handleGenerateQrCode}
          >
            Generate
          </button>
      </div>

      <div className="m-4 flex justify-center items-center">
        <QRCode value={qrCode} size={400} />
      </div>
    </div>
  );
}

export default QRCodeGenerator;