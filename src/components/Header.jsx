import { useId } from "react";
import Container from "./Container";

function Header() {
  const navItems = [
    {
      id: useId(),
      name: 'Home',
      leftSide: true,
      active: true
    },
    {
      id: useId(),
      name: 'Services',
      leftSide: true,
      active: false
    },
    {
      id: useId(),
      name: 'About',
      leftSide: true,
      active: false
    },
    {
      id: useId(),
      name: 'Skills',
      leftSide: true,
      active: false
    },
    {
      id: useId(),
      name: 'Projects',
      leftSide: false,
      active: false
    },
    {
      id: useId(),
      name: 'Experience',
      leftSide: false,
      active: false
    },
    {
      id: useId(),
      name: 'Testinomial',
      leftSide: false,
      active: false
    },
    {
      id: useId(),
      name: 'Contact',
      leftSide: false,
      active: false
    },
  ];

  return (
    <header>
      <Container>
        <nav className="flex justify-center font-poppins">
          <ul className="fixed z-50 mt-4 w-fit px-1 bg-zinc-900 text-white py-2 rounded-full flex justify-center mx-auto before before:absolute before:w-[2px] before:h-6 before:bg-zinc-700 before:-top-6 before:left-14 after:absolute after:h-6 after:w-[2px] after:bg-zinc-700 after:-top-6 after:right-14">
            <div className="flex">
              {navItems.map(navItem => navItem.leftSide && <li key={navItem.id} className={`${navItem.active ? 'bg-orange-500 rounded-full font-bold' : null} py-3 px-7 hover:bg-orange-500 hover:rounded-full cursor-pointer mx-1`}>{navItem.name}</li>)}
            </div>
            <div className="flex items-center mx-12 cursor-pointer">
              <h2 className="font-bold font-pacifico text-3xl">Portfolio</h2>
            </div>
            <div className="flex">
              {navItems.map(navItem => !navItem.leftSide && <li key={navItem.id} className={`${navItem.active ? 'bg-orange-500 rounded-full font-bold' : null} py-3 px-7 hover:bg-orange-500 hover:rounded-full cursor-pointer mx-1`}>{navItem.name}</li>)}
            </div>
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header;