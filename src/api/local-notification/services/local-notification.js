'use strict';

/**
 * local-notification service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::local-notification.local-notification');
