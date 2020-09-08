import {
  shallowMount
} from '@vue/test-utils'
import CheckOut from '@/components/CheckOut.vue'
import data from '../../src/server/db.json'

//Funktionstests
describe('Functional tests for CheckOut.vue', () => {

  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(CheckOut)
  })

  it('CheckOut page should exist', () => {
    const checkingout = wrapper.findComponent(CheckOut)
    expect(checkingout.exists()).toBe(true)
  })

})

//UX/UI tests
describe('UX/UI tests for CheckOut.vue', () => {

  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(CheckOut)
  })

  it('should display a button to order', () => {
    const orderBtn = wrapper.find('.button_checkout')
    expect(orderBtn.element).toBe('button_checkout')
  })

  it('Should display a move backwards button', () => {
    const backWardsButton = wrapper.find('.previous')
    expect(backWardsButton.element).toBe('previous')
  })

  it('should display the price of product', () => {
    const price = wrapper.find('.total_price')
    expect(price.element).toBe('total_price')
  })

  it('should display information about delivery', () => {
    const delInfo = wrapper.find('.delInfo')
    expect(delInfo.element).toBe('delInfo')
  })

  it('should display the titles of the products that are added', () => {
    const titleProd = wrapper.find('.title_product')
    expect(titleProd.element).toBe('title_product')
  })

  it('Should check if there is a button to add an additional product', () => {
    const addProductButton = wrapper.find('.arrow_up')
    expect(addProductButton.element).toBe('arrow_up')
  })

  it('Should check if there is a button to remove a product', () => {
    const delProductButton = wrapper.find('.arrow_down')
    expect(delProductButton.element).toBe('arrow_down')
  })
})
