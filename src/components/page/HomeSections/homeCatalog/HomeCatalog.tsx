'use client';
// import React, { useEffect } from 'react';
import scss from './HomeCatalog.module.scss';
import { FaChevronRight } from 'react-icons/fa6';
import { FaApple } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import Image from 'next/image';
import { useStores } from '@/stores/useStores';
const HomeCatalog = () => {
  const { active } = useStores();

  return (
    <section className={scss.HomeCatalog}>
      <div
        style={{
          display: active ? 'flex' : 'none',
        }}
        className={scss.window}
      ></div>
      <div className="container">
        <div className={scss.content}>
          <div className={`${active ? scss.catalogTwo : scss.catalog}`}>
            <h4 className={scss.catalogText}>
              Woman’s Fashion <FaChevronRight />
            </h4>
            <h4 className={scss.catalogText}>
              Men’s Fashion <FaChevronRight />
            </h4>
            <h4 className={scss.catalogText}>Electronics</h4>
            <h4 className={scss.catalogText}>Home & Lifestyle</h4>
            <h4 className={scss.catalogText}>Medicine</h4>
            <h4 className={scss.catalogText}>Sports & Outdoor</h4>
            <h4 className={scss.catalogText}>Baby’s & Toys</h4>
            <h4 className={scss.catalogText}>Groceries & Pets</h4>
            <h4 className={scss.catalogText}>Health & Beauty</h4>
          </div>
          <div className={scss.poster}>
            <div className={scss.productDescription}>
              <div className={scss.productName}>
                <FaApple className={scss.apple} />
                <h4 className={scss.text}>iPhone 16 Series</h4>
              </div>
              <h4 className={scss.discount}>
                Up to 15% <br />
                off Voucher
              </h4>
              <div className={scss.btn}>
                <button>Shop Now</button>
                <FaArrowRightLong className={scss.icons} />
              </div>
            </div>
            <div className={scss.image}>
              <Image
                className={scss.nextImage}
                src={
                  'https://www.apple.com/v/iphone/home/bx/images/overview/consider_modals/innovation/modal_last__cr0lx069vzu6_large_2x.jpg'
                }
                width={400}
                height={390}
                alt="Apple"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCatalog;
