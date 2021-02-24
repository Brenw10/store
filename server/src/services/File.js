const fs = require('fs').promises;
const { v4: uuidv4 } = require('uuid');

const FOLDER = {
  IMAGE: 'public/images/',
};

async function saveImage(file) {
  const filepath = FOLDER.IMAGE + uuidv4() + '.png';
  await fs.mkdir(FOLDER.IMAGE, { recursive: true });
  await fs.writeFile(filepath, file.split(';base64,').pop(), { encoding: 'base64' });
  return filepath;
}

module.exports = {
  saveImage,
};