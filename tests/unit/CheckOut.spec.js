import {shallowMount} from '@vue/test-utils'
import CheckOut from '@/components/CheckOut.vue'

//Globals
describe('CheckOut.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(CheckOut);
    })

it('CheckOut page should exist', () => {
    const checkingout = wrapper.findComponent(CheckOut;
    expect(checkingout.exists()).toBe(true);
})
