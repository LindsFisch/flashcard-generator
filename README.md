# flashcard-generator

### Overview

create the backend for a basic flashcard application.

The backend will essentially constitute an API that allows users to create two types of flashcards.

1. **Basic** flashcards, which have a front (_"Who was the first president of the United States?"_), and a back (_"George Washington"_).

2. **Cloze-Deleted** flashcards, which present _partial_ text (_"... was the first president of the United States."_), and the full text when the user requests it (_"George Washington was the first president of the United States."_)

### Specifications

* Create a new file named `BasicCard.js`:

  * This file should define a Node module that exports a constructor for creating basic flashcards, e.g.:
    `module.exports = BasicCard;`

  * The constructor should accept two arguments: `front` and `back`.

  * The constructed object should have a `front` property that contains the text on the front of the card.

  * The constructed object should have a `back` property that contains the text on the back of the card.

* Create a new file named `ClozeCard.js`:

  * This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.:
    `module.exports = ClozeCard;`

  * The constructor should accept two arguments: `text` and `cloze`.

  * The constructed object should have a `cloze` property that contains _only_ the cloze-deleted portion of the text.

  * The constructed object should have a `partial` property that contains _only_ the partial text.

  * The constructed object should have a `fullText` property that contains _only_ the full text.

  * The constructor should throw or log an error when the cloze deletion does _not_ appear in the input text.

  * Use prototypes to attach these methods, wherever possible.
  
### Technologies Utilized
node js 
