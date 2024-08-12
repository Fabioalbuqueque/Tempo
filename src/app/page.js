import Image from "next/image";
import styles from "./page.module.css";
import Wearth from "@/components/tempo/Wearth";

export default function Home() {
  return (
    <main className={styles.main}>
      <Wearth/>
    </main>
  );
}
