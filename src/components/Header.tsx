import favicon from "../assets/img/favicon.svg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={favicon} alt="deliveroo" />
      </div>
    </header>
  );
};

export default Header;
