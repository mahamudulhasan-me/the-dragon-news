import React from "react";
import qZone1 from "../../assets/qZone1.png";
import qZone2 from "../../assets/qZone2.png";
import qZone3 from "../../assets/qZone3.png";

const QZone = () => {
  return (
    <div className="q-zone my-4 py-4 px-2">
      <h5>Q-Zone</h5>
      <div className="text-center">
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default QZone;
