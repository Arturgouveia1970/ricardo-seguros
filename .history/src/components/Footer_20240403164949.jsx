const Footer = () => {
  return (
    <div className="bg-blue py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="w-">
          <img src={"/src/assets/ricardo2.png"} alt="logo"  />
        </span>
        <span className="text-orangelight font-bold tracking-tight flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;