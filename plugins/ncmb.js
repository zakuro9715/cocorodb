/* global NCMB */
export default ({ env }, inject) => {
  inject('ncmb', new NCMB(env.ncmb.applicationKey, env.ncmb.clientKey))
}
