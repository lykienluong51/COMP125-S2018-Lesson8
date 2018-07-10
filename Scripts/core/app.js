let core;
(function(){
    /**
     * This function is used for Initialization
     */

    function Start(){
        console.log(`%c App Initializing...`,"font-weight:bold;font-size: 20px;");

        Main();
    }

    /**
     * This function is where the main functionality for our
     * web app is happening
     */

    function Main(){
        console.log(`%c App Started...`, "font-weight:bold;font-size: 20px;");

    }

    window.addEventListener("load",Start);
})(core | (core = {}));
