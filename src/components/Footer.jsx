import Container from "./Container";
import { useSelector } from "react-redux";

function Footer() {
  const portfolioDetails = useSelector(store => store.portfolioDetails.portfolioDetails);
  const user = portfolioDetails?.user;

  return (
    <footer className="bg-zinc-800 pt-12 font-poppins rounded-t-[2.5rem]">
      <Container className="border-y-2 border-slate-600">
        <div className="text-white py-14">
          <div className="flex items-center justify-around gap-x-10">
            <p className="font-bold text-4xl font-pacifico">Portfolio</p>
            <div>
              <h3 className="text-2xl text-orange-400 font-bold">Navigation</h3>
              <ul className="flex flex-col gap-y-1 w-max mt-5">
                <li className="cursor-pointer hover:underline underline-offset-4 w-fit">Home</li>
                <li className="cursor-pointer hover:underline underline-offset-4 w-fit">About Me</li>
                <li className="cursor-pointer hover:underline underline-offset-4 w-fit">Services</li>
                <li className="cursor-pointer hover:underline underline-offset-4 w-fit">Skills</li>
                <li className="cursor-pointer hover:underline underline-offset-4 w-fit">Projects</li>
                <li className="cursor-pointer hover:underline underline-offset-4 w-fit">Education & Experience</li>
                <li className="cursor-pointer hover:underline underline-offset-4 w-fit">Testinomial</li>
                <li className="cursor-pointer hover:underline underline-offset-4 w-fit">Contact</li>
              </ul>
            </div>
            <div className="self-start">
              <h3 className="text-2xl text-orange-400 font-bold">Contact</h3>
              <ul className="flex flex-col gap-y-1 w-max mt-5">
                <a href={`tel:${user?.about?.phoneNumber.slice(3)}`}>
                  <li className="cursor-pointer">{user?.about?.phoneNumber}</li>
                </a>
                <a href={`mailto:${user?.email}`}>
                  <li className="cursor-pointer" title="Send Email">{user?.email}</li>
                </a>
              </ul>
            </div>
          </div>
          </div>
          </Container>
          <p className="text-center text-slate-400 font-bold pt-4 pb-1">Made by Mayank M Jain</p>
    </footer >
  )
}

export default Footer;