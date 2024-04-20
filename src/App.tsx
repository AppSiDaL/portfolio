import ProfileInfo from "./components/organisms/profileInfo/ProfileInfo";
import Separator from "./components/atoms/separator/Separator";
import Posts from "./components/pages/posts/Posts";

export default function App() {
  return (
    <div className="main">
      <ProfileInfo />
      <Separator />
      <Posts />
    </div>
  );
}
