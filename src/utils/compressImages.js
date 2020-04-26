/**
 * Optimiza las imágenes que se encuentran en images.js.
 * @type {module:fs}
 */
const fs = require('fs');
const path = require('path');

const sharp = require('sharp');
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');


const images = require('./images');

const paths = {
    'originals': path.join('src', 'assets', 'img', 'originals'),
    'compressed': path.join('src', 'assets', 'img', 'compressed')
};

console.log('Cleaning previous compressed files...');
fs.rmdirSync(paths['compressed'], {recursive: true});

Promise.all(images.map(({relativePath, resizeRatio = 1, format = 'jpeg'}) => {
    const inputPath = path.join(paths['originals'], relativePath);
    const outputPath = path.join(paths['compressed'], relativePath.replace(/\.[^/.]+$/, `.${format}`));

    return sharp(inputPath)
        .metadata()
        .then(({width}) =>
            // Resize.
            sharp(inputPath)
                .resize(Math.round(width * resizeRatio))
                [format]()
                .toBuffer({resolveWithObject: true})
        )
        .then(({data}) =>
            // Optimize.
            imagemin.buffer(data, {
                plugins: [
                    imageminMozjpeg()
                ]
            })
        )
        .then(outBuffer => {
            // Output file.
            const outputDir = path.dirname(outputPath);
            fs.mkdirSync(outputDir, {recursive: true});
            fs.writeFileSync(outputPath, outBuffer);
            console.log(`Image ${relativePath} processed.`);
        })
        .catch(error => console.error(`Couldn't process image ${relativePath}.`, error));

})).then(() => console.log('Done!'));
