import {
  shallowMount
} from '@vue/test-utils'
import CheckOut from '@/components/CheckOut.vue'

//Funktionstests
describe('Functional tests for CheckOut.vue', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(CheckOut);
  })

  it('CheckOut page should exist', () => {
    const checkingout = wrapper.findComponent(CheckOut);
    expect(checkingout.exists()).toBe(true);
  })

  it('Should display a move backwards button', () => {
    const backWardsButton = wrapper.find('.previous');
    const expected = backWardsButton;
    expect(backWardsButton).toBe(expected);
  })

  it('Should check if there is a button to add an additional product', () => {
    const addProductButton = wrapper.find(addProd());
    const expected = addProductButton;
    expect(addProductButton).toBe(expected);
  })

  it('Should check if there is a button to remove a product', () => {
    const delProductButton = wrapper.find(delProd());
    const expected = delProductButton;
    expect(delProductButton).toBe(expected);
  })
})

//UX/UI tests
describe('UX/UI tests for CheckOut.vue', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(CheckOut);
  })

  it('should display the button to remove multiple items from the basket', () => {
    const remBtn = wrapper.find('#remBtn')
    expect(remBtn.element.id).toBe('remBtn')
  })

  it('should display the price of product', () => {
    const price = wrapper.find('#total_price')
    expect(price.element.id).toBe('price')
  })

  it('should display information about delivery', () => {
    const delInfo = wrapper.find('#delInfo')
    expect(delInfo.element.id).toBe('delInfo')
  })
})
