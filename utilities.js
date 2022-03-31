/*
# Accessibility QA Utilities  =====
by MarcelloDamasceno@gmail.com


## Instructions ===================
1. Go to the page that you would like to QA
2. Select the contents of this file and copy it to the clipboard
3. Open the browser console
4. Paste the contents of this file on the command line and hit enter
5. Start typing "qa" in the command line and the function name will be prefilled.
   Most of these functions don't require parameters, like "qaLinkList()" (don't forget to hit enter in the end).
6. qaElementList requires a parameter (the name of an html tag).
   For example, "qaElementList('sup')" will return a list of <sup> tags in the DOM

## Functions List =================
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
*/

function qaAriaHiddenList(){
    var array = document.querySelectorAll("[aria-hidden]:not(.icon, .icon-container, [data-component=Icon])");
    var arrayLength = array.length;
    console.log("##### Elements with aria-hidden (excluding icons): " + arrayLength + " #####");
    for (i in array) {
        console.log ( array[i] );
    }
}

function qaAriaLabelViolations(){
    var array = document.querySelectorAll("span[aria-label], div[aria-label]:not([role]), [role=heading][aria-label], h1[aria-label], h2[aria-label], h3[aria-label], h4[aria-label], h5[aria-label]");
    var arrayLength = array.length;
    console.log("##### Unsuported elements using aria-label: " + arrayLength + " #####");
    for (i in array) {
        console.log ( array[i] );
    }
}

function qaElementList(el) {
    var array = document.getElementsByTagName(el);
    var arrayLength = array.length;
    console.log('There are ' + arrayLength + ' ' + el + ' elements in this document');
    for (i in array) {
        console.log ( array[i] );
    }
}

function qaFormElementsList() {
    var array = document.querySelectorAll("input, button, [role=button]");
    var arrayLength = array.length;
    console.log("################## Form elements in this page: " + arrayLength + " ####################");
    for (i in array) {
        console.log ( array[i] );
    }
}

function qaHeadingsList() {
    var array = document.querySelectorAll("h1,h2,h3,h4,h5,h6, [role=heading]");
    var arrayLength = array.length;
    console.log("##### Headings in this page: " + arrayLength + " ######");
    for (i in array) {
        console.log (array[i]);
    }
}

function qaHeadingsListText() {
    var array = document.querySelectorAll("h1,h2,h3,h4,h5,h6, [role=heading]");
    var arrayLength = array.length;
    console.log("###### Headings in this page: " + arrayLength + " ######");
    for (i in array) {
        console.log (array[i].tagName, array[i].textContent);
    }
}

function qaImageList() {
    var array = document.querySelectorAll("img");
    var arrayLength = array.length;
    console.log("###### Images in this page: " + arrayLength + " ######");
    for (i in array) {
        console.log ( array[i]);
    }
}

function qaImageListWithAlt() {
    var array = document.querySelectorAll("img");
    var arrayLength = list.length;
    var count = 0;
    console.log("###### Images in this page: " + arrayLength + " ######");
    for (i in array) {
        count ++;
        console.log ( count, array[i].alt, array[i].src);
    }
}

function qaLinkList() {
    var array = document.querySelectorAll("a, [role=link]");
    var arrayLength = array.length;
    console.log("# #### # Links in this page: " + arrayLength + " # #### #");
    for (i in array) {
        console.log ( array[i]);
    }
}

function qaLinkListText() {
    var array = document.querySelectorAll("a, [role=link]");
    var arrayLength = array.length;
    var count = 0;
    console.log("# #### # Links in this page: " + arrayLength + " # #### #");
    for (i in array) {
        count ++;
        console.log (count, array[i].textContent, array[i].href);
    }
}

clear();
