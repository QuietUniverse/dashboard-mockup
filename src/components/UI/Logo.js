function Logo({ height = "100%", className = "" }) {
  return (
    <object data="logo.svg" height={height} className={className}>
      <img src="logo.svg" alt="logo" />
    </object>
  );
}

export default Logo;
