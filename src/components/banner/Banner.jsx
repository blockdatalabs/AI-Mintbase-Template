import React from "react";
import TreeOfLife from "../../assets/images/tree/Gardener_1.jpg";
import NEARWalletConnector from "../near-wallet/NEARWalletConnector";
import Image from "next/image";
import Characters from "../generators/Characters";
import { constants } from "@/utils/constants";

function Banner(props) {
  return (
    <section className="banner">
      <div className="shape right"></div>
      <div className="container big">
        <div className="row">
          <div className="col-xl-6 col-md-6">
            <div className="banner__left">
              <div className="block-text">
                <h2 className="heading">
                  <span>{constants.appName} <br/> </span><span>{constants.titleH1}</span>
                </h2>
                <div className="row">
                  <div className="col-xl-12 col-md-12">

                      <h5 className="heading">
                        <span>Sample prompt: </span> 
                         {constants.promptSample}
                      </h5>
                    <Image
                      src={TreeOfLife}
                      alt="tree of life"
                      style={{ border: "12px double", width: "700px", height: "auto", borderRadius: 40 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-md-6">
              <div className="block-text">
                <br />
                <br />
                  <Characters />
                  <NEARWalletConnector />
              </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}

export default Banner;
