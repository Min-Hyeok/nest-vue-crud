import { computed } from 'vue';
import { BaseButton } from '@/interface/base-button';

export const baseButton = (props: BaseButton) => {
    const buttonTextColor = computed(() => `${props.textColor}--text`);

    return {
        buttonTextColor
    };
}
