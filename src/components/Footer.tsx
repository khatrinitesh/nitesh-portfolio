const Footer = () => {
  const currentFullYear = new Date().getFullYear();
  return (
    <footer className="bg-black  text-center py-6">
      <p className="font-poppins text-md text-white">
        © {currentFullYear} Nitesh Khatri. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
