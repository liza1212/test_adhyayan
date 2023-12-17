"use client"

import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {

  const buttonClicked = () => {
    window.electronAPI.send("server-chalu-kardo", {})
  }
  return (
    <main>
      <button onClick={buttonClicked}>Click me</button>
    </main>
  )
}
