import React from "react";
import "../styles/Footer.css";
import Divider from "./Divider";

function Footer() {
  return (
    <div
      className="My-Footer row-between"
      style={{ width: "100%", paddingTop: 20 }}
    >
      <div></div>
      <div style={{ width: "80%" }}>
        <Divider />
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Figma Libraries</th>  
              <th>Figma Plugins</th>
              <th>Slack Channels</th>
              <th>Engineering</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="">Careers</a>
              </td>
              <td>
                <a href="">Github</a>
              </td>
              <td>
                <a href="">Code Sandbox</a>
              </td>
            </tr>
            </tbody>
        <Divider />
        </table>
       </div>
      <div></div>
    </div>
  );
}

export default Footer;