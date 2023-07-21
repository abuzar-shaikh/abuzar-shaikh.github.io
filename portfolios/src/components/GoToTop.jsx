import React, { useEffect, useState } from "react";
import "../components/GoToTop.css";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isvisibal, setisvisibal] = useState(false);
  const gotoBtn = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };
  const listentoScroll = () => {
    let heightToHedden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHedden) {
      setisvisibal(true);
    } else {
      setisvisibal(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listentoScroll);
    return ()=>window.removeEventListener("scroll",listentoScroll)
  }, []);
  return (
    <div className="top_btn_main">
      {isvisibal && (
        <div className="top_btn" onClick={gotoBtn}>
          <FaArrowUp className="top_btn_icon" />
        </div>
      )}
    </div>
  );
};

export default GoToTop;
