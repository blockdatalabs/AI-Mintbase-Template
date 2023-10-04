require("dotenv").config();

const appName = process.env.NEXT_PUBLIC_APP_TITLE;
const network = process.env.NEXT_PUBLIC_NETWORK;
const contractAddress = process.env.NEXT_PUBLIC_CONTRACT;
const walletContractAddress = process.env.NEXT_PUBLIC_WALLET_ADDRESS;
const titleH1 = process.env.NEXT_PUBLIC_APP_TITLE_H1;
const promptSample = process.env.NEXT_PUBLIC_APP_TITLE_PROMPT;
const apiFetchUrl = process.env.NEXT_PUBLIC_APP_API_FETCH;
const metaTitle = process.env.NEXT_PUBLIC_META_TITLE
const metaDescription = process.env.NEXT_PUBLIC_META_DESCRIPTION
const mintbaseWalletUrl = process.env.NEXT_PUBLIC_MINTBASE_WALLET_ADDRESS
export const constants = {
  appName,
  network,
  contractAddress,
  walletContractAddress,
  titleH1,
  promptSample,
  apiFetchUrl,
  metaTitle,
  metaDescription,
  mintbaseWalletUrl,
};