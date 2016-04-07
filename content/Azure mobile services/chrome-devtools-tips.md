<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Goto Anything](#goto-anything)
- [Goto Line in file](#goto-line-in-file)
- [Go to the start or end of a line](#go-to-the-start-or-end-of-a-line)
- [Go to start or end of a file](#go-to-start-or-end-of-a-file)
- [Go one word left or right](#go-one-word-left-or-right)
- [Go up or down a line](#go-up-or-down-a-line)
- [Adding multiple Carets](#adding-multiple-carets)
- [Wrap with Quotes or Brackets](#wrap-with-quotes-or-brackets)
- [Column selection](#column-selection)
- [Carets and matching words](#carets-and-matching-words)
- [Jump to matching brackets](#jump-to-matching-brackets)
- [Indentation](#indentation)
- [Quickly comment your code](#quickly-comment-your-code)
- [Toggle Autocompletion](#toggle-autocompletion)
- [Cut/Copy/Paste/Undo/Redo](#cutcopypasteundoredo)
- [Increment and Decrement values](#increment-and-decrement-values)
- [Cycle through editing locations](#cycle-through-editing-locations)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


#### Goto Anything

You can bring up the Goto “Anything” search using `Ctrl/Cmd + P`. This lets you search/filter through files just by starting to type in the files name. To search for a method — such as a JavaScript method or a CSS selector, use `Ctrl/Cmd + Shift + P` and start typing in the method name.

#### Goto Line in file

`Ctrl + G` will toggle a dialog allowing you to jump to a specific line in a file. If you wish to go to a line in the current file, bring up the dialog and type in a colon followed by the line number you are interested in. For example, :25 will take you to line 25. If you wish to go to a line in a different file, type in the file name, a colon and then the line number (e.g app.js:25).

#### Go to the start or end of a line

Go to end of a line: `Alt` + `Right` or `Cmd` + `Right`
Go to the start of a line: `Alt` + `Left` or `Cmd` + `Left`

#### Go to start or end of a file

Go to the start of a file: `Alt` + `Up` or `Cmd` + `Up`
Go to the end of a file: `Alt` + `Down` or `Cmd` + `Down`

#### Go one word left or right

Go one word left: `Ctrl`+ `Left` or `Alt` + `Left`
Go one word right: `Ctrl` + `Right` or `Alt` + `Right`

#### Go up or down a line

Go up a line: `Up`
Go down a line: `Down`

#### Adding multiple Carets

You can start playing with carets by opening any supported file in Sources, then selecting each line by holding down `Cmd`/`AltGr` and clicking wherever you would like to add a new caret.

#### Wrap with Quotes or Brackets

Highlight the words with `Cmd` + `Shift` + `←` ( `Ctrl` + `Shift` + `←` for Windows/Linux) and type an opening quote or bracket. Dev tools will wrap each word in the selected quote or bracket.

#### Column selection

Carets can similarly be used for selecting custom columns of text. Hold down `Alt` and then click and drag over the region of text you would like to select. DevTools will highlight the area and you can now copy or edit it as needed.

#### Carets and matching words

Carets can also be used for highlighting specific words. Select a word in your editor (it can be a variable, method, or anything really). DevTools will highlight other instances of this word with a border around them.

Now use `Cmd` + `D` (or `Alt` + `D`) and DevTools will highlight and place multiple cursors on the matching words. This is particularly useful during batch rename operations. Hitting D a few more time while still holding ⌘ selects the next instance of the selection found. By hitting ⌘, then D three times, you can select three iterations of the text.

#### Jump to matching brackets

When working with non-complex pieces of code, you might find it tricky to find corresponding opening and closing brackets with your naked eye. `Ctrl` + `M` allows you to instantly move your cursor there. Using it twice will jump to its opening or closing counterpart.

#### Indentation

We know the importance of indentation. It helps keep our code readable and easy to understand. To increase or decrease the current line’s indent, use the shortcuts below:

Indent text: `Tab`
Unindent text: `Shift` + `Tab`

#### Quickly comment your code

If you need to comment/uncomment a piece of code:

Comment text: `Cmd`/`Ctrl` + `/`
Uncomment text: `Cmd`/`Ctrl` + `/` on the same section of text.

This works across all languages and works pretty well with lines or whole selections.

#### Toggle Autocompletion

When typing values in the DevTools Sources panel, you’re presented with autocompletions as you type. If however you dismiss these and would like to manually toggle autocompletion, you can do so with:

`Ctrl` + `Space`

#### Cut/Copy/Paste/Undo/Redo

You can cut, copy and paste text using the same shortcuts you’re used to in other editors:

Cut: `Cmd`/`Ctrl` + `X`
Copy: `Cmd`/`Ctrl` + `C`
Paste: `Cmd`/`Ctrl` + `V`
Undo: `Cmd`/`Ctrl` + `Z`
Soft undo: `Cmd`/`Ctrl` + `U`
Redo: `Cmd`/`Ctrl` + `Y`

#### Increment and Decrement values

Note: ⇞ and ⇟ are page up and page down. On an Apple keyboard, you can page up/down by holding fn + ↑/↓

In the Sources pane, you can select a numeric value and easily increment or decrement the value using your keyboard. Highlight the value and then:

Increment CSS unit by 1: `Option` + `↑`
Decrement CSS unit by 1: `Option` + `↓`
Increment CSS unit by 10: `Option` + `⇟`
Decrement CSS unit by 10: `Option` + `⇟`

The Styles pane also supports shortcuts for incrementing/decrementing values.

Increment value: ↑  
Decrement value: ↓  
Increment by 10: ⇞ or ⇧↑  
Decrement by 10: ⇟ or ⇧↓  
Increment by 100: ⇧⇞  
Decrement by 100: ⇧⇟  
Increment by 0.1: ⌥↑  
Decrement by 0.1: ⌥↓  

#### Cycle through editing locations

DevTools can now also preserve your position cursor history in Sources. This lets you cycle through your previous editing locations using Alt- and Alt+:
Full list of shortcuts is [here](https://developer.chrome.com/devtools/docs/shortcuts).
