'use strict';
import business from '../business/business.container';
import applicationException from '../service/applicationException';

const postId = (router) => {
    router.get('/api/posts', async (request, response, next) => {
        try {
            let result = await
                business(request).getCategoryManager().query();
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });
};
export default postId;
