'use client';

import Image from "next/image";
import osmosisLogo from "../assets/osmo.svg";

import { useChain } from "@cosmos-kit/react";

export default function Home() {
  const chainContext = useChain('osmosis');
  const {
    status,
    username,
    address,
    message,
    connect,
    disconnect,
    openView,
  } = chainContext;

  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <div>
            <Image src={osmosisLogo} className='logo' alt="logo" />
            <h1>OSMOSIS</h1>
          </div>
          <p>
            <b>OKTO</b> Extension Integration <br/><strong>ChainProvider Test</strong>
          </p>
          <button className='btn' onClick={connect}>Connect Wallet</button>
        </div>
      </header>
    </div>
  );
}
