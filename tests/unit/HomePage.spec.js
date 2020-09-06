import {shallowMount} from '@vue/test-utils'
import HomePage from '@/components/HomePage.vue'


//Globals
describe('HomePage.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(HomePage);
    })


it('should display nav-bar when rendered', () => {
    const expected = 'Webshop för iphone skal';

    const text = wrapper.find('.heading').text();

    expect(text).toBe(expected);
    })
})

//Kolla om Shoppingcart knappen kommer upp -Carl

it('should display a shoppingcart button in nav', () => {
  const wrapper = shallowMount(HomePage);
  const shoppingCartButton = wrapper.find('.button_checkout');
  const expected = shoppingCartButton;
  expect(shoppingCartButton).toBe(expected);
})
