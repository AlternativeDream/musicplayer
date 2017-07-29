import Vue from 'vue'
import Router from 'vue-router'
import content from '@/components/content/content'
import recommend from '@/components/content/contentoptions/recommend'
import songsheet from '@/components/content/contentoptions/songsheet'
import fm from '@/components/content/contentoptions/fm'
import rankinglist from '@/components/content/contentoptions/rankinglist'
import mymusic from '@/components/mymusic/mymusic'
import friends from '@/components/friends/friends'
import accound from '@/components/accound/accound'
import musicplayer from '@/components/musicplayer/musicplayer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/content',
    },
    {
      path: '/content',
      name: 'content',
      redirect: '/content/recommend',
      component: content,
      children: [
        {
          path: 'recommend',
          name: 'recommend',
          component: recommend
        },
        {
          path: 'songsheet',
          name: 'songsheet',
          component: songsheet
        },
        {
          path: 'fm',
          name: 'fm',
          component: fm
        },
        {
          path: 'rankinglist',
          name: 'rankinglist',
          component: rankinglist
        }
      ]
    },
    {
      path: '/mymusic',
      name: 'mymusic',
      component: mymusic
    },
    {
      path: '/friends',
      name: 'friends',
      component: friends
    },
    {
      path: '/accound',
      name: 'accound',
      component: accound
    },
    {
      path: '/musicplayer',
      name: 'musicplayer',
      component: musicplayer
    }
  ]
})
