import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import ChatUI from "./ChatUI";
import { UserOutlined, VideoCameraOutlined, UsergroupAddOutlined, HomeOutlined, IdcardFilled } from '@ant-design/icons'

const { Header, Content, Footer } = Layout;

const PageLayout = () => {
  return (
    <Layout className="layout">
      <Header>
      
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>Home</Menu.Item>
          <Menu.Item key="2" icon={<IdcardFilled />}>About</Menu.Item>
          <Menu.Item key="4" icon={<VideoCameraOutlined />}>Video Call</Menu.Item>
          <Menu.Item key="5" icon={<UserOutlined />}>Meet the Team</Menu.Item>
          <Menu.Item key="6" icon={<UsergroupAddOutlined />}>Contact Support Team</Menu.Item>

        </Menu>
      </Header>
      <Content>
        <ChatUI />
      </Content>

      <Footer style={{ textAlign: "center" }}>
        League of Friends ©{' '}{new Date().getFullYear()}{' '} a subsidiary of{" "}
        <a href="bloomhubng.com">BloomHub Limited</a>
      </Footer>
    </Layout>
  );
};

export default PageLayout;
