/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from "react";
import { useMoralis } from "react-moralis";
import { Layout, Input } from 'antd';
import Text from "antd/lib/typography/Text";
import { Card, Avatar } from 'antd';
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
              style={{ width: 300, }}
              cover={
                <img
                  style={{width: 300, height: 200}}
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2018/01/16/01/02/cryptocurrency-3085139_1280.jpg"
                />
              }
              actions={[
                <ArrowRightOutlined key="arrowRight" />,
                <LikeOutlined key="like" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="@Rick Morty"
                description="Course"
              />
              <Meta style={{ marginTop: "15px"}}
                title="The Rise Of Crypto Currency"
                description="Fiat Currecnies ruled this world for centuries and had no alternatives but then came crypto"
              />
            </Card>
            </Col>

            <Col className="gutter-row" span={8}>
            <Card
              style={{ width: 300 }}
              cover={
                <img
                  style={{width: 300, height: 200}}
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2018/01/16/01/02/cryptocurrency-3085139_1280.jpg"
                />
              }
              actions={[
                <ArrowRightOutlined key="arrowRight" />,
                <LikeOutlined key="like" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="@Rick Morty"
                description="News"
              />
              <Meta style={{ marginTop: "15px"}}
                title="The Rise Of Crypto Currency"
                description="Fiat Currecnies ruled this world for centuries and had no alternatives but then came crypto"
              />
            </Card>
            </Col>

            <Col className="gutter-row" span={8}>
            <Card
              style={{ width: 300 }}
              cover={
                <img
                  style={{width: 300, height: 200}}
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2018/01/16/01/02/cryptocurrency-3085139_1280.jpg"
                />
              }
              actions={[
                <ArrowRightOutlined key="arrowRight" />,
                <LikeOutlined key="like" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="@Rick Morty"
                description="Update"
              />
              <Meta style={{ marginTop: "15px"}}
                title="The Rise Of Crypto Currency"
                description="Fiat Currecnies ruled this world for centuries and had no alternatives but then came crypto"
              />
            </Card>
            </Col>
          </Row>

          <Row gutter={16} style={{ marginLeft: "60px", marginTop: "60px"}}>
            <Col className="gutter-row" span={8}>
            <Card
              style={{ width: 300, }}
              cover={
                <img
                  style={{width: 300, height: 200}}
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2018/01/16/01/02/cryptocurrency-3085139_1280.jpg"
                />
              }
              actions={[
                <ArrowRightOutlined key="arrowRight" />,
                <LikeOutlined key="like" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="@Rick Morty"
                description="Files"
              />
              <Meta style={{ marginTop: "15px"}}
                title="The Rise Of Crypto Currency"
                description="Fiat Currecnies ruled this world for centuries and had no alternatives but then came crypto"
              />
            </Card>
            </Col>

            <Col className="gutter-row" span={8}>
            <Card
              style={{ width: 300 }}
              cover={
                <img
                  style={{width: 300, height: 200}}
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2018/01/16/01/02/cryptocurrency-3085139_1280.jpg"
                />
              }
              actions={[
                <ArrowRightOutlined key="arrowRight" />,
                <LikeOutlined key="like" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="@Rick Morty"
                description="Blog"
              />
              <Meta style={{ marginTop: "15px"}}
                title="The Rise Of Crypto Currency"
                description="Fiat Currecnies ruled this world for centuries and had no alternatives but then came crypto"
              />
            </Card>
            </Col>

            <Col className="gutter-row" span={8}>
            <Card
              style={{ width: 300 }}
              cover={
                <img
                  style={{width: 300, height: 200}}
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2018/01/16/01/02/cryptocurrency-3085139_1280.jpg"
                />
              }
              actions={[
                <ArrowRightOutlined key="arrowRight" />,
                <LikeOutlined key="like" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="@Rick Morty"
                description="Bootcamp"
              />
              <Meta style={{ marginTop: "15px"}}
                title="The Rise Of Crypto Currency"
                description="Fiat Currecnies ruled this world for centuries and had no alternatives but then came crypto"
              />
            </Card>
            </Col>
          </Row>
          
          <Row gutter={16} style={{ marginLeft: "60px", marginTop: "60px"}}>
            <Col className="gutter-row" span={8}>
            <Card
              style={{ width: 300, }}
              cover={
                <img
                  style={{width: 300, height: 200}}
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2018/01/16/01/02/cryptocurrency-3085139_1280.jpg"
                />
              }
              actions={[
                <ArrowRightOutlined key="arrowRight" />,
                <LikeOutlined key="like" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="@Rick Morty"
                description="Document"
              />
              <Meta style={{ marginTop: "15px"}}
                title="The Rise Of Crypto Currency"
                description="Fiat Currecnies ruled this world for centuries and had no alternatives but then came crypto"
              />
            </Card>
            </Col>

            <Col className="gutter-row" span={8}>
            <Card
              style={{ width: 300 }}
              cover={
                <img
                  style={{width: 300, height: 200}}
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2018/01/16/01/02/cryptocurrency-3085139_1280.jpg"
                />
              }
              actions={[
                <ArrowRightOutlined key="arrowRight" />,
                <LikeOutlined key="like" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="@Rick Morty"
                description="Topic"
              />
              <Meta style={{ marginTop: "15px"}}
                title="The Rise Of Crypto Currency"
                description="Fiat Currecnies ruled this world for centuries and had no alternatives but then came crypto"
              />
            </Card>
            </Col>

            <Col className="gutter-row" span={8}>
            <Card
              style={{ width: 300 }}
              cover={
                <img
                  style={{width: 300, height: 200}}
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2018/01/16/01/02/cryptocurrency-3085139_1280.jpg"
                />
              }
              actions={[
                <ArrowRightOutlined key="arrowRight" />,
                <LikeOutlined key="like" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="@Rick Morty"
                description="Thesis"
              />
              <Meta style={{ marginTop: "15px"}}
                title="The Rise Of Crypto Currency"
                description="Fiat Currecnies ruled this world for centuries and had no alternatives but then came crypto"
              />
            </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
}

