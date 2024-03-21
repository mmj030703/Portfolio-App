import { faFacebookSquare, faInstagramSquare, faLinkedin, faTwitterSquare, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "./Container";
import { useSelector } from "react-redux";

function Footer() {
  const portfolioDetails = useSelector(store => store.portfolioDetails.portfolioDetails);
  const user = portfolioDetails?.user;

  return (
    <footer className="bg-zinc-800 py-4">
      <Container className="border-y-2 border-slate-500">
        <div className="flex gap-x-10 text-white py-4">
          <div className="flex flex-col gap-y-3">
            <div className="flex flex-col justify-between gap-y-5">
              <p>logo</p>
              <p className="max-w-[500px]">Ipsa provident soluta libero suscipit consequatur. Culpa soluta, obcaecati magni quo expedita accusantium unde necessitatibus!</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faTwitterSquare} />
              <FontAwesomeIcon icon={faYoutube} />
              <FontAwesomeIcon icon={faInstagramSquare} />
              <FontAwesomeIcon icon={faFacebookSquare} />
            </div>
          </div>
          <div className="flex gap-x-10">
            <div>
              <h3>Navigation</h3>
              <ul className="w-max">
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Education & Experience</li>
                <li>Testinomial</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3>Contact</h3>
              <ul>
                <li>{user?.about?.phoneNumber}</li>
                <li>{user?.email}</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;