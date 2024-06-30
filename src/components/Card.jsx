import { IoEyeOutline } from "react-icons/io5";

import { IoMdShare } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import PropTypes from "prop-types";
import { useState } from "react";

const Card = ({ item }) => {
  const [showdropdown, setShowdropdown] = useState(false);
  const clickHandler = () => setShowdropdown(!showdropdown);

  return (
    <div style={{ marginBottom: "30px", border: "1px solid black" }}>
      <div style={{ height: "270px", width: "800px" }}>
        <img
          src={item.Image}
          alt=""
          style={{ height: "250px", width: "690px" }}
        />
      </div>
      <p
        style={{
          margin: "14px",
          fontWeight: "bold",
          fontSize: "1.3rem",
          opacity: "0.8",
        }}
      >
        {item.title}
      </p>
      <p style={{ display: "flex", justifyContent: "space-between" }}>
        <h1 style={{ fontSize: "1.5rem", width: "500px" }}>{item.Heading}</h1>
        <BsThreeDots
          style={{
            marginTop: "1rem",
            fontSize: "2rem",
            marginRight: "4rem",
          }}
          onClick={clickHandler}
        />
        {showdropdown && (
          <div
            style={{
              backgroundColor: "whitesmoke",
              color: "black",
              border: "1px solid black",
              padding: "10px",
              marginRight: "7rem",
              marginTop: "2rem",
            }}
          >
            <option value="">Edit</option>
            <option value="">Report</option>
            <option value="">Option 3</option>
          </div>
        )}
      </p>

      <p style={{ margin: "16px", fontSize: "1rem" }}>{item.description}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "1.3rem",
        }}
      >
        <div
          style={{ marginTop: "1rem", display: "flex", marginBottom: "3rem" }}
        >
          <img src={item.logo} alt="" style={{ height: "3rem" }} />
          <p
            style={{
              fontWeight: "bolder",
              marginLeft: "1rem",
              marginTop: "12px",
            }}
          >
            {item.name}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginRight: "7rem",
            marginBottom: "1rem",
            fontSize: "1.3rem",
            alignItems: "center",
          }}
        >
          <span>
            <IoEyeOutline />
          </span>
          <p>1.4k views</p>
          <span>
            <IoMdShare />
          </span>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.shape({
    Image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    Heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
