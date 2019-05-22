const WooCommerceAPI = require('woocommerce-api')

const config = {}
const Shop = new WooCommerceAPI(config)

/**
 * Lists the products on a WooCommerce shop by their vendor using the vendor parameter
 * @param api
 * @param vendor
 * @returns {Promise<any>}
 */
const getProductsByVendor = (api, vendor) => {
  return new Promise((resolve, reject) => {
    api.get('products?vendor=' + vendor, function(err, data, res) {
      if (err) {
        reject(err)
      } else {
        resolve(JSON.parse(data))
      }
    })
  })
}

const createOrderForVendor = (api, order, vendor) => {
  return new Promise((resolve, reject) => {
    order.vendor = vendor
    api.post('orders', order, function(err, data, res) {
      if (err) {
        reject(err)
      } else {
        resolve(JSON.parse(data))
      }
    })
  })
}

/** Examples **/
const wooCommerceOrderObject = {} // A valid WooCom order
getProductsByVendor(Shop, 1)
createOrderForVendor(Shop, wooCommerceOrderObject, 1)
