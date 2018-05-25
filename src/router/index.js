import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '../views/HelloWorld.vue'
import Player from '../views/player.vue'
import Moive from '../views/movice.vue'
import Nodebook from '../views/nodebook.vue'

Vue.use(Router)

export default new Router({
  routes: [
  	/*{
    	path:'/',
    	name: 'helloworld',
    	component: HelloWorld
    },*/
    {
      path: '/',
      name: 'player',
      component: Player
    },
    /*{
      path: '/',
      name: 'movice',
      component: Moive
    }*/
  ]
})
