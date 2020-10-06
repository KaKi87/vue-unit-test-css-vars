import { mount } from '@vue/test-utils';
import someComponent from './someComponent';

describe('someComponent', () => {
    const wrapper = mount(someComponent);
    it('is red', () => expect(wrapper.element.style.color).toBe('var(--color-red)'));
});
