/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import whole from "../assets/whole.jpg";
import { IoMdSearch } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import Modal from "react-modal";
import { PropTypes } from "prop-types";
import sideimage from "../assets/sideimage.jpg";
import { FcGoogle } from "react-icons/fc";
import facebook from "../assets/icons8-facebook.svg";

const LoginPopup = ({ isOpen, onClose }) => {
  const [isloggedin, setIsloggedin] = useState(false);
  const clickhandle = () => {
    console.log(isloggedin);
    return setIsloggedin(!isloggedin);
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Login Popup" // Improve accessibility
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust background opacity
        },
        content: {
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "720px",
          height: "553px",
          padding: "20px",
          border: "none",
          borderRadius: "15px",
        },
      }}
    >
      <p
        style={{
          fontSize: "0.9rem",
          fontFamily: "Arial",
          color: "forestgreen",
          fontWeight: "bold",
          marginBottom: "3rem",
          backgroundColor: "honeydew",
        }}
      >
        Let's learn, share & inspire each other with our passion for computer
        engineering. Sign up now 🤘🏼
      </p>
      {!isloggedin ? (
        <h1 style={{ fontSize: "1.6rem" }}>Create Account</h1>
      ) : (
        <h1 style={{ fontSize: "1.6rem" }}>Sign In </h1>
      )}
      <div style={{ display: "flex" }}>
        <form
          style={{
            marginTop: "1.1rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              border: "1px solid gainsboro",
              width: "332px",
              height: "151px",
            }}
          >
            {!isloggedin && (
              <div style={{ display: "flex" }}>
                <input
                  type="text"
                  placeholder="First Name"
                  style={{ padding: "9px", width: "165px" }}
                />
                <input type="text" placeholder="Last Name" />
              </div>
            )}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <input
                type="email"
                placeholder="Email"
                style={{ width: "330px", padding: "9px" }}
              />
              <input
                type="password"
                placeholder="password"
                style={{ width: "330px", padding: "9px" }}
              />
              {!isloggedin && (
                <input
                  type="password"
                  placeholder="Confirm Password"
                  style={{ width: "330px", padding: "9px" }}
                />
              )}
            </div>
          </div>
          <button
            type="button"
            style={{
              width: "330px",
              padding: "9px",
              borderRadius: "30px",
              marginTop: "16px",
              backgroundColor: "#2f6ce5",
              color: "white",
              border: "white",
            }}
            onClick={clickhandle}
          >
            Create Account
          </button>
          <button
            style={{
              width: "330px",
              padding: "9px",
              backgroundColor: "white",
              marginTop: "1.4rem",
              fontWeight: "bold",
              fontSize: "0.74rem",
              border: "1px solid gainsboro",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                marginRight: "10px",
              }}
            >
              <img
                src={facebook}
                alt=""
                style={{ height: "18px", width: "18px" }}
              />
            </span>
            <p style={{ marginTop: "3px" }}> Sign up with Facebook</p>
          </button>
          <button
            style={{
              width: "330px",
              padding: "9px",
              backgroundColor: "white",
              marginTop: "1.4rem",
              fontWeight: "bold",
              fontSize: "0.74rem",
              border: "1px solid gainsboro",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <span style={{ marginRight: "10px" }}>
              <FcGoogle />
            </span>
            <p> sign up with Google</p>
          </button>
        </form>
        <div style={{ marginLeft: "2rem" }}>
          {!isloggedin ? (
            <p>
              Already have an account?
              <a
                href=""
                style={{ marginLeft: "6px", textDecorationLine: "none" }}
                onClick={() => setIsloggedin(true)}
              >
                Sign In
              </a>
            </p>
          ) : (
            <p>Don't have an account yet? Create new for free!</p>
          )}
          <img
            src={sideimage}
            alt=""
            style={{
              height: "280px",
              marginTop: "10px",
            }}
          />
          <p
            style={{
              fontSize: "0.6rem",
              fontWeight: "bold",
              color: "#bbbbbb",
            }}
          >
            By signing up, you agree to our Terms & conditions, Privacy policy
          </p>
        </div>
      </div>
    </Modal>
  );
};

const Navbar = ({ isloggedin }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleClick = () => {
    setIsPopupOpen(true);
  };

  const handleClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        height: "50px",
      }}
    >
      <div
        style={{
          height: "50px",
          width: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "4px",
        }}
      >
        <img
          src={whole}
          alt=""
          style={{
            height: "20px",
            width: "140px",
          }}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span
          style={{
            borderTopLeftRadius: "1.3rem",
            borderBottomLeftRadius: "1.3rem",
            backgroundColor: "whitesmoke",
            padding: "0.4rem",
            marginTop: "5px",
            alignItems: "center",
          }}
        >
          <IoMdSearch />
        </span>
        <input
          type="search"
          placeholder={"Search for your favourite groups in ATG"}
          style={{
            borderTopRightRadius: "1.3rem",
            borderBottomRightRadius: "1.3rem",
            backgroundColor: "whitesmoke",

            padding: "0.5rem",
            marginTop: "5px",
            width: "300px",
            border: "none",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "0.9rem",
          marginRight: "2rem",
        }}
      >
        {!isloggedin && (
          <p style={{ display: "flex" }}>
            Create account.
            <span style={{ color: "blue" }} onClick={handleClick}>
              It's free!
            </span>
            <span>
              <IoMdArrowDropdown />
            </span>
          </p>
        )}
      </div>
      <LoginPopup isOpen={isPopupOpen} onClose={handleClose} />
    </header>
  );
};
LoginPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default Navbar;
