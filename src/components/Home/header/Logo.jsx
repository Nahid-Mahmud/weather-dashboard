import { LogoImage } from "../../../assets/exportAllImages";

const Logo = () => {
  return (
    <a href="./index.html">
      <img className="h-9" src={LogoImage} alt="Weather App" />
    </a>
  );
};

export default Logo;
