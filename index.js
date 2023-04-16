// Include the chrome driver
require("chromedriver");
  
// Include selenium webdriver
let swd = require("selenium-webdriver");
let browser = new swd.Builder();
let tab = browser.forBrowser("chrome").build();

  
// Step 1 - Opening the geeksforgeeks sign in page
let tabToOpen =
    tab.get("https://youtube.com/");
tabToOpen
    .then(function () {
  
        // Timeout to wait if connection is slow
        let findTimeOutP =
            tab.manage().setTimeouts({
                implicit: 10000, // 10 seconds
            });
        return findTimeOutP;
    })
    .then(function () {
  
        // Step 2 - Finding the username input
        let promiseUsernameBox =
            tab.findElement(swd.By.css("#search-input.ytd-searchbox-spt input"));
        return promiseUsernameBox;
    })
    .then(function (usernameBox) {
  
        // Step 3 - Entering the username
        let promiseFillUsername =
            usernameBox.sendKeys("lofy hip hop");
        return promiseFillUsername;
    })
    .then(function () {
        console.log(
            ""
        );
  
    //     // Step 4 - Finding the password input
    //     let promisePasswordBox =
    //         tab.findElement(swd.By.css("#password"));
    //     return promisePasswordBox;
    // })
    // .then(function (passwordBox) {
  
    //     // Step 5 - Entering the password
    //     let promiseFillPassword =
    //         passwordBox.sendKeys("");
    //     return promiseFillPassword;
    // })
    // .then(function () {
    //     console.log(
    //         "Password entered successfully in" +
    //         " 'login demonstration' for GEEKSFORGEEKS"
    //     );
  
        // Step 6 - Finding the Sign In button
        let promiseSignInBtn = tab.findElement(
            swd.By.css("#search-icon-legacy.ytd-searchbox")
        );
        return promiseSignInBtn;
    })
    .then(function (signInBtn) {
  
        // Step 7 - clicar no botao de pesquisa
        let promiseClickSignIn = signInBtn.click();
        return promiseClickSignIn;
    })

    .then(function (){
    let promiseSignInBtnVideo = tab.findElement(
            swd.By.css("#yt-core-image--fill-parent-height yt-core-image--fill-parent-width yt-core-image yt-core-image--content-mode-scale-aspect-fill yt-core-image--loaded")
        );
        return promiseSignInBtnVideo;
    })

    .then(function (signInBtnVideo) {
  
        // Step 7 - clicar no botao de pesquisa
        let promiseClickSignInVideo = signInBtnVideo.click();
        return promiseClickSignInVideo;
    })

    .then(function () {
        console.log("Successfully signed in GEEKSFORGEEKS!");
    })
    .catch(function (err) {
        console.log("Error ", err, " occurred!");
    });