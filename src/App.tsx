import IGHeader from "./components/organisms/igHeader/IGHeader";
import ProfileInfo from "./components/organisms/profileInfo/ProfileInfo";
import Tabs from "./components/molecules/tabs/Tabs";
import Separator from "./components/atoms/separator/Separator";

export default function App() {
  return (
    <div className="main">
      <IGHeader />
      <ProfileInfo />
      <Separator />
      <Tabs />
    </div>
  );
}
