# changelog-preset

## desc

changelog preset for ymc


## how to use for production?
### install

```sh
#npm install conventional-changelog-yemiancheng --save-dev
npm install https://github.com/YMC-GitHub/js-lib-changelog-preset.git --save-dev
```

### usage

```js
const conventionalChangelog = require('conventional-changelog');
const newData = conventionalChangelog({ preset: 'yemiancheng', releaseCount: 1 });
```

## how to use for developer?

### install

```sh
#get the code
git clone https://github.com/ymc-github/js-lib-changelog-preset.git
#get his dep
npm install
```

### usage

```sh
#dev
npm run dev

#build
npm run build

#release
npm run release

#lint
npm run lint
npm run lint:no-fix

#format
npm run beautify

#test
npm run test
npm run test:unit
npm run test:coverage
```


## Author

yemiancheng <ymc.github@gmail.com>

## License

MIT
