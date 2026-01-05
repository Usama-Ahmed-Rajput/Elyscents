"use client";
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { BsBag } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaInstagram, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
import { Drawer } from "@mui/material";
import Link from "next/link";
import style from './header.module.scss'

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (value: boolean): void => {
    setOpen(value);
  };

  const [cartOpen, setCartOpen] = useState(false);

  const toggleCartDrawer = (value: boolean): void => {
    setCartOpen(value);
  };



  return (
    <>
      <div className={style.top_caption}>
        Buy any two perfumes & get free shipping
      </div>

      <nav className={style.header}>
        <div className={style.container}>
          <div className={style.top_line}>
            <div className={style.left_icons}>
              <div className={style.desktop_search_icon}>
                <CiSearch />
              </div>
              <div
                className={style.hamburger_icon}
                onClick={() => toggleDrawer(true)}
              >
                <RxHamburgerMenu />
              </div>

            </div>

            <div className={style.logo_container}>
              <img
                src="https://elyscents.pk/cdn/shop/files/logo_size.png?v=1703577106&width=320"
                alt="Elyscents Logo"
                className={style.logo}
              />
            </div>

            <div className={style.right_icons}>
              <div className={style.person_icon}>
                <Link href="/login"><IoPersonOutline /></Link>
              </div>
              <div
                className={style.desktop_bag_icon}
                onClick={() => toggleCartDrawer(true)}
              >
                <BsBag />
              </div>
              <div className={style.mobile_search_icon}>
                <CiSearch />
              </div>
              <div
                className={style.mobile_bag_icon}
                onClick={() => toggleCartDrawer(true)}
              >
                <BsBag />
              </div>
            </div>
          </div>

          <div className={style.desktop_nav}>
            <ul className={style.link_pages}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/perfume">All Perfumes</Link>
              </li>
              <li>
                <Link href="/crazy_deals">Crazy Deals</Link>
              </li>
              <li>
                <Link href="/about_us">About Us</Link>
              </li>
              <li>
                <Link href="/contact_us">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Drawer
        anchor="left"
        open={open}
        onClose={() => toggleDrawer(false)}
      >
        <div style={{ width: 250 }}>
          <ul className={style.modify}>
            <IoClose
              className={style.close_icon}
              onClick={() => toggleDrawer(false)}
            />
            <li className={style.border}><Link href="/">Home</Link></li>
            <li className={style.border}><Link href="/perfume">All Perfumes</Link></li>
            <li className={style.border}><Link href="/crazy_deals">Crazy Deals</Link></li>
            <li className={style.border}><Link href="/about_us">About Us</Link></li>
            <li className={style.border}><Link href="/contact_us">Contact Us</Link></li>
            <li className={style.border1}><Link href="/login">Login</Link></li>
          </ul>
        </div>

        <div>
          <ul className={style.main_icons}>
            <li className={style.icons}><FaInstagram /></li>
            <li className={style.icons}><FaFacebook /></li>
            <li className={style.icons}><FaYoutube /></li>
            <li className={style.icons}><FaTiktok /></li>
          </ul>
        </div>

      </Drawer>


      <Drawer
        anchor="right"
        open={cartOpen}
        onClose={() => toggleCartDrawer(false)}
      >
        <div className={style.cart_drawer}>
          <IoClose
            className={style.close_icon}
            onClick={() => toggleCartDrawer(false)}
          />
          <h2 className={style.cart_heading}> Cart</h2>

          <p className={style.cart_text}>Your cart is currently empty.</p>

        </div>
      </Drawer>


    </>
  )
}

export default Header
