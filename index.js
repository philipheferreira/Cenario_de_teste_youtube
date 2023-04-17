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
            tab.findElement(swd.By.css("#search-input.ytd-searchbox-spt input")).sendKeys("lofi hip hop");
        return identificarBuscaYoutube;
    })
    .then(function () {
        // Passo 3 - Identificar botao de realizar pesquisa e clicar nele
        let IdentificandoBotaoPesquisa = tab.findElement(swd.By.css("#search-icon-legacy.ytd-searchbox")).click();
        return IdentificandoBotaoPesquisa;
    })

    // Selecionar primeiro video da pesquisa
    .then(function (){
        let selecionarVideo = tab.findElement(swd.By.className("style-scope ytd-promoted-video-renderer")).click();
        return selecionarVideo;
    })

    .then(function (){ 
        let pausarVideo = tab.findElement(swd.By.className("ytp-play-button ytp-button")).click();
    })
    .then(function () {
        console.log("Cenario de teste finalizado com sucesso");
    })
    .catch(function (err) {
        console.log("Situacao de erro: ", err, " ocorreu!");
    });