import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import plusArrow from '../invoice-app/starter-code/assets/icon-plus.svg';
export default function Nav() {
  return (
    <div id="nav-container">
      <Link href="/create/car">
        <div className="button">create car</div>
      </Link>
      <Link href="/">
        <div className="button">home</div>
      </Link>
    </div>
  );
}
