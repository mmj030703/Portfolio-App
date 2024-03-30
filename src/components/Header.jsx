import { useId, useState } from "react";
import Container from "./Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const navItems = [
    {
      id: useId(),
      name: 'Home',
      active: true
    },
    {
      id: useId(),
      name: 'Services',
      active: false
    },
    {
      id: useId(),
      name: 'About',
      active: false
    },
    {
      id: useId(),
      name: 'Skills',
      active: false
    },
    {
      id: useId(),
      name: 'Projects',
      active: false
    },
    {
      id: useId(),
      name: 'Experience',
      active: false
    },
    {
      id: useId(),
      name: 'Testinomial',
      active: false
    },
    {
      id: useId(),
      name: 'Contact',
      active: false
    },
  ];

  const showNavbar = () => {
    setShowMobileNav((prevShowMobileNav) => {
      return !prevShowMobileNav;
    });
  };

  return (
    <header>
      <Container>
        <nav className="relative flex justify-center font-poppins">
          <ul className="fixed z-50 mt-4 w-fit px-1 bg-zinc-900 text-white py-2 rounded-full hidden md-lg:flex justify-center mx-auto before before:absolute before:w-[2px] before:h-6 before:bg-zinc-700 before:-top-6 before:left-14 after:absolute after:h-6 after:w-[2px] after:bg-zinc-700 after:-top-6 after:right-14">
            <div className="flex">
              {navItems.map(navItem => <li key={navItem.id} className={`${navItem.active ? 'bg-orange-500 rounded-full font-bold' : null}  px-3 lg:max-xl:px-5 xl:px-7 py-2 xl:py-4 hover:bg-orange-500 hover:rounded-full cursor-pointer mx-1 text-[15px] xl:text-base`}>{navItem.name}</li>)}
            </div>
          </ul>
          { /* Mobile Navbar */}
          <FontAwesomeIcon onClick={showNavbar} icon={faBars} className="fixed z-50 bg-orange-400 py-[14px] px-4 rounded-full block md-lg:hidden right-2 xs:right-4 sm:right-7 top-7 sm:top-6 cursor-pointer text-2xl sm:text-3xl" />
          {
            (
              <ul className={`fixed ${showMobileNav ? 'top-[0]' : 'top-[-650px]'} border-2 border-orange-400 transition-all duration-1000 ease-in-out rounded-2xl w-[95%] mx-auto z-40 px-2 pt-4 pb-3 mt-4 bg-zinc-900 text-white justify-center before before:absolute before:w-[2px] before:h-6 before:bg-zinc-700 before:-top-6 before:left-14 after:absolute after:h-6 after:w-[2px] after:bg-zinc-700 after:-top-6 after:right-14`}>
                <div className="flex flex-col gap-y-[4px] pt-14">
                  {navItems.map(navItem => <li key={navItem.id} className={`${navItem.active ? 'bg-orange-500 rounded-full font-bold' : null}  px-3 lg:max-xl:px-5 xl:px-7 py-2 xl:py-4 hover:bg-orange-500 hover:rounded-full cursor-pointer mx-1 text-[15px] xl:text-base`}>{navItem.name}</li>)}
                </div>
              </ul>
            )
          }
        </nav>
      </Container>
    </header>
  )
}

export default Header;