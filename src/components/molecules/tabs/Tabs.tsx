import { useState } from "react";
import Posts from "../../pages/posts/Posts";
import "./Tabs.css";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("Posts");

  return (
    <div className="tabs">
      <div className="tab">
        <button className="tablinks" onClick={() => setActiveTab("Posts")}>
          Posts
        </button>
        <button className="tablinks" onClick={() => setActiveTab("IGTV")}>
          IGTV
        </button>
        <button className="tablinks" onClick={() => setActiveTab("Tagged")}>
          Tagged
        </button>
      </div>
      {activeTab === "Posts" && <Posts />}
      {activeTab === "IGTV" && <div>IGTV Content</div>}
      {activeTab === "Tagged" && <div>Tagged Content</div>}
    </div>
  );
}
