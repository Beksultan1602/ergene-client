import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faInstagram, faFacebookF, faSquareFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

library.add(faInstagram, faFacebookF, faSquareFacebook, faUser, faYoutube)

createApp(App).component('fa-icon', FontAwesomeIcon).use(router).mount('#app')
