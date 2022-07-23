import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

	/*** Start of Reset CSS rules  ***/

	/* http://meyerweb.com/eric/tools/css/reset/ 
	v2.0 | 20110126
	License: none (public domain)
	*/

	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	* {
		box-sizing: border-box;
	}
	/*** End of Reset CSS rules ***/

	
	/*** Start of Styling global components ***/
	:root {
    font-size: ${({ theme }) => theme.typography.fontSize.root};
	}

	body {
		font-family: ${({ theme }) => theme.typography.mainFont};
		font-size: ${({ theme }) => theme.typography.fontSize.body};
		line-height: ${({ theme }) => theme.typography.lineHeight};
		font-weight: ${({ theme }) => theme.typography.regularWeight};
		color: ${({ theme }) => theme.colors.secondaryLightNeon};
		-webkit-font-smoothing: antialiased;
	}

	h1 {
		font-size: ${({ theme }) => theme.typography.fontSize.h1};
		font-weight: ${({ theme }) => theme.typography.boldWeight};
	}

	h2 {
		font-size: ${({ theme }) => theme.typography.fontSize.h2};
		font-weight: ${({ theme }) => theme.typography.boldWeight};
	}

	h3 {
		font-size: ${({ theme }) => theme.typography.fontSize.h3};
		font-weight: ${({ theme }) => theme.typography.boldWeight};
	}

	h4 {
		font-size: ${({ theme }) => theme.typography.fontSize.h4};
		font-weight: ${({ theme }) => theme.typography.boldWeight};
	}

	h5 {
		font-size: ${({ theme }) => theme.typography.fontSize.h5};
		font-weight: ${({ theme }) => theme.typography.boldWeight};
	}

	h6 {
		font-size: ${({ theme }) => theme.typography.fontSize.h6};
		font-weight: ${({ theme }) => theme.typography.boldWeight};
	}


	p {
		font-size: ${({ theme }) => theme.typography.fontSize.paragraph};
	}

	a{
		font-size: ${({ theme }) => theme.typography.fontSize.anchor};
		font-weight: ${({ theme }) => theme.typography.boldWeight};
		text-decoration: none;
		color: ${({ theme }) => theme.colors.complementary};
	}

	em{
		font-size: ${({ theme }) => theme.typography.fontSize.emphasis};
		font-style: italic;
	}

	strong {
		font-size: ${({ theme }) => theme.typography.fontSize.strong};
		font-weight: ${({ theme }) => theme.typography.boldWeight};
	}

	small {
		font-size: ${({ theme }) => theme.typography.fontSize.small};
	}

	u {
		font-size: ${({ theme }) => theme.typography.fontSize.underline};
		text-decoration: underline;
	}

	blockquote {
		font-size: ${({ theme }) => theme.typography.fontSize.blockquote};
		display: block;
		padding-left: 1rem;
		border-left: 0.5rem solid ${({ theme }) => theme.colors.complementary};
	}

	ul li {
		font-size: ${({ theme }) => theme.typography.fontSize.unorderedListItem};
		list-style: disc inside;
	}

	ol li {
		font-size: ${({ theme }) => theme.typography.fontSize.orderedListItem};
		list-style: decimal inside;
	}

	/*** End of Styling global components ***/
`