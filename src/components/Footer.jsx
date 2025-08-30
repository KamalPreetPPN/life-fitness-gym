import React from 'react'
import styles from './Footer.module.css'
export default function Footer(){ return (<footer className={styles.footer}><div className={styles.container}><p>© {new Date().getFullYear()} Fitness Life Gym, Samana · All rights reserved.</p><p>Trainer: Sahil Sharma · Phone: +91 7508650365</p></div></footer>)}