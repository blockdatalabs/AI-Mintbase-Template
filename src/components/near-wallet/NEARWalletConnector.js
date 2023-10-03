import { useState } from 'react';
import { useWallet } from  '@mintbase-js/react'
import { uploadReference } from "@mintbase-js/storage";
import { execute, mint } from '@mintbase-js/sdk';
import { constants } from '@/utils/constants';

function NEARWalletConnector() {
  const {
    connect,
    disconnect,
    activeAccountId,
    selector,
    isConnected,
    errorMessage,
  } = useWallet();
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [fileReference, setFileReference] = useState(null);
  const handleMint = async () => {
    const wallet = await selector.wallet();
    await execute(
      { wallet },   
      mint({
          noMedia: true,
          contractAddress: constants.contractAddress,
          metadata: {title: constants.appName, reference: fileReference},
          ownerId: constants.walletContractAddress
        }),
    );
  };
  
  const handleSubmitFile = async (e) => {
    e.preventDefault();
    if (!file) return;
    //call storage method to upload file to arweave
    const metadata = {
    title: constants.appName + " " + e.target.files[0],
    media: file
  }
    const uploadResult = await uploadReference(metadata);
    console.log("https://arweave.net/" + uploadResult.id)
    setFileReference(uploadResult.id)
  };
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };
  return isConnected ? (
  <section className="banner">
    <div className="container big">
        <button className="btn btn-primary" style={{width: 500, padding: 25, marginRight: 20, borderRadius: 20}}  onClick={connect}>Connect to NEAR and Mint</button>
        </div>
</section>
  ) :
  (    <section className="banner">
  <div className="container big">
    <h5>You are connected as {activeAccountId}</h5>
    <button className="btn btn-primary" style={{width: 500, padding: 25, marginRight: 20, borderRadius: 20}} onClick={disconnect}>Disconnect</button>
  </div>
  <div>
<form onSubmit={handleSubmitFile}>
  <input style={{color: "blue", width: 500, padding: 25, marginTop: 20, marginLeft: 25, borderRadius: 20}} onClick={handleMint} type="file" onChange={handleChange} />
  <button
  style={{color: "blue", width: 500, padding: 25, marginTop: 20, marginLeft: 25, borderRadius: 20}} onClick={handleMint}
    type="submit"
  >
    Upload
  </button>
</form>
<button style={{color: "blue", width: 500, padding: 25, marginTop: 20, marginLeft: 25, borderRadius: 20}} onClick={handleMint}>
  Mint
</button>
</div>
</section>)
}

export default NEARWalletConnector;