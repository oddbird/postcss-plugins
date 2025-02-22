# Installing PostCSS image-set() Function

[PostCSS image-set() Function] runs in all Node environments, with special instructions for:

| [Node](#node) | [PostCSS CLI](#postcss-cli) | [Webpack](#webpack) | [Create React App](#create-react-app) | [Gulp](#gulp) | [Grunt](#grunt) |
| --- | --- | --- | --- | --- | --- |

## Node

Add [PostCSS image-set() Function] to your project:

```bash
npm install postcss postcss-image-set-function --save-dev
```

Use it as a [PostCSS] plugin:

```js
const postcss = require('postcss');
const postcssImageSetFunction = require('postcss-image-set-function');

postcss([
	postcssImageSetFunction(/* pluginOptions */)
]).process(YOUR_CSS /*, processOptions */);
```

## PostCSS CLI

Add [PostCSS CLI] to your project:

```bash
npm install postcss-cli postcss-image-set-function --save-dev
```

Use [PostCSS image-set() Function] in your `postcss.config.js` configuration file:

```js
const postcssImageSetFunction = require('postcss-image-set-function');

module.exports = {
	plugins: [
		postcssImageSetFunction(/* pluginOptions */)
	]
}
```

## Webpack

_Webpack version 5_

Add [PostCSS Loader] to your project:

```bash
npm install postcss-loader postcss-image-set-function --save-dev
```

Use [PostCSS image-set() Function] in your Webpack configuration:

```js
module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: { importLoaders: 1 },
					},
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [
									[
										"postcss-image-set-function",
										{
											// Options
										},
									],
								],
							},
						},
					},
				],
			},
		],
	},
};
```

## Create React App

Add [React App Rewired] and [React App Rewire PostCSS] to your project:

```bash
npm install react-app-rewired react-app-rewire-postcss postcss-image-set-function --save-dev
```

Use [React App Rewire PostCSS] and [PostCSS image-set() Function] in your
`config-overrides.js` file:

```js
const reactAppRewirePostcss = require('react-app-rewire-postcss');
const postcssImageSetFunction = require('postcss-image-set-function');

module.exports = config => reactAppRewirePostcss(config, {
	plugins: () => [
		postcssImageSetFunction(/* pluginOptions */)
	]
});
```

## Gulp

Add [Gulp PostCSS] to your project:

```bash
npm install gulp-postcss postcss-image-set-function --save-dev
```

Use [PostCSS image-set() Function] in your Gulpfile:

```js
const postcss = require('gulp-postcss');
const postcssImageSetFunction = require('postcss-image-set-function');

gulp.task('css', function () {
	var plugins = [
		postcssImageSetFunction(/* pluginOptions */)
	];

	return gulp.src('./src/*.css')
		.pipe(postcss(plugins))
		.pipe(gulp.dest('.'));
});
```

## Grunt

Add [Grunt PostCSS] to your project:

```bash
npm install grunt-postcss postcss-image-set-function --save-dev
```

Use [PostCSS image-set() Function] in your Gruntfile:

```js
const postcssImageSetFunction = require('postcss-image-set-function');

grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
	postcss: {
		options: {
			processors: [
			postcssImageSetFunction(/* pluginOptions */)
			]
		},
		dist: {
			src: '*.css'
		}
	}
});
```

[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
[PostCSS]: https://github.com/postcss/postcss
[PostCSS CLI]: https://github.com/postcss/postcss-cli
[PostCSS Loader]: https://github.com/postcss/postcss-loader
[PostCSS image-set() Function]: https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-image-set-function
[React App Rewire PostCSS]: https://github.com/csstools/react-app-rewire-postcss
[React App Rewired]: https://github.com/timarney/react-app-rewired
