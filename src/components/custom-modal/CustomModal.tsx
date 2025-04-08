import React from "react";
import "./index.scss";

interface CustomModalProps {
  id?: string;
  header?: React.ReactNode; // Optional header
  footer?: React.ReactNode; // Optional footer
  body?: React.ReactNode; // Optional body
  button?: React.ReactNode; // Optional body
  onClose: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({
  id = "modal", // Default ID
  header = <h2>Default Header</h2>, // Default header
  footer = <p>Footer</p>, // Default footer
  body = <p>This is the default body content.</p>, // Default body
  button, 
  onClose,
}) => {
  return (
    <div className="modal2" id={id} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="header">
          <button className="close-modal-icon" onClick={onClose}>
            &times;
          </button>
          {header}
        </div>
        <div className="body">{body}</div>
        <div className="modal-button">{button ? button : null}</div>
        <div className="footer">{footer}</div>
      </div>
    </div>
  );
};

export default CustomModal;