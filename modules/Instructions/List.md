# Global
* open help for keyword
* save file as
* close current pane
* write edit buffer to file name
* write to file and quit
* quit without saving changes

# Editing
* replace a single character
* join line below to the current one with one space in between
* join line below to the current one without space in between
* reflow paragraph
* change (replace) entire line
* change (replace) to the end of the line
* change (replace) entire word
* change (replace) to the end of the word
* transpose two letters (delete and paste)
* undo
* redo
* repeat last command

# Cursor movement
* move cursor left
* move cursor down
* move cursor up
* move cursor right
* move to top of screen
* move to middle of screen
* move to bottom of screen
* jump forwards to the start of a word
* jump forwards to the start of a word (words can contain punctuation)
* jump forwards to the end of a word
* jump forwards to the end of a word (words can contain punctuation)
* jump backwards to the start of a word
* jump backwards to the start of a word (words can contain punctuation)
* move to matching character (default supported pairs: '()', '{}', '[]' - use :h matchpairs in vim for more info)
* jump to the start of the line
* jump to the first non-blank character of the line
* jump to the end of the line
* jump to the last non-blank character of the line
* go to the first line of the document
* go to the last line of the document
* go to line x
* jump to next occurrence of character x
* jump to before next occurrence of character x
* jump to previous occurence of character x
* jump to after previous occurence of character x
* jump to next paragraph (or function/block, when editing code)
* jump to previous paragraph (or function/block, when editing code)
* center cursor on screen
* move screen down one line (without moving cursor)
* move screen up one line (without moving cursor)
* move back one full screen
* move forward one full screen
* move forward 1/2 a screen
* move back 1/2 a screen

# Insert mode - inserting/appending text
* insert before the cursor
* insert at the beginning of the line
* insert (append) after the cursor
* insert (append) at the end of the line
* append (open) a new line below the current line
* append (open) a new line above the current line
* insert (append) at the end of the word
* exit insert mode

# Working with multiple files
* edit a file in a new buffer
* go to the next buffer
* go to the previous buffer
* delete a buffer (close a file)
* list all open buffers
* open a file in a new buffer and split window
* open a file in a new buffer and vertically split window
* split window
* switch windows
* quit a window
* split window vertically
* move cursor to the left window (vertical split)
* move cursor to the right window (vertical split)
* move cursor to the window below (horizontal split)
* move cursor to the window above (horizontal split)

# Tabs
* open a file in a new tab
* move the current split window into its own tab
* move to the next tab
* move to the previous tab
* move to tab number #
* move current tab to the #th position (indexed from 0)
* close the current tab and all its windows
* close all tabs except for the current one
* run the command on all tabs

# Marks
* list of marks
* set current position for mark A
* jump to position of mark A
* yank text to position of mark A

# Macros
* record macro a
* stop recording macro
* run macro a
* rerun last run macro

# Search in multiple files
* search for pattern in multiple files
* jump to the next match
* jump to the previous match
* open a window containing the list of matches

# Visual commands
* shift text right
* shift text left
* yank (copy) marked text
* delete marked text
* switch case

# Marking text (visual mode)
* start visual mode, mark lines, then do a command (like y-yank)
* start linewise visual mode
* move to other end of marked area
* start visual block mode
* move to other corner of block
* mark a word
* a block with ()
* a block with {}
* inner block with ()
* inner block with {}
* exit visual mode

# Search and replace
* search for pattern
* search backward for pattern
* 'very magic' pattern: non-alphanumeric characters are interpreted as special regex symbols (no escaping needed)
* repeat search in same direction
* repeat search in opposite direction
* searchAndReplace.commands .colonPercentForwardSlashOldForwardSlashNewForwardSlashg
* searchAndReplace.commands .colonPercentForwardSlashOldForwardSlashNewForwardSlashgc
* remove highlighting of search matches

# Exiting
* write (save) the file, but don't exit
* write out the current file using sudo
* write (save) and quit
* quit (fails if there are unsaved changes)
* quit and throw away unsaved changes
* write (save) and quit on all tabs

# Cut and paste
* yank (copy) a line
* yank (copy) 2 lines
* yank (copy) the characters of the word from the cursor position to the start of the next word
* yank (copy) to end of line
* put (paste) the clipboard after cursor
* put (paste*) before cursor
* delete (cut) a line
* delete (cut) 2 lines
* delete (cut) the characters of the word from the cursor position to the start of the next word
* delete (cut) to the end of the line
* delete (cut) to the end of the line
* delete (cut) character

# Deletion
* delete character and substitute text
* delete line and substitute text
* Delete n lines to general buffer
* Delete word to general buffer
* Delete n words
* Delete to end of sentence
* Delete previous word
* Delete to end of line
* Delete character

# Parameters
* Show invisible characters
* Don’t show invisible characters
* Show line numbers
* Don’t show line numbers
* Indent after carriage return
* Turn off autoindent
* Show matching sets of parentheses as they are typed
* Turn off showmatch
* Display mode on last line of screen
* Turn off showmode
* Show values of all possible parameters

# Recovering deletions
* Put general buffer after cursor
* Put general buffer before cursor
