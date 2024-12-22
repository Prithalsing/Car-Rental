import React from 'react';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';


export default function Sidebar() {
  const menuItems = [
    { title: 'Home', href: '#' },
    { title: 'Cars', href: '#cars' },
    { title: 'Locations', href: '#locations' },
    { title: 'About', href: '#about' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild >
        <button className="bg-blue-700 rounded-md lg:hidden p-2">
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-balck w-[300px] sm:w-[400px]">
        <SheetTitle className="text-left mb-4">Navigation Menu</SheetTitle>
        <nav className="flex flex-col gap-4">
          {menuItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="block px-2 py-1 text-lg hover:text-blue-600 transition-colors"
            >
              {item.title}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}