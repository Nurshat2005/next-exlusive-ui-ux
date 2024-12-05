'use client';
import { useGetTodoQuery } from '@/redux/api/fake';
import scss from './ProductCard.module.scss';
import Image from 'next/image';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { IoHeartOutline } from 'react-icons/io5';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { FaStar } from 'react-icons/fa6';
import { useRef, useState } from 'react';
import { GoArrowRight, GoArrowLeft } from 'react-icons/go';

const ProductCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth / 2;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const { data } = useGetTodoQuery();
  const ratings = data?.map((el) => ({
    rate: el.rating?.rate ?? null,
    count: el.rating?.count ?? null,
  }));

  return (
    <div className={scss.ProductCard}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.overflowBtn}>
            <button onClick={() => handleScroll('left')}>
              <GoArrowLeft />
            </button>
            <button onClick={() => handleScroll('right')}>
              <GoArrowRight />
            </button>
          </div>
          <div className={scss.overflow} ref={scrollRef}>
            {data?.map((el, index) => (
              <div className={scss.allCard} key={el.id}>
                <div className={scss.card}>
                  <div className={scss.icons}>
                    <MdOutlineRemoveRedEye
                      onClick={() => openModal(el.image)}
                      className={scss.eyse}
                    />
                    <IoHeartOutline className={scss.heart} />
                  </div>
                  <Zoom>
                    <Image
                      className={scss.Images}
                      src={el.image}
                      alt={'img'}
                      width={182}
                      height={100}
                      quality={70}
                    />
                  </Zoom>
                  <button className={scss.btn}>Add To Cart</button>
                </div>
                <h3 className={scss.text}>{el.title.slice(0, 15)}</h3>
                <h4 className={scss.price}>${el.price}</h4>
                <div className={scss.star}>
                  <FaStar
                    className={`${ratings[index]?.rate >= 1 ? scss.starText : scss.opacityText}`}
                  />
                  <FaStar
                    className={`${ratings[index]?.rate >= 2 ? scss.starText : scss.opacityText}`}
                  />
                  <FaStar
                    className={`${ratings[index]?.rate >= 3 ? scss.starText : scss.opacityText}`}
                  />
                  <FaStar
                    className={`${ratings[index]?.rate >= 4 ? scss.starText : scss.opacityText}`}
                  />
                  <FaStar
                    className={`${ratings[index]?.rate === 5 ? scss.starText : scss.opacityText}`}
                  />
                  <h6 className={scss.countText}>({ratings[index]?.count})</h6>
                </div>
              </div>
            ))}
          </div>
          <center>
            <button className={scss.View}>View All Products</button>
          </center>
        </div>
      </div>

      {isModalOpen && (
        <div className={scss.modal} onClick={closeModal}>
          <div className={scss.modalContent} onClick={(e) => e.stopPropagation()}>
            <span className={scss.close} onClick={closeModal}>
              &times;
            </span>
            <Image
              src={currentImage}
              alt="Enlarged Product"
              width={600}
              height={400}
              quality={100}
              className={scss.enlargedImage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
