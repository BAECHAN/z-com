import React, { ReactNode } from 'react'
import { LayoutType } from '../layout'
import styles from '@/app/page.module.css'

export default function Layout({children, modal} : LayoutType) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  )
}
