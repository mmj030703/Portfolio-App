import Container from "./Container";

function Header() {
  
  const navItems = [
    {
      name: 'Home',
      leftSide: true
    },
    {
      name: 'About',
      leftSide: true
    },
    {
      name: 'Services',
      leftSide: true
    },
    {
      name: 'Skills',
      leftSide: true
    },
    {
      name: 'Projects',
      leftSide: false
    },
    {
      name: 'Education & Experience',
      leftSide: false
    },
    {
      name: 'Testinomial',
      leftSide: false
    },
    {
      name: 'Contact',
      leftSide: false
    },
  ];

  return (
    <header>
      <Container>
      <nav>
        <ul className="flex justify-center gap-x-3 mx-auto">
          {navItems.map(navItem => navItem.leftSide && <li key={navItem.name}>{navItem.name}</li>)}
          <div>
            <h2 className="font-bold">Portfolio</h2>
          </div>
          {navItems.map(navItem => !navItem.leftSide && <li key={navItem.name}>{navItem.name}</li>)}
        </ul>
      </nav> 
      </Container>
    </header>
  )
}

export default Header;