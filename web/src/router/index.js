import { createRouter, createWebHistory } from 'vue-router'
import PkindexView from '../views/pk/PkindexView.vue'
import RecordindexView from '../views/record/RecordindexView.vue'
import RanklistindexView from '../views/ranklist/RanklistindexView.vue'
import UserBotindexView from '../views/users/bot/UserBotindexView.vue'
import NotFound from '../views/error/NotFound.vue'
import UserAccountLoginView from '../views/users/account/UserAccountLoginView.vue'
import UserAccountRegisterView from '../views/users/account/UserAccountRegisterView.vue'


const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/pk/"
  },
  {
    path: "/pk/",
    name: "pk_index",
    component: PkindexView
  },
  {
    path: "/record/",
    name: "record_index",
    component: RecordindexView
  },
  {
    path: "/ranklist/",
    name: "ranklist_index",
    component: RanklistindexView
  },
  {
    path: "/user/bot/",
    name: "user_bot_index",
    component: UserBotindexView
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: NotFound
  },

  {
    path: "/user/account/login/",
    name: "user_account_login",
    component: UserAccountLoginView
  },

  {
    path: "/user/account/register/",
    name: "user_account_register",
    component: UserAccountRegisterView
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
