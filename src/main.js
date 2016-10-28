import Vue from 'vue'
import App from './App.vue'
import PreviewWindow from './PreviewWindow.vue'
import store from './store/store'

new Vue({
    el     : '#app',
    data   : {
        store  : store,
        global : store.state,
        local  : {
            content : 'Main'
        }
    },
    render : h => h(App)
});

new Vue({
    //el     : '#preview',
    el     : document.getElementById('preview-frame').contentWindow.document.getElementById('preview'),
    //store,
    data   : {
        store  : store,
        global : store.state,
        local  : {
            content : 'Preview'
        }
    },
    render : h => h(PreviewWindow)
});
