### aboud-coding

### Features

- **Search image and download**: search from pinterest.

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
