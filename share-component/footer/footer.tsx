import React, { FC } from 'react'
import { GrInstagram } from 'react-icons/gr'
import { FaFacebook, FaYoutube, FaTiktok } from 'react-icons/fa'
import Link from 'next/link'
import styles from './footer.module.scss'

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>

      <div className={styles.logo}>
        <img
          src="https://elyscents.pk/cdn/shop/files/logo_size.png?v=1703577106&width=277"
          alt="ElysCents Logo"
        />
      </div>

      <ul className={styles.links}>
        <li>Return & Exchange Policy</li>
        <li>Track Order</li>
        <li><Link href="/search">Search</Link></li>
        <li><Link href="/about_us">About Us</Link></li>
        <li><Link href="/contact_us">Contact Us</Link></li>
        <li>Blog</li>
        <li>Refund Policy</li>
        <li>Terms of Service</li>
      </ul>

      <div className={styles.socials}>
        <h3 className={styles.sign}>Sign up and save</h3>
        <p>
          Subscribe to get special offers, free giveaways, and once-in-a-lifetime
          deals.
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          className={styles.email}
        />

        <div className={styles.icons}>
          <span><GrInstagram /></span>
          <span><FaFacebook /></span>
          <span><FaYoutube /></span>
          <span><FaTiktok /></span>
        </div>
      </div>

      <div className={styles.talk_to_us}>
        <h3 className={styles.talk_us}>TALK TO US</h3>
        <p className={styles.chat_us}>Chat With Us</p>
        <p>Monday - Saturday: 10am–10pm PST</p>
        <p>Address: A219 block 3 KDA Market Gulshan e Iqbal Near Flourish Salon Karachi</p>
        <p>Address: Shop no A219, 2nd Floor At Ocean Mall</p>
        <p>
          Address : <span className={styles.bold}>Kiosk No.</span> FF-01 , Phase 1,
          First Floor NorthWalk Mall Karachi
        </p>
        <p>UAE Address: 248,0, LOOTAH BLDG 0 Diera DXB</p>
        <p>WhatsApp us: 0326-8124613</p>
        <p>Phone: 0301-2546333</p>
        <p>Customer Support: helloelyscents@gmail.com</p>
      </div>
<div className={styles.cridit}>
  <p>© 2026 Elyscents</p>
  <p>Powered by Usama Ahmed</p>
</div>
    </footer>
  )
}

export default Footer
