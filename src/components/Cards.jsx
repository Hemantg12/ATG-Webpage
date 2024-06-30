import Card from "./Card";
import Image1 from "../assets/Rectangle 5 (1).png";
import logo from "../assets/logo.jpg";
import Image2 from "../assets/Rectangle 5 (1).jpg";
import logo2 from "../assets/logo2.png";
import Image3 from "../assets/Rectangle 5.jpg";
import logo3 from "../assets/logo3.png";
import location from "../assets/outline-location_on-24px 2.jpg";
import edit from "../assets/baseline-edit-24px.jpg";
import { FiAlertCircle } from "react-icons/fi";
import logo4 from "../assets/Rectangle 3.10.svg";

const array = [
  {
    Image: Image1,
    title: "Article",
    Heading: "What if famous brands had regular fonts ? Meet RegulaBrands",
    description:
      "I've Worked in UX for the better part of a TbDeviceIpadExclamation.From now on,I plan to rei...",
    logo: logo,
    name: "Sarthak Kamra",
  },
  {
    Image: Image2,
    title: "Education",
    Heading:
      "Tax Benefits for Investment under National Pension Scheme launched by Government",
    description:
      "I've Worked in UX for the better part of a TbDeviceIpadExclamation.From now on,I plan to rei...",
    logo: logo2,
    name: "Sarah West",
  },
  {
    Image: Image3,
    title: "Meetup",
    Heading: "Fianance & Investment Elite Social Mixer @Lujiazui",
    description:
      "I've Worked in UX for the better part of a TbDeviceIpadExclamation.From now on,I plan to rei...",
    logo: logo3,
    name: "Ronal Jones",
  },
  {
    title: "Job",
    Heading: "Software Developer",
    description: "Innovaccer Analytics Private Ltd.",
    logo: logo4,
    name: "Joseph Gray",
  },
];
const Cards = () => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "850px",
          height: "600px",

          marginLeft: "9rem",
          padding: " 2rem 5rem",
        }}
      >
        {array.map((item, idx) => {
          return <Card key={idx} item={item} />;
        })}
      </div>
      <div>
        <div
          style={{
            width: "20%",
            margin: "5rem 0 1.5rem 5rem",
            display: "flex",
            borderBottom: "2px solid #B8B8B8",
            height: "25px",
          }}
        >
          <img
            src={location}
            alt=""
            style={{ height: "18px", width: "18px" }}
          />
          <p style={{ margin: "0 4.5rem 0 8px" }}>Noida,India</p>
          <img src={edit} alt="" style={{ height: "20px", width: "20px" }} />
        </div>
        <div>
          <p style={{ color: "#00000096", marginLeft: "2.6rem" }}>
            <span>
              <FiAlertCircle />
            </span>
            Your location will help us serve better <br /> and extend a
            personalised experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
