import React from 'react';
import renderer from 'react-test-renderer'
import ProductCard from '../../src/components/ProductCard'
import ProductImage from '../../src/components/ProductImage'
import { product2 } from './data/products';

describe('ProductImage', () => {
  test('should match snapshot with custom img', () => {
    const wrapper = renderer.create(<ProductImage img='./coffee-img.png' />)
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
  
  test('should match snapshot', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2} >
        {() => (
          <ProductImage/>
        )}
      </ProductCard>
    )
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
  
})
