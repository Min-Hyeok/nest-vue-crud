import { reactive, toRefs } from "vue";

export default function register() {
    const state = reactive({
        id: null,
        password: null,
        name: null,
        email: null
    });

    function regist(): void {
        console.log('test1234');
    }

    return {
        ...toRefs(state),
        regist
    };
}