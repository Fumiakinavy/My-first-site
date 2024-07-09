import React from 'react';
import styles from './ProductPage.module.css';

const Navigation = () => (
  <nav className={styles.navigation}>
    <h1 className={styles.logo}>World Peas</h1>
    <ul className={styles.navLinks}>
      <li>Shop</li>
      <li>Newstand</li>
      <li>Who we are</li>
      <li>My profile</li>
    </ul>
    <button className={styles.cartButton}>Basket (3)</button>
  </nav>
);

const PageHeading = () => (
  <header className={styles.pageHeading}>
    <h2 className={styles.pageTitle}>Produce</h2>
    <p className={styles.dateInfo}>Fresh — August 21, 2023</p>
    <div className={styles.filterChips}>
      <button className={`${styles.chip} ${styles.defaultChip}`}>Default</button>
      <button className={styles.chip}>A-Z</button>
      <button className={styles.chip}>List view</button>
    </div>
  </header>
);

const ProductCard = ({ name, price, location, imageUrl }) => (
  <div className={styles.productCard}>
    <div className={styles.productImage} style={{backgroundImage: `url(${imageUrl})`}} />
    <h3 className={styles.productName}>{name}</h3>
    <p className={styles.productPrice}>{price}</p>
    <p className={styles.productLocation}>{location}</p>
  </div>
);

const ProductPage = () => {
  return (
    <div className={styles.productPage}>
      <Navigation />
      <PageHeading />
      <main className={styles.productGrid}>
        <ProductCard 
          name="Heirloom tomato"
          price="$5.99 / lb"
          location="Grown in San Juan Capistrano, CA"
          imageUrl="ed-o-neil-AvvdZlhDowA-unsplash"
        />
        <ProductCard 
          name="Organic ginger"
          price="$12.99 / lb"
          location="Grown in Huntington Beach, CA"
          imageUrl="noonbrew-ziCb4_EKmak-unsplash"
        />
      </main>
    </div>
  );
};

export default ProductPage;