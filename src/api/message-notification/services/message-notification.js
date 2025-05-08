'use strict';

/**
 * message-notification service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::message-notification.message-notification');
