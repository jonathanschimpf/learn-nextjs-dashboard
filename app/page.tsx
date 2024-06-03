import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

import './tailwind-workaround.css';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex tailwind-override h-20 shrink-0 items-end rounded-lg gray-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`${lusitana.className} text-xl  md:text-3xl md:leading-normal`}>
            <strong>Welcome to a Next.js Dashboard project.</strong> This is the end result of the {' '}
            <a href="https://nextjs.org/learn/" className="learnjscourselink" target="_blank">
               Learn Next.js Course
            </a>, brought to you by <a href="https://vercel.com/" className="verceldotcom" target="_blank">Vercel</a>. A course with 16 chapters that aims to take you from the React library to the Next.js framework.
          </p>
          <Link href="/login" className="flex tailwind-override-button items-center gap-5 self-start rounded-lg gray-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base">
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Desktop */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            priority={true}
            alt="Screenshots of the dashboard project showing desktop version"
            className="hidden md:block"
          />
          {/* Mobile */}
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            priority={true}
            alt="Screenshot of the dashboard project showing mobile version"
            className="block md:hidden"
          />
        </div>
      </div>
    </main>
  );
}
