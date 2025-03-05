import { qubeLogo } from "@/app/constants/assets";
import { useModalStore } from "@/app/utils/modalStore";
import { CloseOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import Image from "next/image";

const BuilderInfoDialog = () => {
  const { builderInfoDialogOpen, setBuilderInfoDialogOpen } = useModalStore();

  return builderInfoDialogOpen ? (
    <Card
      size="small"
      className="pointer-events-auto relative w-80"
      cover={<Image src={qubeLogo} alt="Qube logo" />}
    >
      <Button
        className="absolute top-0 right-0"
        icon={<CloseOutlined />}
        type="text"
        size="large"
        onClick={() => setBuilderInfoDialogOpen(false)}
      />
      {/* <Image src={qubeLogo} alt="Qube logo" /> */}
      <p>
        QUBE stands on a 30-year legacy of excellence in development, delivering
        high-quality residential and commercial spaces focusing on quick project
        completion, reliability, durability, and lasting value. QUBE ensures
        each project embodies the pinnacle of innovation and expertise.
      </p>
    </Card>
  ) : (
    <Button
      size="large"
      className="pointer-events-auto"
      icon={<InfoCircleOutlined />}
      onClick={() => setBuilderInfoDialogOpen(true)}
    />
  );
};

export default BuilderInfoDialog;
