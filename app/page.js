import Link from 'next/link';

import classes from './page.module.css';
import ImageSlideshow from '@/components/images/image-slideshow';

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}><ImageSlideshow /></div>
        <div>
          <div className={classes.hero}>
            <h1>&quot;Epic Flavors for Epic Foodies&quot;</h1>
            <p>Discover & Savor Global Flavors, Share the Taste!</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            EpicBites is a platform for foodies to share their favorite recipes with the world. It&apos;s a place to discover new dishes and connect with other food lovers.
          </p>
          <p>
            EpicBites is a place to explore exciting flavors and meet fellow food enthusiasts.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why EpicBites?</h2>
          <p>
            EpicBites offers a community-driven experience where foodies can showcase their favorite recipes and culinary creations. It&apos;s the go-to destination to find fresh, global dishes and connect with passionate food lovers.
          </p>
          <p>
            EpicBites is about discovering diverse cuisines and fostering connections with foodies worldwide.
          </p>
        </section>
      </main>
    </>
  );
}