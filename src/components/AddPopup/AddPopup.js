import React from "react";

function AddPopup({ open, setOpen, children }) {
  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ease-in-out ${
        open ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 bg-gray-900 opacity-75"
        onClick={() => setOpen(false)}
      >
        test
      </div>
      <div
        className="absolute inset-0 flex justify-center items-center w-full h-full"
        onClick={() => setOpen(false)}
      >
        {children}
      </div>
    </div>
  );
}

export default AddPopup;
