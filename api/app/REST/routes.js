'use strict';
import postEndpoint from './post.endpoint';
import categoryEndpoint from "./category.endpoint";

const routes = (router, config) => {
  postEndpoint (router);
  // categoryEndpoint(router);
};
export default routes;
