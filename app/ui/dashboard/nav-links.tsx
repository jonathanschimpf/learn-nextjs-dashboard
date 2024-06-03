'use client';

import { UserGroupIcon, HomeIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Define the type for each link
interface NavLink {
  name: string;
  href: string;
  icon: typeof HomeIcon | typeof DocumentDuplicateIcon | typeof UserGroupIcon;
}

const links: NavLink[] = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  { name: 'Invoices', href: '/dashboard/invoices', icon: DocumentDuplicateIcon },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  console.log("Current pathname:", pathname); // Debug: Log the current path

  // Define the isActive function with explicit parameter types
  const isActive = (path: string, currentPath: string) => currentPath.startsWith(path);

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const active = isActive(link.href, pathname);
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-gray-300 hover:text-gray-900 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-gray-300 text-gray-900': active,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
