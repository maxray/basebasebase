const { DateTime } = require("luxon");
const markdownItAnchor = require("markdown-it-anchor");

const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginBundle = require("@11ty/eleventy-plugin-bundle");
const pluginNavigation = require("@11ty/eleventy-navigation");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

const pluginDrafts = require("./eleventy.config.drafts.js");
const pluginImages = require("./eleventy.config.images.js");

module.exports = function(eleventyConfig) {

	//Collections 

	// Returns a collection of meetings in reverse date order
	eleventyConfig.addCollection('blogs', collection => {
		const allBlogs = [...collection.getFilteredByGlob('./content/blog/*.md')].reverse();
		// Exclude the latest entry
		const blogsWithoutLatest = allBlogs.slice(1);

		return blogsWithoutLatest;
	});

	// Returns a collection of meetings in reverse date order
	eleventyConfig.addCollection('latestBlogs', collection => {
		const allBlogs = [...collection.getFilteredByGlob('./content/blog/*.md')].reverse();
		return allBlogs.slice(0, 3); // Select the first three elements (latest posts)
	});

	// Returns a collection of meetings in reverse date order
	eleventyConfig.addCollection('caseStudies', collection => {
		return [...collection.getFilteredByGlob('./content/case-studies/*.md')].reverse();
	});

	// Returns the latest meeting based on the 'date' frontmatter attribute
	eleventyConfig.addCollection('latestCaseStudy', collection => {
		// Sort the collection in descending order based on the 'date' attribute
		const sortedCaseStudy = [...collection.getFilteredByGlob('./content/case-studies/*.md')].sort((a, b) => {
			const dateA = new Date(a.data.date);
			const dateB = new Date(b.data.date);
			return dateB - dateA;
		});

		// Return only the first item (latest meeting)
		return sortedCaseStudy.slice(0, 1);
	});

	// Returns the latest blog
	eleventyConfig.addCollection('latestBlog', collection => {
		// Sort the collection in descending order based on the 'date' attribute
		const sortedBlog = [...collection.getFilteredByGlob('./content/blog/*.md')].sort((a, b) => {
			const dateA = new Date(a.data.date);
			const dateB = new Date(b.data.date);
			return dateB - dateA;
		});

		// Return only the first item (latest meeting)
		return sortedBlog.slice(0, 1);
	});



	// Copy the contents of the `public` folder to the output folder
	// For example, `./public/css/` ends up in `_site/css/`
	eleventyConfig.addPassthroughCopy({
		"./public/": "/",
		"./node_modules/prismjs/themes/prism-okaidia.css": "/css/prism-okaidia.css"
	});

	// Run Eleventy when these files change:
	// https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets

	// Watch content images for the image pipeline.
	eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpeg}");

	// App plugins
	eleventyConfig.addPlugin(pluginDrafts);
	eleventyConfig.addPlugin(pluginImages);

	// Official plugins
	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(pluginSyntaxHighlight, {
		preAttributes: { tabindex: 0 }
	});
	eleventyConfig.addPlugin(pluginNavigation);
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
	eleventyConfig.addPlugin(pluginBundle);

	// Filters
	eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
		// Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
		return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(format || "dd LLLL yyyy");
	});

	eleventyConfig.addFilter('htmlDateString', (dateObj) => {
		// dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
		return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
	});

	// extract year 
	eleventyConfig.addFilter('extractYear', function (date) {
		if (date instanceof Date) {
			return date.getFullYear();
		} else {
			// If the input is not a Date object, try parsing it as a string
			const parsedDate = new Date(date);
			if (!isNaN(parsedDate.getTime())) {
				return parsedDate.getFullYear();
			}
		}

		// Return an empty string if the date cannot be processed
		return '';
	});

	// day

	eleventyConfig.addFilter('dateDay', function (dateString) {
		const date = new Date(dateString);

		// Ensure the input is a valid date
		if (isNaN(date.getTime())) {
			return 'Invalid Date';
		}

		// Get the day as a number and the month as a three-letter abbreviation
		const day = date.getDate();


		return `${day}`;
	});

	// month

	eleventyConfig.addFilter('dateMonth', function (dateString) {
		const date = new Date(dateString);

		// Ensure the input is a valid date
		if (isNaN(date.getTime())) {
			return 'Invalid Date';
		}
		const month = date.toLocaleString('default', { month: 'short' });

		return `${month}`;
	});

	//union
	eleventyConfig.addFilter('union', function (array1, array2) {
		if (!Array.isArray(array1) || !Array.isArray(array2)) {
			console.error('Both arguments must be arrays.');
			return [];
		}
		// Use Set to ensure unique elements
		const uniqueSet = new Set([...array1, ...array2]);

		// Convert Set back to array
		return [...uniqueSet];
	});

	// Get the first `n` elements of a collection.
	eleventyConfig.addFilter("head", (array, n) => {
		if(!Array.isArray(array) || array.length === 0) {
			return [];
		}
		if( n < 0 ) {
			return array.slice(n);
		}

		return array.slice(0, n);
	});

	// Return the smallest number argument
	eleventyConfig.addFilter("min", (...numbers) => {
		return Math.min.apply(null, numbers);
	});

	// Return all the tags used in a collection
	eleventyConfig.addFilter("getAllTags", collection => {
		let tagSet = new Set();
		for(let item of collection) {
			(item.data.tags || []).forEach(tag => tagSet.add(tag));
		}
		return Array.from(tagSet);
	});

	eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
		return (tags || []).filter(tag => ["all", "nav", "post", "posts"].indexOf(tag) === -1);
	});

	// Customize Markdown library settings:
	eleventyConfig.amendLibrary("md", mdLib => {
		mdLib.use(markdownItAnchor, {
			permalink: markdownItAnchor.permalink.ariaHidden({
				placement: "after",
				class: "header-anchor",
				symbol: "#",
				ariaHidden: false,
			}),
			level: [1,2,3,4],
			slugify: eleventyConfig.getFilter("slugify")
		});
	});

	// Features to make your build faster (when you need them)

	// If your passthrough copy gets heavy and cumbersome, add this line
	// to emulate the file copy on the dev server. Learn more:
	// https://www.11ty.dev/docs/copy/#emulate-passthrough-copy-during-serve

	// eleventyConfig.setServerPassthroughCopyBehavior("passthrough");

	return {
		// Control which files Eleventy will process
		// e.g.: *.md, *.njk, *.html, *.liquid
		templateFormats: [
			"md",
			"njk",
			"html",
			"liquid",
			
		],

		// Pre-process *.md files with: (default: `liquid`)
		markdownTemplateEngine: "njk",

		// Pre-process *.html files with: (default: `liquid`)
		htmlTemplateEngine: "njk",

		// These are all optional:
		dir: {
			input: "content",          // default: "."
			includes: "../_includes",  // default: "_includes"
			data: "../_data",          // default: "_data"
			output: "_site"
		},

		// -----------------------------------------------------------------
		// Optional items:
		// -----------------------------------------------------------------

		// If your site deploys to a subdirectory, change `pathPrefix`.
		// Read more: https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix

		// When paired with the HTML <base> plugin https://www.11ty.dev/docs/plugins/html-base/
		// it will transform any absolute URLs in your HTML to include this
		// folder name and does **not** affect where things go in the output folder.
		pathPrefix: "/",
	};
};
