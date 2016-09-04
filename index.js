'use strict';
module.exports = {
	extends: 'xo-react',
	settings: {
		react: {
			pragma: 'h'
		}
	},
	rules: {
		'react/no-unknown-property': [2, {ignore: ['class']}],
		'react/prop-types': 0
	}
};
