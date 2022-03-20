/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from "react";
import { useMoralis } from "react-moralis";
import { Layout, Card, Col, Row,  } from 'antd';
import Text from "antd/lib/typography/Text";
import { EllipsisOutlined, EditOutlined, ArrowRightOutlined } from '@ant-design/icons'


const { Meta } = Card;
const { Content, Sider } = Layout;

export default function QuickStart({ isServerInfo }) {
  const { Moralis } = useMoralis();

  return (
    <>
      <Row gutter={16} style={{ marginRight: "0px" }}>
        <Col className="gutter-row" span={8}>
          <Card
            style={{ textAlign: "center", width: 400, height: 500,  borderRadius: "30px", borderColor: "#00ff99"}}
            cover={
              <img
              style={{ marginLeft: "140px", marginTop: "40px", width: "120px", height: "120px", borderRadius: "600px"}}
                alt="example"
                src="https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg"
              />
            }
            actions={[
              <ArrowRightOutlined key="arrowRight" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
            
          >
            <Meta
              style={{ textAlign: "center"}}
              title="Rick Morty"
              description="@rickmorty"
            />
            <Meta style={{ textAlign: "center", marginTop: "15px" }}
              title="0xf45s6f1df15dx6v646"
            />
            <Meta style={{ fontSize:"16px", textAlign: "center", marginTop: "15px" }}
              title="School : MIT"
            />
            <Meta style={{ fontSize:"16px", textAlign: "center", marginTop: "15px" }}
              title="Level : Master's"
            />
            <Meta style={{ fontSize:"16px", textAlign: "center", marginTop: "15px" }}
              title="Course : Aerospcae Engineering"
            />
            </Card>
        </Col>

        
      </Row>
    </>
  );
}

