## Data types

Demo URL (local): http://localhost:3003/manage/session/5oyz0ZEbBqhT36XwY10m

### Canvas
Canvases have the following forms
**Multiple Choice**
```
id
name: 
type: "MULTIPLE_CHOICE",
media: {
  answer: The URL of the correct answer,
  distractions: [ <url> ], a list of images of incorrect answers,
  prompt: The URL of the prompt image
},
```

**Two Bin**
```
id
name: 
type: "TWO_BIN",
media: {
  prompt1: The URL of the first prompt,
  prompt2: The URL of the second prompt,
  bin1: [ <url> ], a list of images for category 1,
  bin2: [ <url> ], a list of images for category 2
},
```