import React, { useState } from "react";
import Items from "../components/items/Items";
import Loader from "react-loader-spinner";
import HorScroll from "./scroll/HorScroll";

const Dashboard = () => {
  const arr = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];

  let del = () => {
    arr.splice();
  };

  const initialList = [
    {
      id: "a",
      firstname: "Robin",
      lastname: "Wieruch",
      year: 1988,
    },
    {
      id: "b",
      firstname: "Dave",
      lastname: "Davidds",
      year: 1990,
    },
    {
      id: "c",
      firstname: "Dave",
      lastname: "Davidds",
      year: 1990,
    },
    {
      id: "d",
      firstname: "Dave",
      lastname: "Davidds",
      year: 1990,
    },
  ];

  const text = () => {};

  const [list, setList] = React.useState(initialList);
  const handleRemove = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };
  return (
    <>
      {arr.map((item, key) => (
        <div></div>
      ))}
      <div>
        <Items />
      </div>
      <ul>
        {list.map((items) => (
          <li key={items.id}>
            <span>{items.firstname}</span>
            <span>{items.lastname}</span>
            <span>{items.year}</span>
            <button type="button" onClick={() => handleRemove(items.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      {/* <HorScroll /> */}
      <Items />
    </>
  );
};

export default Dashboard;
