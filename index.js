// Include the chrome driver
require("chromedriver");
  
// Include selenium webdriver
let swd = require("selenium-webdriver");
let browser = new swd.Builder();
let tab = browser.forBrowser("chrome").build();

  
// Passo 1 - abrir a pagina do youtube
let abrirPagina = tab.get("https://youtube.com/");
abrirPagina
    .then(function () {
  
        // tempo de espera para esperar caso a coneccao esteja lenta
        let tempoDeEspera =
            tab.manage().setTimeouts({
                implicit: 10000, // 10 segundos
            });
        return tempoDeEspera;
    })
    .then(function () {
  
        // Passo 2 - procurar o input de busca no youtube sendo relacionado ao CSS do mesmo
        let identificarBuscaYoutube =
            tab.findElement(swd.By.css("#search-input.ytd-searchbox-spt input"));
        return identificarBuscaYoutube;
    })
    .then(function (inputBuscar) {
  
        // Passo 3 - digitar a frase na parte de busca
        let digitarInputBusca =
            inputBuscar.sendKeys("lofy hip hop");
        return digitarInputBusca;
    })
    .then(function () {
        console.log(
            ""
        );
  
        // Passo 4 - Identificar botao de realizar pesquisa
        let IdentificandoBotaoPesquisa = tab.findElement(
            swd.By.css("#search-icon-legacy.ytd-searchbox")
        );
        return IdentificandoBotaoPesquisa;
    })
    .then(function (botaoPesquisa) {
  
        // Passo 5 - clicar no botao de pesquisa
        let apertarBotaoBusca = botaoPesquisa.click();
        return apertarBotaoBusca;
    })

    // correcoes para serem feitas
    // .then(function (){
    //     let promiseSignInBtnVideo = tab.findElement(
    //         swd.By.css("#yt-core-image--fill-parent-height yt-core-image--fill-parent-width yt-core-image yt-core-image--content-mode-scale-aspect-fill yt-core-image--loaded")
    //     );
    //     return promiseSignInBtnVideo;
    // })

    // .then(function (signInBtnVideo) {
  
    //     // Passo 6 - clicar no botao de pesquisa
    //     let promiseClickSignInVideo = signInBtnVideo.click();
    //     return promiseClickSignInVideo;
    // })

    .then(function () {
        console.log("Cenario de teste finalizado com sucesso");
    })
    .catch(function (err) {
        console.log("Situacao de erro: ", err, " ocorreu!");
    });



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
  