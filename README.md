
## Step

```bash
npm install

npm run build
```

You can view the generated js file in the `/dist` folder. Found that `tree-shaking` did not work.

I only import the `banana` function in `About.vue`, but `orange` was also packaged.

![](https://wpimg.wallstcn.com/7c99e5f5-ffa9-4145-b06b-5907a71e4bd7.jpg)


## Step2

Now find `router.js`, comment `About2`

```js
{
  path: '/about2',
  name: 'about2',
  component: () => import('./views/About2.vue'),
}
```

Execute `npm run build again

Found that `tree-shaking` has taken effect again.

![](https://wpimg.wallstcn.com/842c1f4a-d6f5-42dc-a89c-400c685dc168.jpg)

## Conclusion

Found that when a file is referenced by multiple pages, `tree-shaking` will not work. But at the same time you can find that the `tree-shaking` of `foo` and `bar` in `fruit.js` has been in effect.
