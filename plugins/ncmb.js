/* eslint-disable */

export default ({env}, inject) => {
  console.log(new NCMB(env.ncmb.applicationKey, env.ncmb.clientKey))
  inject('ncmb', new NCMB(env.ncmb.applicationKey, env.ncmb.clientKey))
}
