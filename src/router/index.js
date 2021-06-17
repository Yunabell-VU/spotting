import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home'
import My from '../views/my/My'
import Mall from '../views/mall/Mall'
import Rec from '../views/records/Rec'
import Report from '../views/report/Report'

const routes = [
  {
    path: '/',
    name: 'HOME',
    component: Home
  }, {
    path: '/reports/samplefull',
    name: 'ReportSampleFull',
    component: () => import('../views/home/reportsample/SampleFull.vue')
  }, {
    path: '/my',
    name: 'MY',
    component: My
  }, {
    path: '/mall',
    name: 'MALL',
    component: Mall
  }, {
    path: '/rec',
    name: 'REC',
    component: Rec
  }, {
    path: '/report',
    name: 'REPORT',
    component: Report
  }, {
    path: '/report/full',
    name: 'ReportFull',
    component: () => import('../views/fullreport/FullReport.vue')
  }, {
    path: '/report/voicel',
    name: 'ReportVoice',
    component: () => import('../views/voicereport/VoiceReport.vue')
  }, {
    path: '/my/wallet',
    name: 'Wallet',
    component: () => import('../views/wallet/Wallet.vue')
  }, {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/my/contact/Contact')
  }, {
    path: '/about',
    name: 'AboutUs',
    component: () => import('../views/my/about/AboutUs')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
