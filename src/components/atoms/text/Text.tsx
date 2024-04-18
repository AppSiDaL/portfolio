import { ElementType, HTMLAttributes } from "react";

interface TextProps {
  children: React.ReactNode;
  w?: "bold" | "normal";
  h?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

export default function Text({ children, w, h, className }: TextProps) {
  const weight = w === "bold" ? "bold" : "normal";
  let Component: ElementType;
  let fontSize: string;

  switch (h) {
    case "h1":
      Component = "h1";
      fontSize = "2em";
      break;
    case "h2":
      Component = "h2";
      fontSize = "1.5em";
      break;
    case "h3":
      Component = "h3";
      fontSize = "1.17em";
      break;
    case "h4":
      Component = "h4";
      fontSize = "1em";
      break;
    case "h5":
      Component = "h5";
      fontSize = "0.83em";
      break;
    case "h6":
      Component = "h6";
      fontSize = "0.67em";
      break;
    default:
      Component = "p";
      fontSize = "1em";
  }

  const props: HTMLAttributes<HTMLElement> = {
    style: { fontWeight: weight, fontSize: fontSize },
    className: `text ${className}`,
  };

  return (
    <Component {...props}>
      {children}
    </Component>
  );
}