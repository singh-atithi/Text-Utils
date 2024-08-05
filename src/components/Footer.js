import React from "react";
  import github from "./image/github.png";

export default function Footer() {
  return (
    <div>
      <hr style={{ marginTop: "100px" }} />
      <div
        className="components my-3 mx-3"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Made with ❤️ by Atithi-Singh.
        <a href="https://github.com/singh-atithi/Text-Editor-Using-React" target="_main"><img
          className="mx-3"
          style={{ height: "25px", width: "25px" }}
          src={github}
          alt="GitHub"
        /></a>
      </div>
    </div>
  );
}
