# Pure Vue 3 project

## Testing Treeshaking
Importing
- log.js: 
usedLog
**unusedLog1** 
**unusedLog2**. 
Using ONLY: used-log

- main.css: 
body,  
used-green-text
**unused-class-1**
Using ONLY: body, used-1-green-text

- App.vue `<styes>`:
used-blue-text
**unused-class-2**
Using ONLY: body, used-blue-text

After Treeshaking bundle **shall contain** 2 classes & 1 object with word: **used**
After Treeshaking bundle **shall not contain** any classes/objects with word: **unused**