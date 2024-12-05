'use client';
import Link from 'next/link';
import scss from './Header.module.scss';
import { FiSearch } from 'react-icons/fi';
import { IoHeartOutline } from 'react-icons/io5';
import { PiShoppingCart } from 'react-icons/pi';
import { LuUser } from 'react-icons/lu';
import { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { useStores } from '@/stores/useStores';
import { useRouter } from 'next/navigation';

const Header = () => {
  const navigate = useRouter();

  const { toggleActive, active } = useStores();

  const [selected, setSelected] = useState<null>(null);
  const handlLinkClick = (path: string) => {
    setSelected(path);
  };

  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <h1 className={scss.logo}>Exclusive</h1>
          <HiOutlineMenu
            style={{
              zIndex: active ? '11' : '0',
            }}
            className={scss.menu}
            onClick={toggleActive}
          />
          <div className={scss.allLink}>
            <Link
              onClick={() => handlLinkClick('/')}
              className={`${scss.link} ${selected === '/' ? scss.active : ''}`}
              href={'/'}
            >
              Home
            </Link>
            <Link
              onClick={() => handlLinkClick('/contact')}
              className={`${scss.link} ${selected === '/contact' ? scss.active : ''}`}
              href={'/contact'}
            >
              Contact
            </Link>
            <Link
              onClick={() => handlLinkClick('/about')}
              className={`${scss.link} ${selected === '/about' ? scss.active : ''}`}
              href={'/about'}
            >
              About
            </Link>
            <Link
              onClick={() => handlLinkClick('/sign-up')}
              className={`${scss.link} ${selected === '/sign-up' ? scss.active : ''}`}
              href={'/sign-up'}
            >
              Sign Up
            </Link>
          </div>
          <div className={scss.icons}>
            <div className={scss.inputSearch}>
              <input type="text" placeholder="What are you looking for?" />
              <FiSearch className={`${scss.search} `} />
              <FiSearch
                onClick={() => navigate.push('/search')}
                className={`${scss.searchIcon} `}
              />
            </div>
            <IoHeartOutline className={scss.heart} />
            <PiShoppingCart className={scss.shop} />
            <LuUser className={scss.user} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
