> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for Preact to be used with [eslint-config-xo](https://github.com/sindresorhus/eslint-config-xo)

Note: This is [eslint-config-xo-react](https://github.com/sindresorhus/eslint-config-xo-react) adapted for [Preact](https://preactjs.com/).

## Install

```
$ npm install --save-dev eslint-config-xo eslint-config-xo-preact
```


## Usage

Add some ESLint config to your package.json:

```json
{
	"name": "my-awesome-project",
	"eslintConfig": {
		"extends": ["xo", "xo-preact"]
	}
}
```

Or to .eslintrc:

```json
{
	"extends": ["xo", "xo-preact"]
}
```

You can also mix it with a [XO](https://github.com/sindresorhus/xo) sub-config:

```json
{
	"extends": ["xo/esnext", "xo-preact"]
}
```


## Tip

### Use with XO

```
$ npm install --save-dev eslint-config-xo-preact eslint-plugin-react
```

```json
{
	"name": "my-awesome-project",
	"xo": {
		"extends": "xo-preact"
	}
}
```


## Related

- [eslint-config-xo](https://github.com/sindresorhus/eslint-config-xo) - ESLint shareable config for XO
- [XO](https://github.com/sindresorhus/xo)
