// ==UserScript==
// @name         SalesforceDateEntry
// @namespace    http://lodestarinsights.com/
// @version      0.2
// @description  Allows direct date entry into salesforce date fields
// @author       Zach Lawson
// @match        https://*.lightning.force.com/*
// @grant        none
// @license      MIT
// @require      http://code.jquery.com/jquery-latest.js
/* globals jQuery, $, waitForKeyElements */

// ==/UserScript==



(function() {
    'use strict';

    // Your code here...
    //var datepickers = $('a.datePicker-openIcon');
    document.addEventListener("DOMNodeInserted", function(event) {
    //datepickers.each(function(){
    //$(div.viewport).ready(function() {
        var element = event.target
        if($(element).prop("tagName") && $(element).prop("tagName").toUpperCase() == 'DIV'){
            $('a.datePicker-openIcon').prev().keyup(function(){
                if ($(this).val().length == 2){
                    $(this).val($(this).val() + "/");
                }else if ($(this).val().length == 5){
                    $(this).val($(this).val() + "/");
                }
            });
        }
        //$('a.datePicker-openIcon').click(function() {alert("test");});
    });
    //});
})();
