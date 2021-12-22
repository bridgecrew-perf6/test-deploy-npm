# eacz-product-card

test package for npm

### Esteban Andres Canteros

## Example

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'eacz-product-card'

```


```
 <ProductCard 
        key={product.id}
        product={product}
        initialValues={{
          count: 4,
          maxCount: 21
        }}
      >
        {
          ({reset, count, increasedBy, isMaxCountReached}) => (
            <>  
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )
        }
      
  </ProductCard>
```