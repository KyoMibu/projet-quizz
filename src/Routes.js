import Home from './views/Home.vue'
import categories from './views/categories.vue'
import Difficulty from './views/difficulty.vue'
import Quizz from './views/Quizz.vue'
export default [
    { path: '/', component: Home },
    { path: '/categories', component: categories },
    { path: '/difficulty', component: Difficulty },
    { path: '/quizz/:difficulty', component: Quizz ,name:"quizz"}
]