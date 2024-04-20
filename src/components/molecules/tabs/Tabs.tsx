import { useState } from "react";
import Posts from "../../pages/posts/Posts";
import "./Tabs.css";
import Button from "../../atoms/button/Button";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("Posts");

  return (
    <div>
      <div className="tabs">
        <div className="tab">
          <Button
            className="tablinks"
            onClick={() => setActiveTab("Posts")}
            style={{
              borderBottom: activeTab === "Posts" ? "3px solid #AD1A1C" : "",
              color: activeTab === "Posts" ? "#AD1A1C" : "white",
            }}
          >
            INFO
          </Button>
          <Button
            className="tablinks"
            onClick={() => setActiveTab("IGTV")}
            style={{
              borderBottom: activeTab === "IGTV" ? "3px solid #AD1A1C" : "",
              color: activeTab === "IGTV" ? "#AD1A1C" : "white",
            }}
          >
            SHOWCASE
          </Button>
        </div>
      </div>
      {activeTab === "Posts" && <Posts />}
      {activeTab === "IGTV" && <div>IGTV Content</div>}
    </div>
  );
}
