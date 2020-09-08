import {mount, shallowMount} from '@vue/test-utils'
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

it('should display footer content when rendered', () => {
    const expected = 'Contact copyright';

    const text = wrapper.find('.footer').text();

    expect(expected).toBe(text);
})

it('ul should exist', () => {
    const list = wrapper.findAll('ul');
    
    expect(list.exists()).toBe(true);
})

it('cart image should exist when rendered', () => {
    const expected = wrapper.find('.cart');
    expect(expected.exists()).toBe(true);
})

it('should display 0 on homepage when rendered', () => {
    const expectedValue = 0;

    const element = wrapper.find('.counter');
    const actualValue = Number(element.text());

    expect(actualValue).toBe(expectedValue);
})


describe('Functional tests for HomePage', () => {
    let wrapper;
    const $route = {params: {productId: 1}}
    const $router = { push: jest.fn()}
    beforeEach(() => {
        wrapper = shallowMount(HomePage, {mocks: {$router}});
    })
    //vet inte hur man testar
    it('should show more info about product', async () => {
        const button = wrapper.find('.iphone');
        $route = wrapper.vm.clickCart(productId);
        await button.trigger('click');
        expect($router).toHaveBeenCalledWith('/product-cart/:productId');
    })
})


/*it('emit event', async () => {
    wrapper = mount(HomePage);

    await wrapper.vm.emitEvent()
    console.log(wrapper.emitted())
})*/


})