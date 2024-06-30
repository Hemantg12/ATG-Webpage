import Cards from "../components/Cards";
import Filter from "../components/Filter";
import HeadImage from "../components/HeadImage";

import Navbar from "../components/Navbar";

const Notloggedinpage = () => {
  return (
    <div>
      <Navbar />
      <HeadImage />

      <Filter />
      <Cards />
    </div>
  );
};

export default Notloggedinpage;
