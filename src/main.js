import Vue from 'vue'
import App from './App.vue'
import PreviewWindow from './PreviewWindow.vue'
import store from './store/store'

const main = new Vue({
    el     : '#app',
    data   : {
        store  : store,
        global : store.state,
        local  : {
            content : 'Main'
        }
    },
    mounted() {
        console.log('Main Mounted')
        this.$nextTick(function () {
            console.log('Main nextTick');
            // code that assumes this.$el is in-document
        })
    },
    render : h => h(App)
});

const preview = new Vue({
    //el     : '#preview',
    // el     : document.getElementById('previewframe').contentWindow.document.getElementById('preview'),
    data   : {
        store  : {},
        global : {},
        local  : {}
    },
    mounted() {
        console.log('Iframe Mounted')

        this.local = {
            content : 'Preview'
        };

        this.global = store.state;
        this.store  = store;

        this.$nextTick(function () {

            console.log('Iframe NextTick');

            //onload = load;

            // code that assumes this.$el is in-document
        })
    },
    render : h => h(PreviewWindow)
});

window.frames['previewframe'].window.onload = function () {
    // main.$mount('#app')

    console.log('Iframe Window OnLoad');

    //preview.$mount(document.getElementById('previewframe').contentWindow.document.getElementById('preview'))
    preview.$mount(window.frames['previewframe'].window.document.getElementById('preview'))

}



