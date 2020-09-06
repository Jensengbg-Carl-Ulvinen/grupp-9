import {shallowMount} from '@vue/test-utils'
import CheckOut from '@/components/CheckOut.vue'


//Kolla om CheckOut komponenten finns -Carl

it('CheckOut page should exist', () => {
    const wrapper = shallowMount(CheckOut)
    const checkingout = wrapper.findComponent(CheckOut);
    expect(checkingout.exists()).toBe(true);
})
