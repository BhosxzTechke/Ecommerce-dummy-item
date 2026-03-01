import Image from "next/image";
import styles from "./page.module.css";
import Hero from './homepage/Hero';
import Categories from "./homepage/Categories";
import Products from "./homepage/Products";
import { ErrorBoundary } from "./components/ErrorBoundary";

export default function Home() {
  return (
      <div className={styles.homepage}>
            <Hero/>
            <Categories/>
            <Products/>
      </div>
  );
}




