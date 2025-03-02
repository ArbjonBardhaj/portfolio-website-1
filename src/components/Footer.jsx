import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
          {props.children}
          <div className="social-icons mt-3 mb-3 ">  
            <a
              href="
              https://www.linkedin.com/in/bardhaj/
              "
              className="icon"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a
              href="github.com/ArbjonBardhaj"
              className="icon"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
            </div>


      </Container>
    </footer>
  );
};

export default Footer;
