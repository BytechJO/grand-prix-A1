
import Page1 from "./unit1/secA/Page1";
import Page2 from "./unit1/secA/Page2";
import Page3 from "./unit1/secA/Page3";
import Page4 from "./unit1/secA/Page4";
import Page5 from "./unit1/secA/Page5";
import Page6 from "./unit1/secA/Page6";
import Page7 from "./unit1/secA/Page7";

import img1 from "../assets/unit1/1.png";
import img2 from "../assets/unit1/2.png";
import img3 from "../assets/unit1/3.png";
import img4 from "../assets/unit1/4.png";
import img5 from "../assets/unit1/secA/5.png";
import img6 from "../assets/unit1/secA/6.png";
import img7 from "../assets/unit1/secA/7.png";
import img8 from "../assets/unit1/secA/8.png";
import img9 from "../assets/unit1/secA/9.png";

const getPages = ({ goToUnit, openPopup }) => [
  <Page1 bgImage={img1} />, 
  <Page2 bgImage={img2} goToUnit={goToUnit} />,
  <Page3 bgImage={img3} goToUnit={goToUnit} />,
  <Page4 bgImage={img4} openPopup={openPopup} />,
  <Page5 bgImage={img5} openPopup={openPopup} />,
  <Page6 bgImage={img6} openPopup={openPopup} />,
  <Page7 bgImage={img7} openPopup={openPopup} />,
  
];




export default getPages;
