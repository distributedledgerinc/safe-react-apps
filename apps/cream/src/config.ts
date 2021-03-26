import { Networks } from '@gnosis.pm/safe-apps-sdk';

import daiIcon from './images/asset_DAI.svg';
import creth2Icon from './images/asset_CRETH2.svg';
import batIcon from './images/asset_BAT.svg';
import wbtcIcon from './images/asset_BTC.svg';
import ethIcon from './images/asset_ETH.svg';
import repIcon from './images/asset_REP.svg';
import usdcIcon from './images/asset_USDC.svg';
import usdtIcon from './images/asset_USDT.svg';
import zrxIcon from './images/asset_ZRX.svg';
import tokens from './tokens';

export type TokenItem = {
  id: string;
  label: string;
  iconUrl: string;
  decimals: number;
  tokenAddr: string;
  cTokenAddr: string;
};

export const rpc_token = process.env.REACT_APP_RPC_TOKEN || '';

export const getTokenList = (network: Networks): Array<TokenItem> => {
  const lowercaseNetwork = network.toLowerCase();

  if (lowercaseNetwork !== 'rinkeby' && lowercaseNetwork !== 'mainnet') {
    throw Error(`Not supported Network ${network}`);
  }

  const tokensByNetwork = tokens[lowercaseNetwork];

  if (!tokensByNetwork) {
    throw Error(`No token configuration for ${network}`);
  }

  return [
    {
      id: 'MXNC',
      label: 'MXNC',
      iconUrl: daiIcon,
      decimals: 18,
      tokenAddr: tokensByNetwork.MXNC,
      cTokenAddr: tokensByNetwork.MXNC,
    },
  ];
};
