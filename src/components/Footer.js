import React from "react";
import github from "./image/github.png";

export default function Footer(props) {
  return (
    <div>
      <hr style={{ marginTop: "100px" }} />
      <div
        className={`components my-3 mx-3 text-${
          props.mode === "light" ? "dark" : "light"
        } `}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Made with ❤️ by Atithi-Singh.
        <a
          href="https://github.com/singh-atithi/Text-Editor-Using-React"
          target="_main"
        >
          <img
            className="mx-3"
            style={{
              height: "40px",
              width: "40px",
              backgroundColor: "white",
              borderRadius: "50%",
            }}
            src={github}
            alt="GitHub"
          />
        </a>
      </div>
    </div>
  );
}
