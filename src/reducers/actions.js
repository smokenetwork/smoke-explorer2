
let chainLib = require('smoke-js');
chainLib.api.setOptions({url: 'https://rpc.smoke.io/'});
chainLib.config.set('address_prefix', 'SMK');
chainLib.config.set('chain_id', '1ce08345e61cd3bf91673a47fc507e7ed01550dab841fd9cdb0ab66ef576aaf0');

export const get_chainLib = () => {
  return chainLib;
};

/////////////////////////////////////////////////////////////////////////////////////
// Utils

export const merge = (reducer, obj) => ({type: 'merge', reducer, obj});
export const setIn = (reducer, arr, value) => ({type: 'setIn', reducer, arr, value});


export const sleep = (millis) => {
  return new Promise(resolve => setTimeout(resolve, millis));
};
