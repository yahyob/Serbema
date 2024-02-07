import React from "react";

export default function MenuButton({ buttonData, onClick }) {
  return (
    <a href={buttonData.toUrl} onClick={buttonData.toUrl === "#schedule" ? null : onClick} className="menu-button">
      {buttonData.text}
    </a>
  );
}
