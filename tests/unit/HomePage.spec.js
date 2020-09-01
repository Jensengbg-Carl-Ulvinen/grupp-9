import {shallowMount} from '@vue/test-utils'
import HomePage from '@/components/HomePage.vue'


//Globals
describe('HomePage.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(HomePage);
    })

it('home-page should exist', () => {
    const home = wrapper.findComponent(HomePage);
    expect(home.exists()).toBe(true);
})

it('should display nav-bar when rendered', () => {
    const expected = 'Webshop för iphone skal';

    const text = wrapper.find('.heading').text();

    expect(text).toBe(expected);
    })

it('li-items should exist', () => {
    const array = wrapper.findAll('ul');
    
    expect(array.exists()).toBe(true);
})



})