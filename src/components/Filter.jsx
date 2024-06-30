import { IoMdArrowDropdown } from "react-icons/io";
import { MdPeopleAlt } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Filter = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-around",
        borderBottom: "2px solid black",
        marginBottom: "10px",
        width: "100%",
        height: "36px",
      }}
    >
      <div
        style={{
          display: "flex",

          fontSize: "0.9rem",
          columnGap: "1.5rem",
        }}
      >
        <NavLink style={{ color: "black" }}>All Posts(32)</NavLink>
        <Link style={{ color: "black" }}>Article</Link>
        <Link style={{ color: "black" }}>Event</Link>
        <Link style={{ color: "black" }}>Education</Link>
        <Link style={{ color: "black" }}>Job</Link>
      </div>
      <div style={{ marginTop: "-6px", display: "flex" }}>
        <button
          style={{
            margin: "0px 1rem",
            display: "flex",
            backgroundColor: "#6f6f7052",
            alignItems: "center",
            width: "133px",
            height: "36px",
            borderRadius: "5px",
            fontFamily: "Arial",
            fontWeight: "bolder",
            fontSize: "0.9rem",
            justifyContent: "center",
          }}
        >
          <p> Write a Post</p>
          <span>
            <IoMdArrowDropdown />
          </span>
        </button>
        <button
          style={{
            backgroundColor: "royalblue",

            color: "white",
            display: "flex",
            height: "36px",
            width: "133px",
            alignItems: "center",
            justifyContent: "center",
            columnGap: "5px",
            padding: "5 16px",
            borderRadius: "5px",
          }}
        >
          <span> +</span>
          <span>
            <MdPeopleAlt />
          </span>
          <span>Join Group</span>
        </button>
      </div>
    </section>
  );
};

export default Filter;
