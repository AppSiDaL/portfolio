import React, { useEffect, useState } from 'react';

export default function ScrollIndicator() {
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const profileInfoTop = document.getElementById("profileInfo")?.offsetTop || 0;
      const postsTop = document.getElementById("posts")?.offsetTop || 0;

      if (window.pageYOffset < profileInfoTop) {
        setCurrentSection("IGHeader");
      } else if (window.pageYOffset < postsTop) {
        setCurrentSection("ProfileInfo");
      } else {
        setCurrentSection("Posts");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>{currentSection}</div>
  );
}