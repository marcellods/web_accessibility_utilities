# Web Accessibility Utilities
Javascript functions to help QA for accessibility in the browser

## Instructions
1. Go to the page that you would like to QA
2. Select the contents of this file and copy it to the clipboard
3. Open the browser console
4. Paste the contents of this file on the command line and hit enter
5. Start typing "qa" in the command line and the function name will be prefilled.
   Most of these functions don't require parameters, like "qaLinkList()" (don't forget to hit enter in the end).
6. qaElementList requires a parameter (the name of an html tag).
   For example, "qaElementList('sup')" will return a list of \<sup\> tags in the DOM

## Functions
* qaAriaHiddenList();
* qaAriaLabelViolations();
* qaElementList('tag_placeholder');
* qaFormElementsList();
* qaHeadingsList();
* qaHeadingsListText();
* qaImageList();
* qaImageListWithAlt();
* qaLinkList();
* qaLinkListText();
