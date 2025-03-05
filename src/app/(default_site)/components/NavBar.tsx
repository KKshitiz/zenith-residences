import { areaTourIcon } from "@/app/constants/assets";
import { ShareAltOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import NavigationMenu from "./NavigationMenu";

const NavBar = () => {
  const router = useRouter();
  return (
    <nav className="flex justify-between items-start mb-3 pointer-events-auto z-overlay">
      <NavigationMenu />
      <Button size="large" icon={<Image src={areaTourIcon} alt="Area tour" />} onClick={
        ()=> {
          router.push('/turntable')
        }
      }>
        Area tour
      </Button>
      <div className="flex gap-2 pointer-events-auto">
        <Button size="large" icon={<ShareAltOutlined />}></Button>
        <Button className="min-h-11 p-3 uppercase font-bold">
          Get brochure
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
