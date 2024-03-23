import { faFacebookSquare, faInstagram, faLinkedinIn, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "./Container";
import { useSelector } from "react-redux";

function Footer() {
  const portfolioDetails = useSelector(store => store.portfolioDetails.portfolioDetails);
  const user = portfolioDetails?.user;

  return (
    <footer className="bg-zinc-800 py-4">
      <Container className="border-y-2 border-slate-500">
        <div className="flex justify-between gap-x-10 text-white py-4">
          <div className="flex justify-between flex-col gap-y-3">
            <div className="flex flex-col justify-between gap-y-5">
              <p className="font-bold text-2xl">Portfolio</p>
              <p className="max-w-[500px]">tempore aspernatur minima illum hic dolore ex eum quas odit eius dignissimos delectus eligendi minus. Illum, natus!Ipsa provident soluta libero suscipit consequatur. Culpa soluta, obcaecati magni quo expedita accusantium unde necessitatibus!</p>
            </div>
            <div className="flex gap-x-3 text-3xl">
              <FontAwesomeIcon icon={faLinkedinIn} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faYoutube} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faFacebookSquare} />
            </div>
          </div>
          <div className="flex gap-x-10">
            <div>
              <h3 className="text-lg text-orange-400 font-bold">Navigation</h3>
              <ul className="w-max text-[15px] mt-5">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">About Me</li>
                <li className="cursor-pointer">Services</li>
                <li className="cursor-pointer">Skills</li>
                <li className="cursor-pointer">Projects</li>
                <li className="cursor-pointer">Education & Experience</li>
                <li className="cursor-pointer">Testinomial</li>
                <li className="cursor-pointer">Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg text-orange-400 font-bold">Contact</h3>
              <ul className="w-max text-[15px] mt-5">
                <li>{user?.about?.phoneNumber}</li>
                <li className="cursor-pointer" title="Send Email">{user?.email}</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;