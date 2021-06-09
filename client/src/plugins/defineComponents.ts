import BaseHeader from '../components/BaseHeader.vue';
import BaseButton from '../components/BaseButton.vue';
import BaseInput from '../components/BaseInput.vue';

export default {
    /* eslint-disable */
    install(Vue: any) {
        Vue.component(BaseHeader.name, BaseHeader);
        Vue.component(BaseButton.name, BaseButton);
        Vue.component(BaseInput.name, BaseInput);
    }
}