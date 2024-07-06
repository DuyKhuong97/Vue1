import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import en from './locale/en.json'
import vn from './locale/vn.json'

import App from './App.vue'
import './main.css'

const i18n = createI18n({
    locale: 'vn',
    messages:{
        en: en,
        vn: vn,
    }
})

createApp(App).use(i18n).mount('#app')
