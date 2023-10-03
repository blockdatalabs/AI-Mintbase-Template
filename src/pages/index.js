import React from "react";
import { WalletContextProvider } from '@mintbase-js/react'
import '@near-wallet-selector/modal-ui/styles.css';
import Banner from "../components/banner/Banner";
import { constants } from "@/utils/constants";

function MainHome() {   
  <>  
      <div className="home-3 wrapper">
        <Banner />

      </div>
  </>    
}

export default MainHome;
