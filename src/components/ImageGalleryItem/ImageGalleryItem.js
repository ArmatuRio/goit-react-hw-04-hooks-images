import styles from '../ImageGalleryItem/imageGalleryItem.module.css';

const ImageGalleryItem = ({ hitsId, srcWebformat, onClick }) => {
  return (
    <li className={styles.ImageGalleryItem} onClick={onClick}>
      <img src={srcWebformat} alt="" className={styles.ImageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;
