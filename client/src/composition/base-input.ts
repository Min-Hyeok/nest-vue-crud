import { reactive, ref, SetupContext, toRefs, watch } from 'vue';
import { BaseInput } from '@/interface/base-input';

export const baseInput = (props: BaseInput, context: SetupContext) => {
    const state = reactive({
    });

    const val = ref(null);

    const changeInput = (): void => {
        context.emit('input', val.value);
    }

    const activeInputDesc = (e: Event): void => {
        console.log(e);
    }

    watch(val, () => changeInput());

    return {
        ...toRefs(state),
        val,
        changeInput,
        activeInputDesc
    };
}
