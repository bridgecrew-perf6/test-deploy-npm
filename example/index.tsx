import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const App = () => {
  const product = {
    id: '2',
    title: 'Coffee Mug - Card',
  };
  return (
    <ProductCard
      product={product}
      initialValues={{
        count: 4,
        maxCount: 21,
      }}
    >
      {({ reset, count, increasedBy, isMaxCountReached }) => (
        <>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </>
      )}
    </ProductCard>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
