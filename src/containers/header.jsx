import React from "react";
import Link from "next/link";
import { Nav, NavItem, NavLink } from "../styles";

export default function Header() {
  return (
    <Nav>
      <NavItem>
        <Link href="/" passHref>
          <NavLink href="/">Home</NavLink>
        </Link>
      </NavItem>

      <NavItem>
        <Link href="/list" passHref>
          <NavLink href="/">Public Snippets</NavLink>
        </Link>
      </NavItem>
    </Nav>
  );
}
