'use strict'
/**
 * New Relic agent configuration.
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
const production = require('./config/production')

exports.config = {
  /**
   * Array of application names.
   */
  app_name: ['5se7en.com'],
  /**
   * Your New Relic license key.
   */
  license_key: process.env.NEWRELIC_KEY || production.NEWRELIC_KEY,
  logging: {
    enabled: false
  }
}
