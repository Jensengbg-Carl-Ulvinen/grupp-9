import {shallowMount} from '@vue/test-utils'
import HomePage from '@/components/HomePage.vue'

//Kör json-server ./src/server/db.json i terminalen för att starta servern

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

it('ul should exist', () => {
    const list = wrapper.findAll('ul');
    
    expect(list.exists()).toBe(true);
})



})