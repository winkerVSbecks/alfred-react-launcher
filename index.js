const alfy = require('alfy');
const toc = require('./toc');

const rn_website = 'https://facebook.github.io/react-native/docs/';
const r_website = 'https://facebook.github.io/react/docs/';

const output = alfy
  .inputMatches(toc.options, 'title')
  .map(getOutput);

alfy.output(output);

function getOutput(item) {
	const url = getUrl(item.type, item.url);

  return {
    title: item.title,
		autocomplete: item.title,
    arg: url,
    subtitle: url,
  };
}

function getUrl(type, url) {
	if (type === toc.LINK) {
		return url;
	}

	const site = type === toc.REACT ? r_website : rn_website;

	if (!url.includes('.html')) {
		return `${ site }${ url }.html`;
	}

	return `${ site }${ url }`;
}
