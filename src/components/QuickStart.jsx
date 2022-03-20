/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from "react";
import { useMoralis } from "react-moralis";
import { Layout } from 'antd';
import Text from "antd/lib/typography/Text";
import earth from './images/earth.png'



const { Content, Sider } = Layout;

export default function QuickStart({ isServerInfo }) {
  const { Moralis } = useMoralis();

  return (
    <>
      <Layout>
        <Content theme="light" style={{ paddingTop: "80px", paddingBottom: "10px", paddingLeft: "40px", paddingRight: "10px", backgroundColor: "white" }}>
          <Text style={{ fontSize: "55px", fontFamily: "Arial", fontWeight: "bold", color: "#00ff99" }}>
            Decentralized Social Platform For Students
          </Text>
          <Text style={{ display: "block", fontSize: "31px", fontFamily: "Arial", fontWeight: "bold", color: "black" }}>
            Here students can connect, collaborate, build, develop, learn, and share with students across the globe, with the power of decentralized web.
          </Text>
          <Text style={{ display: "block", fontSize: "31px", fontFamily: "Arial", fontWeight: "bold", color: "#00ff99" }}>
            Frosh For Students. Frosh For Future.
          </Text>
        </Content>
        <Sider width="600px" theme="light" style={{ padding: "30px", backgroundColor: "white" }}>
          <img src={earth} />
        </Sider>
      </Layout>
    </>
  );
}

