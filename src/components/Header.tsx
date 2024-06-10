import favicon from "../assets/img/favicon.png";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div>
          <img src={favicon} alt="deliveroo" />
        </div>
        <p>deliveroo</p>
      </div>
    </header>
  );
};

export default Header;
