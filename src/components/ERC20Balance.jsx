/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from "react";
import { useMoralis } from "react-moralis";
import { Layout, Input } from 'antd';
import Text from "antd/lib/typography/Text";
import { Card, Avatar, Button } from 'antd';
import { EllipsisOutlined, LikeOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { Row, Col } from 'antd';


const { Search } = Input;
const onSearch = value => console.log(value);

const { Content } = Layout;
const { Meta } = Card;

export default function QuickStart({ isServerInfo }) {
  const { Moralis } = useMoralis();

  return (
    <>
      <Layout>
        <Content theme="dark" style={{ paddingTop: "0px", paddingBottom: "10px", paddingLeft: "40px", paddingRight: "40px", backgroundColor: "" }}>
          <Search style={{ width: "1080px", marginBottom: "50px", marginLeft: "60px", marginRight: "60px" }}
            placeholder="Search Your Intrest"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
          <Row gutter={16} style={{ marginLeft: "60px"}}>
            <Col className="gutter-row" span={8}>
            <Card
              style={{ width: 300, borderRadius: "30px", borderColor: "#00ff99" }}
              cover={
                <img
                  style={{ marginLeft: "90px", marginTop: "40px", width: "120px", height: "120px", borderRadius: "600px"}}
                  alt="example"
                  src="https://i0.wp.com/sguru.org/wp-content/uploads/2017/06/cool-csgo-profile-pictures-110a2953-0130-47a8-8968-913390bee551.jpg?resize=768%2C768&ssl=1"
                />
              }
            >
              <Meta
                style={{ marginLeft: "60px", marginRight: "50px"  }}
                title="Jonathon Jardania"
                description="@jjonathan"
              />
              <Meta style={{ marginTop: "15px", marginLeft: "35px", marginRight: "35px"}}
                description="School : MIT"
              />
              <Meta style={{ marginTop: "15px", marginLeft: "35px", marginRight: "35px"}}
                description="Level : Undergraduate"
              />
              <Meta style={{ marginTop: "15px", marginLeft: "35px", marginRight: "35px"}}
                description="Course : Marine Engineering"
              />
              <Button style={{ backgroundColor: "#00ff99",marginBottom: "20px", marginTop: '20px', marginLeft: "80px", marginRight: "50px" }} type="primary">FOLLOW</Button>
            </Card>
            </Col>
            <Col className="gutter-row" span={8}>
            <Card
              style={{ width: 300, borderRadius: "30px", borderColor: "#00ff99" }}
              cover={
                <img
                  style={{ marginLeft: "90px", marginTop: "40px", width: "120px", height: "120px", borderRadius: "600px"}}
                  alt="example"
                  src="https://i0.wp.com/sguru.org/wp-content/uploads/2017/06/cool-csgo-profile-pictures-110a2953-0130-47a8-8968-913390bee551.jpg?resize=768%2C768&ssl=1"
                />
              }
            >
              <Meta
                style={{ marginLeft: "60px", marginRight: "50px"  }}
                title="Jonathon Jardania"
                description="@jjonathan"
              />
              <Meta style={{ marginTop: "15px", marginLeft: "35px", marginRight: "35px"}}
                description="School : MIT"
              />
              <Meta style={{ marginTop: "15px", marginLeft: "35px", marginRight: "35px"}}
                description="Level : Undergraduate"
              />
              <Meta style={{ marginTop: "15px", marginLeft: "35px", marginRight: "35px"}}
                description="Course : Marine Engineering"
              />
              <Button style={{ backgroundColor: "#00ff99",marginBottom: "20px", marginTop: '20px', marginLeft: "80px", marginRight: "50px" }} type="primary">FOLLOW</Button>
            </Card>
            </Col>
            <Col className="gutter-row" span={8}>
            <Card
              style={{ width: 300, borderRadius: "30px", borderColor: "#00ff99" }}
              cover={
                <img
                  style={{ marginLeft: "90px", marginTop: "40px", width: "120px", height: "120px", borderRadius: "600px"}}
                  alt="example"
                  src="https://i0.wp.com/sguru.org/wp-content/uploads/2017/06/cool-csgo-profile-pictures-110a2953-0130-47a8-8968-913390bee551.jpg?resize=768%2C768&ssl=1"
                />
              }
            >
              <Meta
                style={{ marginLeft: "60px", marginRight: "50px"  }}
                title="Jonathon Jardania"
                description="@jjonathan"
              />
              <Meta style={{ marginTop: "15px", marginLeft: "35px", marginRight: "35px"}}
                description="School : MIT"
              />
              <Meta style={{ marginTop: "15px", marginLeft: "35px", marginRight: "35px"}}
                description="Level : Undergraduate"
              />
              <Meta style={{ marginTop: "15px", marginLeft: "35px", marginRight: "35px"}}
                description="Course : Marine Engineering"
              />
              <Button style={{ backgroundColor: "#00ff99",marginBottom: "20px", marginTop: '20px', marginLeft: "80px", marginRight: "50px" }} type="primary">FOLLOW</Button>
            </Card>
            </Col>
          </Row>
          <Row gutter={16} style={{ marginLeft: "60px", marginTop: "15px"}}>
            <Col className="gutter-row" span={8}>
            <Card
              style={{ width: 300, borderRadius: "30px", borderColor: "#00ff99" }}
              cover={
                <img
                  style={{ marginLeft: "90px", marginTop: "40px", width: "120px", height: "120px", borderRadius: "600px"}}
                  alt="example"
                  src="https://i0.wp.com/sguru.org/wp-content/uploads/2017/06/cool-csgo-profile-pictures-110a2953-0130-47a8-8968-913390bee551.jpg?resize=768%2C768&ssl=1"
                />
              }
            >
              <Meta
                style={{ marginLeft: "60px", marginRight: "50px"  }}
                title="Jonathon Jardania"
                description="@jjonathan"
              />
              <Meta style={{ marginTop: "15px", marginLeft: "35px", marginRight: "35px"}}
                description="School : MIT"
              />
              <Meta style={{ marginTop: "15px", marginLeft: "35px", marginRight: "35px"}}
                description="Level : Undergraduate"
              />
              <Meta style={{ marginTop: "15px", marginLeft: "35px", marginRight: "35px"}}
                description="Course : Marine Engineering"
              />
              <Button style={{ backgroundColor: "#00ff99",marginBottom: "20px", marginTop: '20px', marginLeft: "80px", marginRight: "50px" }} type="primary">FOLLOW</Button>
            </Card>
            </Col>
            <Col className="gutter-row" span={8}>
            <Card
              style={{ width: 300, borderRadius: "30px", borderColor: "#00ff99" }}
              cover={
                <img
                  style={{ marginLeft: "90px", marginTop: "40px", width: "120px", height: "120px", borderRadius: "600px"}}
                  alt="example"
                  src="https://i0.wp.com/sguru.org/wp-content/uploads/2017/06/cool-csgo-profile-pictures-110a2953-0130-47a8-8968-913390bee551.jpg?resize=768%2C768&ssl=1"
                />
              }
            >
              <Meta
                style={{ marginLeft: "60px", marginRight: "50px"  }}
                title="Jonathon Jardania"
                description="@jjonathan"
              />
              <Meta style={{ marginTop: "15px", marginLeft: "35px", marginRight: "35px"}}
                description="School : MIT"
              />
              <Meta style={{ marginTop: "15px", marginLeft: "35px", marginRight: "35px"}}
                description="Level : Undergraduate"
              />
              <Meta style={{ marginTop: "15px", marginLeft: "35px", marginRight: "35px"}}
                description="Course : Marine Engineering"
              />
              <Button style={{ backgroundColor: "#00ff99",marginBottom: "20px", marginTop: '20px', marginLeft: "80px", marginRight: "50px" }} type="primary">FOLLOW</Button>
            </Card>
            </Col>
            <Col className="gutter-row" span={8}>
            <Card
              style={{ width: 300, borderRadius: "30px", borderColor: "#00ff99" }}
              cover={
                <img
                  style={{ marginLeft: "90px", marginTop: "40px", width: "120px", height: "120px", borderRadius: "600px"}}
                  alt="example"
                  src="https://i0.wp.com/sguru.org/wp-content/uploads/2017/06/cool-csgo-profile-pictures-110a2953-0130-47a8-8968-913390bee551.jpg?resize=768%2C768&ssl=1"
                />
              }
            >
              <Meta
                style={{ marginLeft: "60px", marginRight: "50px"  }}
                title="Jonathon Jardania"
                description="@jjonathan"
              />
              <Meta style={{ marginTop: "15px", marginLeft: "35px", marginRight: "35px"}}
                description="School : MIT"
              />
              <Meta style={{ marginTop: "15px", marginLeft: "35px", marginRight: "35px"}}
                description="Level : Undergraduate"
              />
              <Meta style={{ marginTop: "15px", marginLeft: "35px", marginRight: "35px"}}
                description="Course : Marine Engineering"
              />
              <Button style={{ backgroundColor: "#00ff99",marginBottom: "20px", marginTop: '20px', marginLeft: "80px", marginRight: "50px" }} type="primary">FOLLOW</Button>
            </Card>
            </Col>
          </Row>
          <Row gutter={16} style={{ marginTop: "15px", marginLeft: "60px"}}>
            <Col className="gutter-row" span={8}>
            <Card
              style={{ width: 300, borderRadius: "30px", borderColor: "#00ff99" }}
              cover={
                <img
                  style={{ marginLeft: "90px", marginTop: "40px", width: "120px", height: "120px", borderRadius: "600px"}}
                  alt="example"
                  src="https://i0.wp.com/sguru.org/wp-content/uploads/2017/06/cool-csgo-profile-pictures-110a2953-0130-47a8-8968-913390bee551.jpg?resize=768%2C768&ssl=1"
                />
              }
            >
              <Meta
                style={{ marginLeft: "60px", marginRight: "50px"  }}
                title="Jonathon Jardania"
                description="@jjonathan"
              />
              <Meta style={{ marginTop: "15px", marginLeft: "35px", marginRight: "35px"}}
                description="School : MIT"
              />
              <Meta style={{ marginTop: "15px", marginLeft: "35px", marginRight: "35px"}}
                description="Level : Undergraduate"
              />
              <Meta style={{ marginTop: "15px", marginLeft: "35px", marginRight: "35px"}}
                description="Course : Marine Engineering"
              />
              <Button style={{ backgroundColor: "#00ff99",marginBottom: "20px", marginTop: '20px', marginLeft: "80px", marginRight: "50px" }} type="primary">FOLLOW</Button>
            </Card>
            </Col>
            <Col className="gutter-row" span={8}>
            <Card
              style={{ width: 300, borderRadius: "30px", borderColor: "#00ff99" }}
              cover={
                <img
                  style={{ marginLeft: "90px", marginTop: "40px", width: "120px", height: "120px", borderRadius: "600px"}}
                  alt="example"
                  src="https://i0.wp.com/sguru.org/wp-content/uploads/2017/06/cool-csgo-profile-pictures-110a2953-0130-47a8-8968-913390bee551.jpg?resize=768%2C768&ssl=1"
                />
              }
            >
              <Meta
                style={{ marginLeft: "60px", marginRight: "50px"  }}
                title="Jonathon Jardania"
                description="@jjonathan"
              />
              <Meta style={{ marginTop: "15px", marginLeft: "35px", marginRight: "35px"}}
                description="School : MIT"
              />
              <Meta style={{ marginTop: "15px", marginLeft: "35px", marginRight: "35px"}}
                description="Level : Undergraduate"
              />
              <Meta style={{ marginTop: "15px", marginLeft: "35px", marginRight: "35px"}}
                description="Course : Marine Engineering"
              />
              <Button style={{ backgroundColor: "#00ff99",marginBottom: "20px", marginTop: '20px', marginLeft: "80px", marginRight: "50px" }} type="primary">FOLLOW</Button>
            </Card>
            </Col>
            <Col className="gutter-row" span={8}>
            <Card
              style={{ width: 300, borderRadius: "30px", borderColor: "#00ff99" }}
              cover={
                <img
                  style={{ marginLeft: "90px", marginTop: "40px", width: "120px", height: "120px", borderRadius: "600px"}}
                  alt="example"
                  src="https://i0.wp.com/sguru.org/wp-content/uploads/2017/06/cool-csgo-profile-pictures-110a2953-0130-47a8-8968-913390bee551.jpg?resize=768%2C768&ssl=1"
                />
              }
            >
              <Meta
                style={{ marginLeft: "60px", marginRight: "50px"  }}
                title="Jonathon Jardania"
                description="@jjonathan"
              />
              <Meta style={{ marginTop: "15px", marginLeft: "35px", marginRight: "35px"}}
                description="School : MIT"
              />
              <Meta style={{ marginTop: "15px", marginLeft: "35px", marginRight: "35px"}}
                description="Level : Undergraduate"
              />
              <Meta style={{ marginTop: "15px", marginLeft: "35px", marginRight: "35px"}}
                description="Course : Marine Engineering"
              />
              <Button style={{ backgroundColor: "#00ff99",marginBottom: "20px", marginTop: '20px', marginLeft: "80px", marginRight: "50px" }} type="primary">FOLLOW</Button>
            </Card>
            </Col>
          </Row>
          <Row gutter={16} style={{ marginLeft: "60px", marginTop: "15px"}}>
            <Col className="gutter-row" span={8}>
            <Card
              style={{ width: 300, borderRadius: "30px", borderColor: "#00ff99" }}
              cover={
                <img
                  style={{ marginLeft: "90px", marginTop: "40px", width: "120px", height: "120px", borderRadius: "600px"}}
                  alt="example"
                  src="https://i0.wp.com/sguru.org/wp-content/uploads/2017/06/cool-csgo-profile-pictures-110a2953-0130-47a8-8968-913390bee551.jpg?resize=768%2C768&ssl=1"
                />
              }
            >
              <Meta
                style={{ marginLeft: "60px", marginRight: "50px"  }}
                title="Jonathon Jardania"
                description="@jjonathan"
              />
              <Meta style={{ marginTop: "15px", marginLeft: "35px", marginRight: "35px"}}
                description="School : MIT"
              />
              <Meta style={{ marginTop: "15px", marginLeft: "35px", marginRight: "35px"}}
                description="Level : Undergraduate"
              />
              <Meta style={{ marginTop: "15px", marginLeft: "35px", marginRight: "35px"}}
                description="Course : Marine Engineering"
              />
              <Button style={{ backgroundColor: "#00ff99",marginBottom: "20px", marginTop: '20px', marginLeft: "80px", marginRight: "50px" }} type="primary">FOLLOW</Button>
            </Card>
            </Col>
            <Col className="gutter-row" span={8}>
            <Card
              style={{ width: 300, borderRadius: "30px", borderColor: "#00ff99" }}
              cover={
                <img
                  style={{ marginLeft: "90px", marginTop: "40px", width: "120px", height: "120px", borderRadius: "600px"}}
                  alt="example"
                  src="https://i0.wp.com/sguru.org/wp-content/uploads/2017/06/cool-csgo-profile-pictures-110a2953-0130-47a8-8968-913390bee551.jpg?resize=768%2C768&ssl=1"
                />
              }
            >
              <Meta
                style={{ marginLeft: "60px", marginRight: "50px"  }}
                title="Jonathon Jardania"
                description="@jjonathan"
              />
              <Meta style={{ marginTop: "15px", marginLeft: "35px", marginRight: "35px"}}
                description="School : MIT"
              />
              <Meta style={{ marginTop: "15px", marginLeft: "35px", marginRight: "35px"}}
                description="Level : Undergraduate"
              />
              <Meta style={{ marginTop: "15px", marginLeft: "35px", marginRight: "35px"}}
                description="Course : Marine Engineering"
              />
              <Button style={{ backgroundColor: "#00ff99",marginBottom: "20px", marginTop: '20px', marginLeft: "80px", marginRight: "50px" }} type="primary">FOLLOW</Button>
            </Card>
            </Col>
            <Col className="gutter-row" span={8}>
            <Card
              style={{ width: 300, borderRadius: "30px", borderColor: "#00ff99" }}
              cover={
                <img
                  style={{ marginLeft: "90px", marginTop: "40px", width: "120px", height: "120px", borderRadius: "600px"}}
                  alt="example"
                  src="https://i0.wp.com/sguru.org/wp-content/uploads/2017/06/cool-csgo-profile-pictures-110a2953-0130-47a8-8968-913390bee551.jpg?resize=768%2C768&ssl=1"
                />
              }
            >
              <Meta
                style={{ marginLeft: "60px", marginRight: "50px"  }}
                title="Jonathon Jardania"
                description="@jjonathan"
              />
              <Meta style={{ marginTop: "15px", marginLeft: "35px", marginRight: "35px"}}
                description="School : MIT"
              />
              <Meta style={{ marginTop: "15px", marginLeft: "35px", marginRight: "35px"}}
                description="Level : Undergraduate"
              />
              <Meta style={{ marginTop: "15px", marginLeft: "35px", marginRight: "35px"}}
                description="Course : Marine Engineering"
              />
              <Button style={{ backgroundColor: "#00ff99",marginBottom: "20px", marginTop: '20px', marginLeft: "80px", marginRight: "50px" }} type="primary">FOLLOW</Button>
            </Card>
            </Col>
          </Row>


        </Content>
      </Layout>
    </>
  );
}

