/**
 *  post controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::post.post",
  ({ strapi }) => ({
    async find(ctx) {
      // Calling the default core action
      const { data, meta } = await super.find(ctx);

      const query = strapi.db.query("api::post.post");

      await Promise.all(
        data.map(async (item, index) => {
          const post = await query.findOne({
            where: {
              id: item.id,
            },
            populate: ["createdBy", "updatedBy"],
          });

          data[index].attributes.createdBy = {
            id: post.createdBy.id,
            firstname: post.createdBy.firstname,
            lastname: post.createdBy.lastname,
          };
          data[index].attributes.updatedBy = {
            id: post.updatedBy.id,
            firstname: post.updatedBy.firstname,
            lastname: post.updatedBy.lastname,
          };
        })
      );

      return { data, meta };
    },
  })
);
