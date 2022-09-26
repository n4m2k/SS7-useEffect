import React from "react";
import { useState, useEffect } from "react";
const ScrollOnTop = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollTop(document.documentElement.scrollTop);
      if (scrollTop > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      console.log(scrollTop);
    });
  }, [scrollTop]);
  const handleButton = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div style={{ height: 2000 }}>
      {visible ? (
        <button
          onClick={handleButton}
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            height: "50px",
            minWidth: "50px",
            fontSize: "15px",
          }}
        >
          Back to top
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default ScrollOnTop;
