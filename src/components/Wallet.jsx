/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from "react";
import { useMoralis } from "react-moralis";
import Text from "antd/lib/typography/Text";
import { Layout } from 'antd';
import { Card, Input, Space, Button } from 'antd';

function SpaceVertical() {
  return (
    <Space direction="vertical">
      <Card title="Blog" style={{ width: 1200 }}>
        <p style={{fontWeight: "bold", fontSize: "25px"}}>Bitcoin</p>
        <p>By mining you can earn cryptocurrency without having to put down money for it. Bitcoin miners receive bitcoin as a reward for completing "blocks" of verified transactions, which are added to the blockchain. </p>
        <Button style={{ backgroundColor: "#00ff99", marginLeft: "1050px", marginTop: "10px" }} type="primary">More</Button>
      </Card>
      <Card title="Blog" style={{ width: 1200 }}>
        <p style={{fontWeight: "bold", fontSize: "25px"}}>Bitcoin</p>
        <p>By mining you can earn cryptocurrency without having to put down money for it. Bitcoin miners receive bitcoin as a reward for completing "blocks" of verified transactions, which are added to the blockchain. </p>
        <Button style={{ backgroundColor: "#00ff99", marginLeft: "1050px", marginTop: "10px" }} type="primary">More</Button>
      </Card>
      <Card title="Blog" style={{ width: 1200 }}>
        <p style={{fontWeight: "bold", fontSize: "25px"}}>Bitcoin</p>
        <p>By mining you can earn cryptocurrency without having to put down money for it. Bitcoin miners receive bitcoin as a reward for completing "blocks" of verified transactions, which are added to the blockchain. </p>
        <Button style={{ backgroundColor: "#00ff99", marginLeft: "1050px", marginTop: "10px" }} type="primary">More</Button>
      </Card>
      <Card title="Blog" style={{ width: 1200 }}>
        <p style={{fontWeight: "bold", fontSize: "25px"}}>Bitcoin</p>
        <p>By mining you can earn cryptocurrency without having to put down money for it. Bitcoin miners receive bitcoin as a reward for completing "blocks" of verified transactions, which are added to the blockchain. </p>
        <Button style={{ backgroundColor: "#00ff99", marginLeft: "1050px", marginTop: "10px" }} type="primary">More</Button>
      </Card>
      <Card title="Blog" style={{ width: 1200 }}>
        <p style={{fontWeight: "bold", fontSize: "25px"}}>Bitcoin</p>
        <p>By mining you can earn cryptocurrency without having to put down money for it. Bitcoin miners receive bitcoin as a reward for completing "blocks" of verified transactions, which are added to the blockchain. </p>
        <Button style={{ backgroundColor: "#00ff99", marginLeft: "1050px", marginTop: "10px" }} type="primary">More</Button>
      </Card>
      <Card title="Blog" style={{ width: 1200 }}>
        <p style={{fontWeight: "bold", fontSize: "25px"}}>Bitcoin</p>
        <p>By mining you can earn cryptocurrency without having to put down money for it. Bitcoin miners receive bitcoin as a reward for completing "blocks" of verified transactions, which are added to the blockchain. </p>
        <Button style={{ backgroundColor: "#00ff99", marginLeft: "1050px", marginTop: "10px" }} type="primary">More</Button>
      </Card>
      <Card title="Blog" style={{ width: 1200 }}>
        <p style={{fontWeight: "bold", fontSize: "25px"}}>Bitcoin</p>
        <p>By mining you can earn cryptocurrency without having to put down money for it. Bitcoin miners receive bitcoin as a reward for completing "blocks" of verified transactions, which are added to the blockchain. </p>
        <Button style={{ backgroundColor: "#00ff99", marginLeft: "1050px", marginTop: "10px" }} type="primary">More</Button>
      </Card>
      <Card title="Blog" style={{ width: 1200 }}>
        <p style={{fontWeight: "bold", fontSize: "25px"}}>Bitcoin</p>
        <p>By mining you can earn cryptocurrency without having to put down money for it. Bitcoin miners receive bitcoin as a reward for completing "blocks" of verified transactions, which are added to the blockchain. </p>
        <Button style={{ backgroundColor: "#00ff99", marginLeft: "1050px", marginTop: "10px" }} type="primary">More</Button>
      </Card>
      <Card title="Blog" style={{ width: 1200 }}>
        <p style={{fontWeight: "bold", fontSize: "25px"}}>Bitcoin</p>
        <p>By mining you can earn cryptocurrency without having to put down money for it. Bitcoin miners receive bitcoin as a reward for completing "blocks" of verified transactions, which are added to the blockchain. </p>
        <Button style={{ backgroundColor: "#00ff99", marginLeft: "1050px", marginTop: "10px" }} type="primary">More</Button>
      </Card>
      <Card title="Blog" style={{ width: 1200 }}>
        <p style={{fontWeight: "bold", fontSize: "25px"}}>Bitcoin</p>
        <p>By mining you can earn cryptocurrency without having to put down money for it. Bitcoin miners receive bitcoin as a reward for completing "blocks" of verified transactions, which are added to the blockchain. </p>
        <Button style={{ backgroundColor: "#00ff99", marginLeft: "1050px", marginTop: "10px" }} type="primary">More</Button>
      </Card>
      
    </Space>
  );
}

const { Content } = Layout;

const { Search } = Input;
const onSearch = value => console.log(value);


export default function QuickStart({ isServerInfo }) {
  const { Moralis } = useMoralis();

  return (
    <>
      <Layout>
        <Content theme="dark" style={{ paddingTop: "0px", paddingBottom: "10px", paddingLeft: "40px", paddingRight: "40px", backgroundColor: "" }}>
          <Search style={{ width: "1200px", marginBottom: "40px" }}
            placeholder="Search Your Intrest"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
          <SpaceVertical></SpaceVertical>
          <Button style={{ backgroundColor: "#00ff99", marginLeft: "550px", marginTop: "50px" }} type="primary">Load More</Button>
        </Content> 
      </Layout>
    </>
  );
}

