import { createRouter, createWebHistory } from 'vue-router';
import TeamsRoute from './routes/TeamsRoute.js';
import UsersRoute from './routes/UsersRoute.js';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' },
        TeamsRoute,
        UsersRoute
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        return {
            left: 0, 
            top: 0
        }
    }
});

router.beforeEach(function(to, from, next) {
    console.log('Global beforeEach');
    console.log(to, from);
    next();
})

export default router;