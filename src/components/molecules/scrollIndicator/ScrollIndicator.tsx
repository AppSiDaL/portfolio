import "./ScrollIndicator.css";
interface BreadcrumbProps {
  currentSection: string;
}

export default function Breadcrumb({ currentSection }: BreadcrumbProps) {
  const sections = ["experience", "projects", "education"];
  const currentIndex = sections.indexOf(currentSection);
  console.log(currentSection);
  return (
    <div className="scrollIndicator" style={{ fontSize: "18px" }}>
      {sections.map((section, index) => (
        <span key={section}>
          <a
            href={`#${section.toLowerCase()}`}
            className={index === currentIndex ? "selectedSection" : ""}
            style={{
              color: index === currentIndex ? "red" : "white",
              textDecoration: "none",
              textTransform: "capitalize",
            }}
          >
            {section}
          </a>
          {index < sections.length - 1 && " - "}
        </span>
      ))}
    </div>
  );
}
