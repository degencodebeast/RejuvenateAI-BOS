'use client';
import Link from 'next/link';
import RejuvenateAi from '../../images/svg/rejuvenate-logo.svg';

const Header = ({ bg = 'transparent' }: { bg?: string }) => {
  return (
    <section
      className={`bg-${bg} px-2 max-w-[1300px] w-full py-1 flex justify-between items-center mx-auto`}
    >
      <div>
        <Link href={'/'} textDecor={'none'}>
          <RejuvenateAi />
        </Link>
      </div>
    </section>
  );
};

export default Header;
