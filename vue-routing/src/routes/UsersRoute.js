import UsersList from '../components/users/UsersList.vue';
import UsersFooter from '../components/users/UsersFooter.vue';

const UsersRoute = { 
    path: '/users', 
    meta: { 
        needsAuth: true 
    },
    components: { 
        default: UsersList,
        footer: UsersFooter,
    },
    beforeEnter(to, from, next) {
        console.log("users beforeEnter")
        console.log(to, from);
        next();
    }
}

export default UsersRoute;