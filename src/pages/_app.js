import React from "react";
import '../App.scss'
import "bootstrap/dist/css/bootstrap.css";
import { WalletContextProvider } from "@mintbase-js/react";
import Banner from "@/components/banner/Banner";
import Logo from "../assets/images/logo/logo-header.png"
import Header from "@/components/header/Header";
import { constants } from "@/utils/constants";
function App() {
  return (
    <>
        <meta charset="utf-8" />
        <link rel="icon" href={Logo} sizes="256x256" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <title>{constants.metaTitle}</title>
        <meta name="description" content={constants.metaDescription}/>
        <meta property="og:image" content={Logo} />    
      <WalletContextProvider
        contractAddress={constants.contractAddress}
        network={constants.network}
      > 
      <Header />
        <div className="home-3 wrapper">
        
          <Banner />
          <br />
          <br />
          <br />
        </div>
      </WalletContextProvider>
    </>
      
  );
}

export default App;