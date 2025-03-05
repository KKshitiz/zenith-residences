import {
  EnvironmentOutlined,
  ExpandOutlined,
  LayoutOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { ItemType, MenuItemType } from "antd/es/menu/interface";
import Link from "next/link";
import { useState } from "react";

const floorsDropdownOptions = new Array(20).fill(0).map((_, i) => ({
  label: `Floor ${i + 1}`,
  key: `floor-${i + 1}`,
  onClick: () => console.log(`Floor ${i + 1}`),
}));

const items: ItemType[] = [
  {
    key: "map",
    label: <Link href="/map">DUBAI</Link>,
    icon: <EnvironmentOutlined />,
  },
  {
    key: "project",
    label: <Link href="/">MIDORA</Link>,
    icon: <ExpandOutlined />,
    children: [
      { label: "Arisha Terraces", key: "arisha" },
      { label: "Cubix Residences", key: "cubix" },
    ],
  },
  {
    key: "floor",
    label: "FLOOR",
    icon: <LayoutOutlined />,
    children: floorsDropdownOptions,
  },
];

const NavigationMenu = () => {
  const [selectedMenu, setSelectedMenu] = useState("project");

  const onClick: MenuItemType["onClick"] = (e) => {
    console.log("click", e);
    setSelectedMenu(e.key);
  };

  return (
    <Menu
      className="w-full"
      selectable
      selectedKeys={[selectedMenu]}
      mode="horizontal"
      items={items}
      onClick={onClick}
    />
  );
};

export default NavigationMenu;
