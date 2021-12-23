import React from 'react';
import renderer from 'react-test-renderer'
import ProductCard from '../../src/components/ProductCard'
import { product1 } from './data/products';

const { act } = renderer

describe('ProductCard', () => {
  test('should match the snapshot', () => {
      const wrapper = renderer.create(
        <ProductCard product={product1}>
          {
            () => (
              <h1>Product Card</h1>
            )
          }
        </ProductCard>
      )
      expect(wrapper.toJSON()).toMatchSnapshot()
  })

  test('should increase the counter', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {
          ({count, increasedBy}) => (
            <>
              <h1>Product Card</h1>
              <span>{count}</span>
              <button onClick={() => increasedBy(1)} > +1</button>
            </>
          )
        }
      </ProductCard>
    )
    let tree: any = wrapper.toJSON()
    
    expect(tree).toMatchSnapshot();
    act(() => {
      tree.children[2].props.onClick();
    })
    tree = wrapper.toJSON();
    expect(tree.children[1].children[0]).toBe('1');
  })
  
  
})
