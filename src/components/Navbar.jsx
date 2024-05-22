function Branding({ titleBrand }) {
  return (
    <a href="#" className="navbar-brand">
      <p className="h3 fw-bold pt-1 text-white">{titleBrand}</p>
    </a>
  );
}

function Links({ link1, link2, link3, link4 }) {
  const arrLink = [link1, link2, link3, link4];

  function ButtonHidden() {
    return (
      <button
        className="navbar-toggler bg-light"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    );
  }

  return (
    <>
      <ButtonHidden />
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="container-fluid d-flex justify-content-sm-start  justify-content-md-end">
          <ul className="navbar-nav pt-1">
            {arrLink.map((link, idx) => {
              return (
                <li className="nav-item fw-bold " key={idx}>
                  <a className="nav-link text-white" href="#">
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

function Navbar() {
  return (
    <nav className="navbar navbar-expand-xxl bg-dark">
      <div className="container-fluid">
        <Branding titleBrand="Start Bootstrap" />
        <Links link1="Home" link2="About" link3="Services" link4="Contact" />
      </div>
    </nav>
  );
}

export default Navbar;
