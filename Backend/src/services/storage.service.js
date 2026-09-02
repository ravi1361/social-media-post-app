const ImageKit = require('imagekit');

const imageKit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.URL_ENDPOINT
});

async function uploadFile(buffer, originalName = "image.jpg") {
  const result = await imageKit.upload({
    file: buffer,
    fileName: originalName
  });
  return result;
}

module.exports = uploadFile;
