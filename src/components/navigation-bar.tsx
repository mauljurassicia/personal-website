import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";

export default function NavigationBar() {
  return (
    <nav className="rounded-base flex items-center justify-around w-full max-w-6xl mx-auto h-16 bg-accent-1 lg:mt-10 mt-5 shadow-shadow">
      <section id="navigation-logo"></section>
      <section id="navigation-menu">
        <Menubar className="bg-transparent border-0 gap-6">
          <MenubarMenu>
            <MenubarTrigger className="hover:shadow-shadow">
              Home
            </MenubarTrigger>
            <MenubarContent className="bg-accent-1 ">
              <MenubarItem>Hero</MenubarItem>
              <MenubarItem>Skill</MenubarItem>
              <MenubarItem>Story</MenubarItem>
              <MenubarItem>Portfolio</MenubarItem>
              
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="hover:shadow-shadow">
              Blog
            </MenubarTrigger>
            <MenubarContent className="bg-accent-1">
              <MenubarItem>Web Development</MenubarItem>
              <MenubarItem>Nutrition</MenubarItem>
              <MenubarItem>Health</MenubarItem>
              <MenubarItem>Science</MenubarItem>
              <MenubarItem>Psychology</MenubarItem>
              <MenubarItem>Philosophy</MenubarItem>
              <MenubarItem>Travel</MenubarItem>
              <MenubarItem>Music</MenubarItem>
              <MenubarItem>Other</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="hover:shadow-shadow">
              Contact
            </MenubarTrigger>
            <MenubarContent className="bg-accent-1">
              <MenubarItem>Gmail</MenubarItem>
              <MenubarItem>LinkedIn</MenubarItem>
              <MenubarItem>GitHub</MenubarItem>
              <MenubarItem>Twitter</MenubarItem>
              <MenubarItem>Instagram</MenubarItem>
              <MenubarItem>WhatsApp</MenubarItem>
              </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </section>
      <section id="navigation-actions"></section>
    </nav>
  );
}
