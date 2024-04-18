import Text from "../../atoms/text/Text";
import "./ProfileInfo.css";

export default function ProfileInfo() {
  return (
    <div className="profileInfo">
      <img
        alt="front page image"
        className="front"
        src="https://st2.depositphotos.com/4413287/44394/i/450/depositphotos_443941376-stock-illustration-natural-linen-material-textile-canvas.jpg"
      />
      <div className="info">
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="Avatar"
          className="avatar"
        />
        <div className="data">
          <Text h="h2" w="bold" className="name">
            Gilberto Davalos Nava
          </Text>
          <Text h="h4" w="normal" className="username">
            @davalosng
          </Text>
          <Text h="h4" w="normal" className="followers">
            301 Followers
          </Text>
        </div>
      </div>
    </div>
  );
}
