import React, { useState } from "react";
import { Badge, Space, Button, Table, Tag } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
import Name from "../chnageName/ChangeName";
import ScrollContainer from "react-indiana-drag-scroll";
import HorScroll from "../scroll/HorScroll";
import DragScroll from "../dragscroll/DragScroll";
import "./items.scss";

const Items = (props) => {
  const { Key } = props;
  const [counts, setCount] = useState(0);
  const Decreament = () => {
    if (counts !== 0) {
      setCount(counts - 1);
    }
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
  return (
    <>
      {/* <ScrollContainer
        horizontal={true}
        vertical={true}
        className="scroll-container">
        {
          <div>
            <Space style={{ marginRight: 20 }}>
              <Badge
                className="site-badge-count-109"
                style={
                  counts !== 0
                    ? { backgroundColor: "#52c41a" }
                    : { backgroundColor: "orange" }
                }
                count={counts === 0 ? "Zero" : counts}
              />
            </Space>
            <Button
              type="default"
              size={100}
              style={{ marginRight: 20 }}
              onClick={() => setCount(counts + 1)}>
              Increament
            </Button>
            <Button
              type="default"
              danger
              style={{ marginRight: 20 }}
              onClick={Decreament}>
              Decreament
            </Button>
            <DeleteTwoTone twoToneColor="red" style={{ fontSize: "25px" }} />

            <Name />
          </div>
        }
        <HorScroll />
      </ScrollContainer> */}
      <DragScroll height={500} width={200}>
        <div>test1</div>
        <div>test2</div>
        <div>test3</div>
        <div>test4</div>
        {/* <div>test5</div>
        <div>test6</div>
        <div>test7</div>
        <div>test8</div>
        <div>test9</div>
        <div>test10</div>
        <div>test11</div>
        <div>test12</div>
        <div>test13</div>
        <div>test14</div>
        <div>test15</div>
        <div>test16</div>
        <div>test17</div>
        <div>test18</div>
        <div>test19</div>
        <div>test20</div> */}
        <div>
          <Table columns={columns} dataSource={data} />
        </div>
      </DragScroll>
    </>
  );
};

export default Items;
