// ==UserScript==
// @name         SalesforceDateEntry
// @namespace    http://lodestarinsights.com/
// @version      0.3
// @description  Allows direct date entry into salesforce date fields
// @author       Zach Lawson
// @match        https://*.lightning.force.com/*
// @grant        none
// @license      MIT
/* globals jQuery, $, waitForKeyElements */

// ==/UserScript==



(function() {
    'use strict';

    // Your code here...
    //var datepickers = $('a.datePicker-openIcon');

    //console.log($('body.desktop').find('div.desktop'));

    /*const mainDivCB = function(mutationsList, observer)
    {
        //mutationsList.forEach(m => m.addedNodes.forEach(an => console.log(an)));
        mutationsList.forEach
        (
            m =>
            {
                Array.from(m.addedNodes).forEach
                (
                    an =>
                    {
                        if (an.tagName == 'DIV' && Array.from(an.classList).includes('desktop'))
                        {
                            mainDivObserver.disconnect();
                            datePickerObserver.observe(an,{childList: false, subtree: true, characterData: true});
                        }
                    }
                )
            }
        );
    }
    const datePickerCB = function(mutationsList, observer)
    {
        mutationsList.forEach
        (
          m =>
            {
                console.log(m);
                //console.log(Array.from(m.addedNodes).forEach(n => console.log(n.innerHTML.indexOf('div force-recordlayoutitem_recordlayoutitem'))));
                //if(document.querySelector("div.desktop").querySelectorAll("div[force-recordlayoutitem_recordlayoutitem]").length > 0)
                //{
                //
                //}
            }
        );
    }
    const mainDivObserver = new MutationObserver(mainDivCB);
    const datePickerObserver = new MutationObserver(datePickerCB);
    //const

    mainDivObserver.observe(document, {childList: true, subtree: true, attribute: true});*/




    document.addEventListener("DOMNodeInserted", function(event) {
    //datepickers.each(function(){
    //$(div.viewport).ready(function() {
        var element = event.relatedNode.tagName;
        //console.log(event);
        if(element == 'LIGHTNING-BUTTON-ICON'){
            console.log("Found one");
            //console.log($("lightning-button-icon").prev());
            console.log(event);
            if(event.relatedNode != undefined && event.relatedNode.previousSibling != undefined)
            {
                console.log(event.relatedNode);
                console.log(event.relatedNode.previousSibling);

                var dtField = event.relatedNode.previousSibling;

            dtField.addEventListener('keyup',function(e){
                console.log(e);
                if (dtField.value.length == 2){
                    dtField.value = dtField.value + "/";
                }else if (dtField.value.length == 5){
                    dtField.value = dtField.value + "/";
                }
            });
            }
        }
        //$('a.datePicker-openIcon').click(function() {alert("test");});
    }, false);
    //});
})();
