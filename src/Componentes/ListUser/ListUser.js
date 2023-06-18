import React, { useState, useEffect } from "react";
import axios from "axios";
import CardUser from "../CardUser/CardUser";
import "./ListUser.css";

import { Link } from "react-router-dom";

const ListUser = () => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    axios("https://fakestoreapi.com/products/").then((json) =>
      setChars(json.data)
    );
  }, []);

  return (
    <div className="Cards-List">
      {chars.map((char) => {
        return (
          <div key={char.id}>
            <Link to={`detail/${char.id}`}>
              <CardUser char={char} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ListUser;
