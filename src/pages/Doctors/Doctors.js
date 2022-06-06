import React, { useState } from "react";
import { AddPopup } from "../../components";

function Doctors() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-center items-center w-full h-full">
      <button onClick={() => setOpen(!open)}>trigger</button>
      {open && (
        <AddPopup
          open={open}
          setOpen={setOpen}
          children={
            <div className="flex">
              <div className="bg-white rounded-lg shadow-xl p-4 flex flex-col">
                <input type="text" placeholder="name" />
                <input type="text" placeholder="email" />
                <input type="text" placeholder="phone" />
                <input type="text" placeholder="address" />
                <input type="text" placeholder="specialization" />
                <input type="text" placeholder="experience" />
                <input type="text" placeholder="qualification" />
                <input type="text" placeholder="fee" />
                <input type="text" placeholder="password" />
                <button className="bg-blue-500 text-white p-2 rounded-lg">
                  Add
                </button>
              </div>
            </div>
          }
        />
      )}
    </div>
  );
}

export default Doctors;
