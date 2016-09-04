import test from 'ava';
import isPlainObj from 'is-plain-obj';
import tempWrite from 'temp-write';
import eslint from 'eslint';

const hasRule = (errors, ruleId) => errors.some(x => x.ruleId === ruleId);

function runEslint(str, conf) {
	const linter = new eslint.CLIEngine({
		useEslintrc: false,
		configFile: tempWrite.sync(JSON.stringify(conf))
	});

	return linter.executeOnText(str).results[0].messages;
}

test('pragma', t => {
	const conf = require('../index');

	t.true(isPlainObj(conf));
	t.true(isPlainObj(conf.rules));

	const errors = runEslint(`
		var app = <div className="foo">Unicorn</div>
	`, conf);
	t.true(hasRule(errors, 'react/react-in-jsx-scope'));

	const noError = runEslint(`
		import {h} from 'preact';
		var app = <div className="foo">Unicorn</div>;
	`, conf);
	t.false(hasRule(noError, 'react/react-in-jsx-scope'));
});

test('class prop', t => {
	const conf = require('../index');

	t.true(isPlainObj(conf));
	t.true(isPlainObj(conf.rules));

	const noErrors = runEslint(`
		var app = <div class="foo">Unicorn</div>;
	`, conf);
	t.false(hasRule(noErrors, 'react/no-unknown-property'));
});

test('prop types', t => {
	const conf = require('../index');

	t.true(isPlainObj(conf));
	t.true(isPlainObj(conf.rules));

	const noErrors = runEslint(`
		var app = function(props) {
			return <div>{props.foo}</div>;
		}
	`, conf);
	t.false(hasRule(noErrors, 'react/prop-types'));
});

