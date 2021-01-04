const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Master Vue!',
            courseGoalB: 'Learn Vue!'
        }
    },
    methods: {
        outputGoal() {
            if (Math.random() < 0.5) {
                return this.courseGoalA
            } else {
                return this.courseGoalB
            }
        }
    }
});

app.mount('#user-goal');
