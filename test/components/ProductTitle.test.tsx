import React from 'react';
import renderer from 'react-test-renderer'
import ProductCard from '../../src/components/ProductCard';
import ProductTitle from '../../src/components/ProductTitle';
import { product1 } from './data/products';

describe('ProductTitle', () => {
  test('should render the component with the custom title', () => {
    const wrapper = renderer.create(<ProductTitle title="custom title" />)
    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  test('should render the component with the name of the product', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {
          () => (
            <ProductTitle />
          )
        }
      </ProductCard>
    )
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
  
})
