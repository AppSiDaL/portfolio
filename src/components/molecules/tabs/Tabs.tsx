import { useState } from "react";
import Posts from "../../pages/posts/Posts";
import "./Tabs.css";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("Posts");

  return (
    <div className="tabs">
      <div className="tab">
        <button
          className="tablinks"
          onClick={() => setActiveTab("Posts")}
          style={{
            borderBottom: activeTab === "Posts" ? "3px solid #AD1A1C" : "",
            color: activeTab === "Posts" ? "#AD1A1C" : "white",
          }}
        >
          Posts
        </button>
        <button
          className="tablinks"
          onClick={() => setActiveTab("IGTV")}
          style={{
            borderBottom: activeTab === "IGTV" ? "3px solid #AD1A1C" : "",
            color: activeTab === "IGTV" ? "#AD1A1C" : "white",
          }}
        >
          IGTV
        </button>
        <button
          className="tablinks"
          onClick={() => setActiveTab("Tagged")}
          style={{
            borderBottom: activeTab === "Tagged" ? "3px solid #AD1A1C" : "",
            color: activeTab === "Tagged" ? "#AD1A1C" : "white",
          }}
        >
          Tagged
        </button>
      </div>
      {activeTab === "Posts" && <Posts />}
      {activeTab === "IGTV" && <div>IGTV Content</div>}
      {activeTab === "Tagged" && <div>Tagged Content</div>}
    </div>
  );
}
