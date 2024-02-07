import { message, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
const { confirm } = Modal;

export const logout = (navigate, setToggle) => {
  confirm({
    title: 'Are you sure you want to logout?',
    icon: <ExclamationCircleOutlined />,
    onOk() {
      localStorage.removeItem("accessToken");
      message.success("You are logout!!!", [2]);
      navigate("/");
      setToggle && setToggle(false)
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}