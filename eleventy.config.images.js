const path = require("path");


const Image = require('@11ty/eleventy-img');

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('src/images');

	eleventyConfig.addNunjucksAsyncShortcode('image', async function (src, alt, sizes) {
		const inputPath = `public/img/${src}`;  // Adjust the path to match your folder structure
		let metadata = await Image(inputPath, {
			widths: [300, 600, 900],
			formats: ['jpeg', 'png', 'webp'],
			outputDir: '_site/img', // Specify the output folder here
			inputDir: 'public/img',   // Specify the central input folder here
		});

		let imageAttributes = {
			alt,
			sizes,
			loading: 'lazy',
			decoding: 'async',
		};

		return Image.generateHTML(metadata, imageAttributes);
	});
};


// module.exports = eleventyConfig => {

// 	function relativeToInputPath(inputPath, relativeFilePath) {
// 		let split = inputPath.split("/");
// 		split.pop();

// 		return path.resolve(split.join(path.sep), relativeFilePath);
// 	}

// 	// Eleventy Image shortcode
// 	// https://www.11ty.dev/docs/plugins/image/
// 	eleventyConfig.addAsyncShortcode("image", async function imageShortcode(src, alt, widths, sizes) {
// 		// Full list of formats here: https://www.11ty.dev/docs/plugins/image/#output-formats
// 		// Warning: Avif can be resource-intensive so take care!
// 		let formats = ["avif", "webp", "auto"];
// 		let file = relativeToInputPath(this.page.inputPath, src);
// 		let metadata = await eleventyImage(file, {
// 			widths: widths || ["auto"],
// 			formats,
// 			outputDir: path.join(eleventyConfig.dir.output, "img"), // Advanced usage note: `eleventyConfig.dir` works here because we’re using addPlugin.
// 		});

// 		// TODO loading=eager and fetchpriority=high
// 		let imageAttributes = {
// 			alt,
// 			sizes,
// 			loading: "lazy",
// 			decoding: "async",
// 		};
// 		return eleventyImage.generateHTML(metadata, imageAttributes);
// 	});
// };
