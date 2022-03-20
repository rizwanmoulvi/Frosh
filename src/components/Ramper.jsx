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
import { Row, Col, Button } from 'antd';


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
                  alt="example"
                  src="https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202106/MIT-Algorand-01_0.jpg?itok=kc8Jm3nW"
                />
              }
            >
              <Meta
                title="Blockchain Group"
                description="Course"
              />
              <Meta style={{ marginTop: "15px"}}
                description="Fiat Currecnies ruled this world for centuries and had no alternatives but then came crypto"
              />
              <Button style={{ backgroundColor: "#00ff99", marginTop: '20px' }} type="primary">Join</Button>
            </Card>
            </Col>

            <Col className="gutter-row" span={8}>
            <Card
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202106/MIT-Algorand-01_0.jpg?itok=kc8Jm3nW"
                />
              }
            >
              <Meta
                title="Blockchain Group"
                description="News"
              />
              <Meta style={{ marginTop: "15px"}}
                description="Fiat Currecnies ruled this world for centuries and had no alternatives but then came crypto"
              />
              <Button style={{ backgroundColor: "#00ff99", marginTop: '20px' }} type="primary">Join</Button>
            </Card>
            </Col>

            <Col className="gutter-row" span={8}>
            <Card
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202106/MIT-Algorand-01_0.jpg?itok=kc8Jm3nW"
                />
              }
            >
              <Meta
                title="Blockchain Group"
                description="Update"
              />
              <Meta style={{ marginTop: "15px"}}
                description="Fiat Currecnies ruled this world for centuries and had no alternatives but then came crypto"
              />
              <Button style={{ backgroundColor: "#00ff99", marginTop: '20px' }} type="primary">Join</Button>
            </Card>
            </Col>
          </Row>

          <Row gutter={16} style={{ marginLeft: "60px", marginTop: "60px"}}>
            <Col className="gutter-row" span={8}>
            <Card
              style={{ width: 300, }}
              cover={
                <img
                  alt="example"
                  src="https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202106/MIT-Algorand-01_0.jpg?itok=kc8Jm3nW"
                />
              }
            >
              <Meta
                title="Blockchain Group"
                description="Files"
              />
              <Meta style={{ marginTop: "15px"}}
                description="Fiat Currecnies ruled this world for centuries and had no alternatives but then came crypto"
              />
              <Button style={{ backgroundColor: "#00ff99", marginTop: '20px' }} type="primary">Join</Button>
            </Card>
            </Col>

            <Col className="gutter-row" span={8}>
            <Card
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202106/MIT-Algorand-01_0.jpg?itok=kc8Jm3nW"
                />
              }
            >
              <Meta
                title="Blockchain Group"
                description="Blog"
              />
              <Meta style={{ marginTop: "15px"}}
                description="Fiat Currecnies ruled this world for centuries and had no alternatives but then came crypto"
              />
              <Button style={{ backgroundColor: "#00ff99", marginTop: '20px' }} type="primary">Join</Button>
            </Card>
            </Col>

            <Col className="gutter-row" span={8}>
            <Card
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202106/MIT-Algorand-01_0.jpg?itok=kc8Jm3nW"
                />
              }
            >
              <Meta
                title="Blockchain Group"
                description="Bootcamp"
              />
              <Meta style={{ marginTop: "15px"}}
                description="Fiat Currecnies ruled this world for centuries and had no alternatives but then came crypto"
              />
              <Button style={{ backgroundColor: "#00ff99", marginTop: '20px' }} type="primary">Join</Button>
            </Card>
            </Col>
          </Row>
          
          <Row gutter={16} style={{ marginLeft: "60px", marginTop: "60px"}}>
            <Col className="gutter-row" span={8}>
            <Card
              style={{ width: 300, }}
              cover={
                <img
                  alt="example"
                  src="https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202106/MIT-Algorand-01_0.jpg?itok=kc8Jm3nW"
                />
              }
            >
              <Meta
                title="Blockchain Group"
                description="Document"
              />
              <Meta style={{ marginTop: "15px"}}
                description="Fiat Currecnies ruled this world for centuries and had no alternatives but then came crypto"
              />
              <Button style={{ backgroundColor: "#00ff99", marginTop: '20px' }} type="primary">Join</Button>
            </Card>
            </Col>

            <Col className="gutter-row" span={8}>
            <Card
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202106/MIT-Algorand-01_0.jpg?itok=kc8Jm3nW"
                />
              }
            >
              <Meta
                title="Blockchain Group"
                description="Topic"
              />
              <Meta style={{ marginTop: "15px" }}
                description="Fiat Currecnies ruled this world for centuries and had no alternatives but then came crypto"
              />
              <Button style={{ backgroundColor: "#00ff99", marginTop: '20px' }} type="primary">Join</Button>
            </Card>
            </Col>

            <Col className="gutter-row" span={8}>
            <Card
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202106/MIT-Algorand-01_0.jpg?itok=kc8Jm3nW"
                />
              }
            >
              <Meta
                title="Blockchain Group"
                description="Thesis"
              />
              <Meta style={{ marginTop: "15px" }}
                description="Fiat Currecnies ruled this world for centuries and had no alternatives but then came crypto"
              />
              <Button style={{ backgroundColor: "#00ff99", marginTop: '20px' }} type="primary">Join</Button>
            </Card>
            </Col>
          </Row>
          <Row gutter={16} style={{ marginLeft: "60px", marginTop: "60px"}}>
            <Col className="gutter-row" span={8}>
            <Card
              style={{ width: 300, }}
              cover={
                <img
                  alt="example"
                  src="https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202106/MIT-Algorand-01_0.jpg?itok=kc8Jm3nW"
                />
              }
            >
              <Meta
                title="Blockchain Group"
                description="Course"
              />
              <Meta style={{ marginTop: "15px"}}
                description="Fiat Currecnies ruled this world for centuries and had no alternatives but then came crypto"
              />
              <Button style={{ backgroundColor: "#00ff99", marginTop: '20px' }} type="primary">Join</Button>
            </Card>
            </Col>

            <Col className="gutter-row" span={8}>
            <Card
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202106/MIT-Algorand-01_0.jpg?itok=kc8Jm3nW"
                />
              }
            >
              <Meta
                title="Blockchain Group"
                description="Project"
              />
              <Meta style={{ marginTop: "15px"}}
                description="Fiat Currecnies ruled this world for centuries and had no alternatives but then came crypto"
              />
              <Button style={{ backgroundColor: "#00ff99", marginTop: '20px' }} type="primary">Join</Button>
            </Card>
            </Col>

            <Col className="gutter-row" span={8}>
            <Card
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202106/MIT-Algorand-01_0.jpg?itok=kc8Jm3nW"
                />
              }
            >
              <Meta
                title="Blockchain Group"
                description="Blog"
              />
              <Meta style={{ marginTop: "15px"}}
                description="Fiat Currecnies ruled this world for centuries and had no alternatives but then came crypto"
              />
              <Button style={{ backgroundColor: "#00ff99", marginTop: '20px' }} type="primary">Join</Button>
            </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
}

