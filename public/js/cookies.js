var policyurl = "https://dmp.com/policy-cookie",
    okcolor = "#7CCBDE",
    cookie_crunch = Cookies.get('cookie_crunch');

// ma barre de cookies en HTML
document.write("<div id='cookie-bar' style='display:none;z-index:10;position:absolute; bottom:0; left:0; width: 100%;  text-align: center; padding: 12px 0; margin:0;  background: rgba(244, 244, 244, 1);  color: #919191;  font: 14px arial, sans-serif;'><div style='display:inline-block;width:78%;margin:0; font-family: Arial;'>Ce site web utilise des cookies - <a id='cookie-policy' href='"+policyurl+"' style='color: #919191;font-weight:bold;'>Consulter notre politique des cookies !</a>. Vous pouvez stopper l'utilisation des cookies <span id='stop-cookie' style='text-decoration:underline;'>en cliquant ici</span>.</div><div style='width:20%;'><span id='agree' style='position:absolute;bottom:4px;right:4%;color: #FFFFFF;background: "+okcolor+";border-radius: 3px; line-height: 30px; padding: 0 6px;margin: 1px 8px 0 0;font-weight: 600;'>J'accepte</span></div></div>");

// je garde un bouton en dessous de ma barre des cookies, pour que l'utilisateur puisse modifier son choix
document.write("<span id='checkcookies' style='z-index:1;position:absolute;bottom:4px;right:2%;color: #FFFFFF;background: "+okcolor+";border-radius: 3px; line-height: 30px; padding: 0 6px;margin: 1px 8px 0 0;font-weight: 600;'>cookies</span>");

document.getElementById("checkcookies").addEventListener("click", showCookiebar);
function showCookiebar() {
    document.getElementById("cookie-bar").style.display = 'block';
}

//si l'utilisateur accepte
document.getElementById("agree").addEventListener("click", hideCookiebar);
function hideCookiebar() {
    // j'enregistre cette donnée dans un cookie
    document.cookie = "cookie_crunch=ok;expires=Thu, 18 Dec 2020 12:00:00 UTC;path=/";
    // je cache ma barre
    document.getElementById("cookie-bar").style.display = 'none';
}

//si l'utilisateur refuse
document.getElementById("stop-cookie").addEventListener("click", hideCookiebar);
function hideCookiebar() {
    // j'enregistre son choix dans un cookie
    document.cookie = "cookie_crunch=no;expires=Thu, 18 Dec 2020 12:00:00 UTC;path=/";
    // je cache ma barre
    document.getElementById("cookie-bar").style.display = 'none';
    // je supprime les cookies spécifiques
}
// si l'utilisateur n'a pas encore accepté / refusé les cookies, j'affiche la barre des cookies
if (cookie_crunch == null || cookie_crunch == ""){
    document.getElementById("cookie-bar").style.display = "block";
}
// Si l'utilisateur n'a pas refusé l'utilisation des données
var cookie_crunch = Cookies.get('cookie_crunch');
if (cookie_crunch != "no"){
    // je charge mes scripts de suivi de données, publicités ...
}