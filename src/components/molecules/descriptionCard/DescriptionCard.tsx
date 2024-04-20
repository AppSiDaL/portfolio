import { useScramble } from "use-scramble";

import "./DescriptionCard.css";
export default function DescriptionCard() {
  const { ref, replay } = useScramble({
    text: "Hello There, this is Gilberto, i'm a WEB & IA developer. Welcome to my portfolio!!",
    speed: 0.4,
  });

  return (
    <div className="descriptionCard">
      <a ref={ref} onMouseEnter={replay} />
    </div>
  );
}
