/* eslint-disable react/style-prop-object */
import logo from "./perfilImg.jpg";

const LogoImage = ({ width }) => {
  return <img src={logo} alt="imagePNG" style={{ width: width }} />;
};

export default LogoImage;
