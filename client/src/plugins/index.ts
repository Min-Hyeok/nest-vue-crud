import defineComponent from './defineComponents';

export default {
    install(Vue: any) {
        Vue.use(defineComponent);
    }
}