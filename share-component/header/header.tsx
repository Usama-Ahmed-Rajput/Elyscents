"use client";
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { BsBag } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaInstagram, FaFacebook, FaYoutube, FaTiktok} from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Drawer } from "@mui/material";
import Link from "next/link";
import style from './header.module.scss'
import { useCart } from '../context/CartContext';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { items, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  const toggleDrawer = (value: boolean): void => {
    setOpen(value);
  };

  const toggleCartDrawer = (value: boolean): void => {
    setCartOpen(value);
  };



  return (
    <>
      <div className={style.top_caption}>
        Al Abrar Fragrances - Buy any two perfumes & get free shipping
      </div>

      <nav className={style.header}>
        <div className={style.container}>
          <div className={style.top_line}>
            <div className={style.left_icons}>
              <Link href='/search'>
                <div className={style.desktop_search_icon}>
                  <CiSearch />
                </div>
              </Link>
              <div
                className={style.hamburger_icon}
                onClick={() => toggleDrawer(true)}
              >
                <RxHamburgerMenu />
              </div>

            </div>

            <div className={style.logo_container}>
              <Link href="/"><img
                src="/al-abrar-logo.png"
                alt="Al Abrar Fragrances Logo"
                className={style.logo}
              /></Link>
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
              <li className={style.dropdown_parent}>
                <Link href="/perfume">All Perfumes</Link>
                <ul className={style.drop_down}>
                  <Link href="/perfume_for_him"><li>Men</li></Link>
                  <Link href="/perfume_for_her"><li>Women</li></Link>
                  <Link href="/unisex"><li>Unisex</li></Link>
                  <Link href="/oud_collection"><li>Oud Collection</li></Link>
                  <Link href="/best_selling"><li>Best Seller</li></Link>
                  <Link href="/new_arrivals"><li>New Arrivals</li></Link>
                  <Link href="/crazy_deals"><li>Crazy Deals</li></Link>
                </ul>
              </li>

              <li>
                <Link href="/crazy_deals">Crazy Deals</Link>
              </li>

              <li>
                <Link href="/new_year_sale">New Year Special</Link>
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
          <h2 className={style.cart_heading}>Shopping Cart</h2>

          {items.length === 0 ? (
            <p className={style.cart_text}>Your cart is currently empty.</p>
          ) : (
            <>
              <div className={style.cart_items}>
                {items.map((item) => (
                  <div key={item.id} className={style.cart_item}>
                    <img src={item.image} alt={item.name} className={style.cart_item_image} />
                    <div className={style.cart_item_details}>
                      <h3>{item.name}</h3>
                      <p className={style.cart_item_price}>Rs. {item.price.toLocaleString()}</p>
                      <div className={style.cart_item_quantity}>
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                      </div>
                    </div>
                    <button
                      className={style.cart_item_delete}
                      onClick={() => removeFromCart(item.id)}
                    >
                      <MdDeleteOutline />
                    </button>
                  </div>
                ))}
              </div>

              <div className={style.cart_summary}>
                <div className={style.cart_total}>
                  <span>Total:</span>
                  <span className={style.cart_total_price}>Rs. {getTotalPrice().toLocaleString()}</span>
                </div>
                <Link href="/checkout">
                  <button className={style.checkout_btn}>Proceed to Checkout</button>
                </Link>
              </div>
            </>
          )}
        </div>
      </Drawer>


    </>
  )
}

export default Header
