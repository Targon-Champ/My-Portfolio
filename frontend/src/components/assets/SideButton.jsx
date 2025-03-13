import React from "react";

function SideButton({ content }) {
  return (
    <div className="bg-amber-950 w-full p-10 items-center justify-center flex flex-row">
      {content}
    </div>
  );
}

export default SideButton;
