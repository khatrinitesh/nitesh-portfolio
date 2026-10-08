const Footer = () => {
  const currentFullYear = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-[#080a15] px-6 py-7 text-center">
      <p className="font-poppins text-sm text-slate-400">
        © {currentFullYear} Nitesh Khatri. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
