## can be optimized

First, I find that `TemplatePlaceholder` Component is not a HOC (High Ordered Component), which disappoints me a lot.

Then, I find following type declaration in the code of library of `dx-react-core`.

```js
/** A React component to which a related Template is rendered. */
export const TemplatePlaceholder: React.ComponentType<TemplatePlaceholderProps>;
export const PlaceholderWithRef: React.ComponentType<TemplatePlaceholderProps & {
  forwardedRef?: any;
}>;
```

With a little work/consult with ChatGPT3, I have learned that **maybe** I could use the `PlaceholderWithRef` like following code:

> It also disappoints me, as I initially think `PlaceholderWithRef` may could help me with the above problem.

```js
import React from 'react';
import { PlaceholderWithRef } from '@devexpress/dx-react-core';

const MyComponent = React.forwardRef((props, ref) => (
  <div ref={ref}>Hello, world!</div>
));

const WrappedComponent = () => (
  <PlaceholderWithRef>
    {(ref) => <MyComponent ref={ref} />}
  </PlaceholderWithRef>
);
```