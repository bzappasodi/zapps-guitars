import React from "react";

function Footer() {
  let newDate = new Date();
  let year = newDate.getFullYear();

  return (
    <div className="gtr-title">
      <p role="heading" aria-level="3">
        &copy; {year} Zapp&apos;s Equipment inventory
      </p>
    </div>
  );
}

export default Footer;
