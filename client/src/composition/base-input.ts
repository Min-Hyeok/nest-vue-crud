import { reactive, toRefs } from 'vue';

export const baseInput = (): any => {
    const state = reactive({
        val: null
    });

    return {
        ...toRefs(state),
    };
}
