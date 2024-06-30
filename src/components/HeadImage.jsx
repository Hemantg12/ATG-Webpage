import Rectangle from "../assets/Rectangle 3 (6).jpg";
const HeadImage = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "450px",
      }}
    >
      <img src={Rectangle} alt="" style={{ width: "100%", height: "400px" }} />
    </div>
  );
};

export default HeadImage;
