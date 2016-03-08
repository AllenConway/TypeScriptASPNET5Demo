/// <reference path="../../typings/browser.d.ts" />
module JQueryTest {
    "use strict";

    export class ColorChange {
        constructor() {
        }

        setElementColor(id: string, color: string) {
            $("#" + id).css("color", color);
        }

    }

}

window.onload = () => {
    var colorChange = new JQueryTest.ColorChange();
    colorChange.setElementColor("mainTitle", "red");
};