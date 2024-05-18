### aboud-coding

### Features

- **Search image and download**: search from pinterest.
- **Google Gemini**: Your intelligent companion in the world of information.

## Installation

```bash
npm install aboud-coding
```

## Usage
```bash
const { pinterest } = require("aboud-coding");

pinterest('supra').then(images => {
    console.log(images);
}).catch(error => {
    console.error(error);
});
```

```bash
const { gemini } = require('aboud-coding');

const prompt = 'What is this car ?';
const imageUrl = 'https://i.pinimg.com/736x/76/7e/f4/767ef4b203a1e678d5fb4920c1aea3a2.jpg';

gemini(prompt, imageUrl)
.then(result => {
  console.log(result);
})
.catch(error => {
  console.error('Error:', error);
});
```