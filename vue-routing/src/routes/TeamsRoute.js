import TeamMembers from '../components/teams/TeamMembers.vue';
import TeamsFooter from '../components/teams/TeamsFooter.vue';
import TeamsList from '../components/teams/TeamsList.vue';

const TeamsRoute = { 
    name: 'teams',
    path: '/teams',
    components: { 
        default: TeamsList,
        footer: TeamsFooter,
    },
    children: [
        {
            name: 'team-members',
            path: ':teamId',
            component: TeamMembers,
            props: true 
        },
    ]
}

export default TeamsRoute;