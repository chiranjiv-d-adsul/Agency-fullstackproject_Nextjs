// for user interaction component should be client component there we have to use use client here for our hooks etc
"use client";
import React from "react";
import Link from "next/link";
import styles from "./links.module.css";
import NavLink from "./navlinks/navLinks";
import { useState } from "react";
const Links = () => {

  const navLink = [

    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" },
];

const [open, setOpen] = useState(false);
// temporary session and isAdmin
const session = true;
const isAdmin = true;

  return (
    <div className={styles.container}>
    <div className={styles.links}>
      {navLink.map((link => (
        <NavLink item={link} key={link.title} />
      )))}{
        /*  id session is true and there is admin then only show admin link and logout*/
        session ? (
          <>
          { isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}


        <button  className={styles.logout}>Logout</button>
          </>
        ) :
        /* and if not show login button*/ (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )
      }
    </div>
    <button className={styles.menu} onClick={() => setOpen ((prev) => !prev)} >menu</button>
    {
      open && <div className={styles.mobilelinks}>
        {navLink.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
      </div>
    }
    </div>
  );
};

export default Links;
