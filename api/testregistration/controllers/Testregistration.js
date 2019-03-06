'use strict';

/**
 * Testregistration.js controller
 *
 * @description: A set of functions called "actions" for managing `Testregistration`.
 */

module.exports = {

  /**
   * Retrieve testregistration records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.testregistration.search(ctx.query);
    } else {
      return strapi.services.testregistration.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a testregistration record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.testregistration.fetch(ctx.params);
  },

  /**
   * Count testregistration records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.testregistration.count(ctx.query);
  },

  /**
   * Create a/an testregistration record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.testregistration.add(ctx.request.body);
  },

  /**
   * Update a/an testregistration record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.testregistration.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an testregistration record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.testregistration.remove(ctx.params);
  }
};
