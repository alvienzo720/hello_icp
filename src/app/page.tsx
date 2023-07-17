"use client";

import styles from './page.module.css'
import { useEffect } from "react"
import { initJuno } from "@junobuild/core"
import { Auth } from '@/components/Auth';


export default function Home() {
  useEffect(() => {
    (async () =>
      await initJuno({
        satelliteId: "ug4u4-4qaaa-aaaal-actwq-cai"
      }))
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Hello Internet Computer</h1>
        <p>We shall build Awesome stuff here</p>
        <Auth>
          <p>Hello Alvin</p>
        </Auth>
      </div>
    </main>
  )
}





