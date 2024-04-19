import Text from "../../atoms/text/Text";
import "./ProfileInfo.css";
import profileImage from "../../../assets/profile.jpg";
import CodeHeader from "../../molecules/codeHeader/CodeHeader";

export default function ProfileInfo() {
  return (
    <div className="profileInfo">
      <CodeHeader/>
      <div className="info">
        <img src={profileImage} alt="Avatar" className="avatar" />
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
