'use strict';

/**
 * Projet.js controller
 *
 * @description: A set of functions called "actions" for managing `Projet`.
 */

module.exports = {

  /**
   * Retrieve projet records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.projet.search(ctx.query);
    } else {
      return strapi.services.projet.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a projet record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.projet.fetch(ctx.params);
  },

  /**
   * Count projet records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.projet.count(ctx.query);
  },

  /**
   * Create a/an projet record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.projet.add(ctx.request.body);
  },

  /**
   * Update a/an projet record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.projet.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an projet record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.projet.remove(ctx.params);
  }
};
