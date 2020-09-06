import {shallowMount} from '@vue/test-utils'
import CheckOut from '@/components/CheckOut.vue'


//Kolla om CheckOut komponenten finns -Carl

it('CheckOut page should exist', () => {
    const wrapper = shallowMount(CheckOut);
    const checkingout = wrapper.findComponent(CheckOut);
    expect(checkingout.exists()).toBe(true);
})

//Kolla om det finns en knapp för att komma tillbaka till homepagen -Carl

it('Should display a move backwards button', () => {
  const wrapper = shallowMount(CheckOut);
  const backWardsButton = wrapper.find('.previous');
  const expected = backWardsButton;
  expect(backWardsButton).toBe(expected);
})
