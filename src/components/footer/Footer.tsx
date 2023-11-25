import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSquareCheck} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="container-fluid pt-md-2" id="footer">
        <div className="row py-2  flex-column  justify-items-around flex-md-row justify-content-md-between">
          <div className="col  col-lg-3 g-2 py-4  py-lg-2 text-center">
            <div className="d-flex justify-content-center align-items-center">
              <FontAwesomeIcon
                icon={faSquareCheck}
                size="2xl"
                style={{ color: "#ff6000" }}
              />
              <h4 className="m-0 mx-2 text-dark fw-bold">AP To-Do</h4>
            </div>

            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              hic, velit placeat molestias excepturi tempore.
            </p>
          </div>
          <div className="col  col-lg-3 ">
            <div className=" d-flex  justify-content-evenly align-items-center  h-100 mb-3 mb-lg-0">
              <a href="">
                {" "}
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="xl"
                  style={{ color: "rgb(255, 230, 199)" }}
                />{" "}
              </a>
              <a className="" href="">
                <FontAwesomeIcon
                  size="xl"
                  icon={faInstagram}
                  style={{ color: "rgb(255, 230, 199)" }}
                />
              </a>
              <a href="">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="xl"
                  style={{ color: "rgb(255, 230, 199)" }}
                />
              </a>
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className="p-2 text-center" id="copy">
          <p className="m-0">Federico-Valdiglesias 2023</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
