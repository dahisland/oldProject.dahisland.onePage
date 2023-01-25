// JavaScript Document

$(function () {
  "use strict";

  //ces paramètres chargent le slideshow en fullpage avec les images ci-dessous et une vitesse de transition de 5s.
  $.supersized({
    fadeIn: 5000,
    transition_speed: 2000,
    slides: [
      { image: "rsc/img/fond01.jpg" },
      { image: "rsc/img/fond02.jpg" },
      { image: "rsc/img/fond03.jpg" },
      { image: "rsc/img/fond04.jpg" },
    ],
  });

  //Animation de l'onglet Explorateurs
  $("a#explorer").click(function () {
    $("#explo").slideToggle("normal", "linear");
  });

  //Animation pour les feuilles qui disparaissent au passage de la souris
  $("#feuille02").mouseover(function () {
    $(this).fadeOut(1200);
  });
  $("#feuille03").mouseover(function () {
    $(this).fadeOut(1000);
  });
  $("#courbe").mouseover(function () {
    $(this).fadeOut(1000);
  });
  $("#feuille04").mouseover(function () {
    $(this).fadeOut(1200);
  });
  $("#feuille05").mouseover(function () {
    $(this).fadeOut(900);
  });
  $("#courbe02").mouseover(function () {
    $(this).fadeOut(1000);
  });

  //Anim des barres de menu 'Accueil central' vers 'sidebar côté'

  $("#picture").click(function () {
    $(this).animate({ opacity: "0", left: "-130px" }, 500);
    $("#motion").animate({ opacity: "0" }, 500);
    $("#diary").animate({ opacity: "0" }, 500);
    $("#tools").animate({ opacity: "0" }, 500);

    $("#picture2").animate(
      { opacity: "1", top: "30px", right: "-75px", "z-index": "799" },
      1000
    );
    $("#motion2").animate(
      { opacity: "1", top: "110px", right: "-78px", "z-index": "799" },
      1000
    );
    $("#diary2").animate(
      { opacity: "1", top: "196px", right: "-78px", "z-index": "799" },
      1000
    );
    $("#tools2").animate(
      { opacity: "1", top: "280px", right: "-81px", "z-index": "799" },
      1000
    );

    $("#picture2").css("cursor", "pointer");
    $("#motion2").css("cursor", "pointer");

    $("#sidebar").animate({ left: "40px" }, 2000);

    $("a#parfum").animate({ opacity: "1", top: "0px" }, 1200);
    $("a#mrjack").animate({ opacity: "1", top: "0px" }, 1200);
    $("a#dague").animate({ opacity: "1", top: "400px" }, 1200);
    $("a#soleil").animate({ opacity: "1", top: "260px" }, 1200);
    $("a#amazone").animate({ opacity: "1", top: "420px" }, 1200);
    $("a#nature").animate({ opacity: "1", top: "400px" }, 1200);
    $("a#heineke").animate({ opacity: "1", top: "150px" }, 1200);
    $("a#japon").animate({ opacity: "1", top: "220px" }, 1200);
    $("a#manoir").animate({ opacity: "1", top: "20px" }, 1200);
    $("a#maquette").animate({ opacity: "1", top: "530px" }, 1200);
    $("a#plonge").animate({ opacity: "1", top: "150px" }, 1200);
    $("a#roi").animate({ opacity: "1", top: "400px" }, 1200);
    $("a#story").animate({ opacity: "1", top: "275px" }, 1200);
    $("a#voyant").animate({ opacity: "1", top: "360px" }, 1200);
    $("a#monopolice").animate({ opacity: "1", top: "200px" }, 1200);

    $("#coming01").animate({ opacity: "1", top: "510px" }, 1500);
    $("#coming02").animate({ opacity: "1", top: "190px" }, 1500);
  });

  $("#diary").click(function () {
    $(this).animate({ opacity: "0", right: "-85px" }, 500);
    $("#picture").animate({ opacity: "0" }, 500);
    $("#motion").animate({ opacity: "0" }, 500);
    $("#tools").animate({ opacity: "0" }, 500);

    $("#picture2").animate(
      { opacity: "1", top: "30px", right: "-75px", "z-index": "799" },
      1000
    );
    $("#motion2").animate(
      { opacity: "1", top: "110px", right: "-78px", "z-index": "799" },
      1000
    );
    $("#diary2").animate(
      { opacity: "1", top: "196px", right: "-78px", "z-index": "799" },
      1000
    );
    $("#tools2").animate(
      { opacity: "1", top: "280px", right: "-81px", "z-index": "799" },
      1000
    );

    $("#picture2").css("cursor", "pointer");
    $("#motion2").css("cursor", "pointer");

    $("#sidebar").animate({ left: "40px" }, 1500);

    $("#journal").animate({ height: "500px", opacity: "1" }, 1200);
    $("#journal").animate({ "z-index": "800" }, 500);
  });

  $("#motion").click(function () {
    $(this).animate({ opacity: "0", left: "-90px" }, 500);
    $("#diary").animate({ opacity: "0" }, 500);
    $("#picture").animate({ opacity: "0" }, 500);
    $("#tools").animate({ opacity: "0" }, 500);

    $("#picture2").animate(
      { opacity: "1", top: "30px", right: "-75px", "z-index": "799" },
      1000
    );
    $("#motion2").animate(
      { opacity: "1", top: "110px", right: "-78px", "z-index": "799" },
      1000
    );
    $("#diary2").animate(
      { opacity: "1", top: "196px", right: "-78px", "z-index": "799" },
      1000
    );
    $("#tools2").animate(
      { opacity: "1", top: "280px", right: "-81px", "z-index": "799" },
      1000
    );

    $("#picture2").css("cursor", "pointer");
    $("#motion2").css("cursor", "pointer");

    $("#sidebar").animate({ left: "40px" }, 2000);

    $("#opacite").fadeIn(1200);
    $("#youtube").animate({ opacity: "1", width: "700px" }, 1200);
    $("#minivideos").animate({ opacity: "1", width: "600px" }, 1200);
    $("#titrevideo01").animate({ opacity: "1", width: "500px" }, 1200);
    $(".lecteursyt").animate({ opacity: "1", width: "560px" }, 1200);
  });

  $("#tools").click(function () {
    $(this).animate({ opacity: "0", right: "-85px" }, 500);
    $("#motion").animate({ opacity: "0" }, 500);
    $("#diary").animate({ opacity: "0" }, 500);
    $("#picture").animate({ opacity: "0" }, 500);

    $("#picture2").animate(
      { opacity: "1", top: "30px", right: "-75px", "z-index": "799" },
      1000
    );
    $("#motion2").animate(
      { opacity: "1", top: "110px", right: "-78px", "z-index": "799" },
      1000
    );
    $("#diary2").animate(
      { opacity: "1", top: "196px", right: "-78px", "z-index": "799" },
      1000
    );
    $("#tools2").animate(
      { opacity: "1", top: "280px", right: "-81px", "z-index": "799" },
      1000
    );

    $("#picture2").css("cursor", "pointer");
    $("#motion2").css("cursor", "pointer");

    $("#sidebar").animate({ left: "40px" }, 2000);

    $("#carteotresor").animate({ width: "867px" }, 1200);
    $(".opa").animate({ opacity: "1" }, 1500);
    $("#carteotresor").animate({ "z-index": "800" }, 500);
  });

  //Affichage des pages quand click sur menu latéral

  $("#diary2").click(function () {
    $("#opacite").fadeOut(500);

    $("#youtube").animate({ opacity: "0", width: "0px" }, 1000);
    $("#minivideos").animate({ opacity: "0", width: "0px" }, 1000);
    $(".titresvideos").animate({ opacity: "0" }, 700);
    $(".lecteursyt").animate({ opacity: "0", width: "0px" }, 1000);

    $(".opa").animate({ opacity: "0" }, 1000);
    $("#carteotresor").animate({ width: "0px" }, 1000);
    $("#carteotresor").animate({ "z-index": "-100" }, 500);

    $("a#parfum").animate({ opacity: "0", top: "-270px" }, 1500);
    $("a#mrjack").animate({ opacity: "0", top: "-170px" }, 1500);
    $("a#dague").animate({ opacity: "0", top: "-170px" }, 1500);
    $("a#soleil").animate({ opacity: "0", top: "-170px" }, 1500);
    $("a#amazone").animate({ opacity: "0", top: "-170px" }, 1500);
    $("a#nature").animate({ opacity: "0", top: "-170px" }, 1500);
    $("a#heineke").animate({ opacity: "0", top: "-170px" }, 1500);
    $("a#japon").animate({ opacity: "0", top: "-170px" }, 1500);
    $("a#manoir").animate({ opacity: "0", top: "-170px" }, 1500);
    $("a#maquette").animate({ opacity: "0", top: "-170px" }, 1500);
    $("a#plonge").animate({ opacity: "0", top: "-170px" }, 1500);
    $("a#roi").animate({ opacity: "0", top: "-170px" }, 1500);
    $("a#story").animate({ opacity: "0", top: "-170px" }, 1500);
    $("a#voyant").animate({ opacity: "0", top: "-170px" }, 1500);
    $("a#monopolice").animate({ opacity: "0", top: "-170px" }, 1500);

    $("#coming01").animate({ opacity: "0", top: "-170px" }, 1500);
    $("#coming02").animate({ opacity: "0", top: "-170px" }, 1500);

    $("#journal").animate({ height: "500px", opacity: "1" }, 1200);
    $("#journal").animate({ "z-index": "800" }, 500);
  });

  $("#motion2").click(function () {
    $(".opa").animate({ opacity: "0" }, 500);
    $("#carteotresor").animate({ width: "0px" }, 1000);
    $("#carteotresor").animate({ "z-index": "-100" }, 500);

    $("a#parfum").animate({ opacity: "0", top: "-270px" }, 1000);
    $("a#mrjack").animate({ opacity: "0", top: "-170px" }, 1000);
    $("a#dague").animate({ opacity: "0", top: "-170px" }, 1000);
    $("a#soleil").animate({ opacity: "0", top: "-170px" }, 1000);
    $("a#amazone").animate({ opacity: "0", top: "-170px" }, 1000);
    $("a#nature").animate({ opacity: "0", top: "-170px" }, 1000);
    $("a#heineke").animate({ opacity: "0", top: "-170px" }, 1000);
    $("a#japon").animate({ opacity: "0", top: "-170px" }, 1000);
    $("a#manoir").animate({ opacity: "0", top: "-170px" }, 1000);
    $("a#maquette").animate({ opacity: "0", top: "-170px" }, 1000);
    $("a#plonge").animate({ opacity: "0", top: "-170px" }, 1000);
    $("a#roi").animate({ opacity: "0", top: "-170px" }, 1000);
    $("a#story").animate({ opacity: "0", top: "-170px" }, 1000);
    $("a#voyant").animate({ opacity: "0", top: "-170px" }, 1000);
    $("a#monopolice").animate({ opacity: "0", top: "-170px" }, 1000);

    $("#coming01").animate({ opacity: "0", top: "-170px" }, 1000);
    $("#coming02").animate({ opacity: "0", top: "-170px" }, 1000);

    $("#journal").animate({ height: "0px", opacity: "0" }, 1000);
    $("#journal").animate({ "z-index": "-100" }, 500);

    $("#opacite").fadeIn(1200);
    $("#youtube").animate({ opacity: "1", width: "700px" }, 1200);
    $("#minivideos").animate({ opacity: "1", width: "600px" }, 1200);
    $("#titrevideo01").animate({ opacity: "1", width: "500px" }, 1200);
    $(".lecteursyt").animate({ opacity: "1", width: "560px" }, 1200);
  });

  $("#tools2").click(function () {
    $("#opacite").fadeOut(500);

    $("#youtube").animate({ opacity: "0", width: "0px" }, 1000);
    $("#minivideos").animate({ opacity: "0", width: "0px" }, 1000);
    $(".titresvideos").animate({ opacity: "0" }, 700);
    $(".lecteursyt").animate({ opacity: "0", width: "0px" }, 1000);

    $("a#parfum").animate({ opacity: "0", top: "-270px" }, 1500);
    $("a#mrjack").animate({ opacity: "0", top: "-170px" }, 1500);
    $("a#dague").animate({ opacity: "0", top: "-170px" }, 1500);
    $("a#soleil").animate({ opacity: "0", top: "-170px" }, 1500);
    $("a#amazone").animate({ opacity: "0", top: "-170px" }, 1500);
    $("a#nature").animate({ opacity: "0", top: "-170px" }, 1500);
    $("a#heineke").animate({ opacity: "0", top: "-170px" }, 1500);
    $("a#japon").animate({ opacity: "0", top: "-170px" }, 1500);
    $("a#manoir").animate({ opacity: "0", top: "-170px" }, 1500);
    $("a#maquette").animate({ opacity: "0", top: "-170px" }, 1500);
    $("a#plonge").animate({ opacity: "0", top: "-170px" }, 1500);
    $("a#roi").animate({ opacity: "0", top: "-170px" }, 1500);
    $("a#story").animate({ opacity: "0", top: "-170px" }, 1500);
    $("a#voyant").animate({ opacity: "0", top: "-170px" }, 1500);
    $("a#monopolice").animate({ opacity: "0", top: "-170px" }, 1500);

    $("#coming01").animate({ opacity: "0", top: "-170px" }, 1500);
    $("#coming02").animate({ opacity: "0", top: "-170px" }, 1500);

    $("#journal").animate({ height: "0px", opacity: "0" }, 1000);
    $("#journal").animate({ "z-index": "-100" }, 500);

    $("#carteotresor").animate({ width: "867px" }, 1200);
    $(".opa").animate({ opacity: "1" }, 1200);
    $("#carteotresor").animate({ "z-index": "800" }, 500);
  });

  $("#picture2").click(function () {
    $("#opacite").fadeOut(500);

    $("#youtube").animate({ opacity: "0", width: "0px" }, 1000);
    $("#minivideos").animate({ opacity: "0", width: "0px" }, 1000);
    $(".titresvideos").animate({ opacity: "0" }, 700);
    $(".lecteursyt").animate({ opacity: "0", width: "0px" }, 1000);

    $(".opa").animate({ opacity: "0" }, 1000);
    $("#carteotresor").animate({ width: "0px" }, 1000);
    $("#carteotresor").animate({ "z-index": "-100" }, 500);

    $("a#parfum").animate({ opacity: "1", top: "0px" }, 1500);
    $("a#mrjack").animate({ opacity: "1", top: "0px" }, 1500);
    $("a#dague").animate({ opacity: "1", top: "400px" }, 1500);
    $("a#soleil").animate({ opacity: "1", top: "260px" }, 1500);
    $("a#amazone").animate({ opacity: "1", top: "420px" }, 1500);
    $("a#nature").animate({ opacity: "1", top: "400px" }, 1500);
    $("a#heineke").animate({ opacity: "1", top: "150px" }, 1500);
    $("a#japon").animate({ opacity: "1", top: "220px" }, 1500);
    $("a#manoir").animate({ opacity: "1", top: "20px" }, 1500);
    $("a#maquette").animate({ opacity: "1", top: "530px" }, 1500);
    $("a#plonge").animate({ opacity: "1", top: "150px" }, 1500);
    $("a#roi").animate({ opacity: "1", top: "400px" }, 1500);
    $("a#story").animate({ opacity: "1", top: "275px" }, 1500);
    $("a#voyant").animate({ opacity: "1", top: "360px" }, 1500);
    $("a#monopolice").animate({ opacity: "1", top: "200px" }, 1500);

    $("#coming01").animate({ opacity: "1", top: "510px" }, 1500);
    $("#coming02").animate({ opacity: "1", top: "190px" }, 1500);

    $("#journal").animate({ height: "0px", opacity: "0" }, 1000);
    $("#journal").animate({ "z-index": "-100" }, 500);
  });

  // Anim du lecteur vidéo

  $("#minivideo01").click(function () {
    $("#lecteuryt01").animate({ "z-index": "1210" }, 100);
    $("#lecteuryt02").animate({ "z-index": "1202" }, 100);
    $("#lecteuryt03").animate({ "z-index": "1204" }, 100);
    $("#titrevideo01").animate(
      { opacity: "1", "z-index": "1210", width: "500px" },
      100
    );
    $("#titrevideo02").animate({ opacity: "0", "z-index": "1202" }, 100);
    $("#titrevideo03").animate({ opacity: "0", "z-index": "1204" }, 100);
  });

  $("#minivideo02").click(function () {
    $("#lecteuryt01").animate({ "z-index": "1202" }, 100);
    $("#lecteuryt02").animate({ "z-index": "1210" }, 100);
    $("#lecteuryt03").animate({ "z-index": "1204" }, 100);
    $("#titrevideo01").animate({ opacity: "0", "z-index": "1202" }, 100);
    $("#titrevideo02").animate(
      { opacity: "1", "z-index": "1210", width: "500px" },
      100
    );
    $("#titrevideo03").animate({ opacity: "0", "z-index": "1204" }, 100);
  });

  $("#minivideo03").click(function () {
    $("#lecteuryt01").animate({ "z-index": "1204" }, 100);
    $("#lecteuryt02").animate({ "z-index": "1202" }, 100);
    $("#lecteuryt03").animate({ "z-index": "1210" }, 100);
    $("#titrevideo01").animate({ opacity: "0", "z-index": "1204" }, 100);
    $("#titrevideo02").animate({ opacity: "0", "z-index": "1202" }, 100);
    $("#titrevideo03").animate(
      { opacity: "1", "z-index": "1210", width: "500px" },
      100
    );
  });

  //Mouseover-out des barres de menu 'Accueil central'

  $("#picture").mouseover(function () {
    $(this).animate({ left: "-240px" }, 1000);
  });
  $("#diary").mouseover(function () {
    $(this).animate({ right: "-250px" }, 1000);
  });
  $("#motion").mouseover(function () {
    $(this).animate({ left: "-200px" }, 1000);
  });
  $("#tools").mouseover(function () {
    $(this).animate({ right: "-200px" }, 1000);
  });

  $("#picture").mouseout(function () {
    $(this).animate({ left: "-100px" }, 1000);
  });
  $("#diary").mouseout(function () {
    $(this).animate({ right: "-100px" }, 1000);
  });
  $("#motion").mouseout(function () {
    $(this).animate({ left: "-80px" }, 1000);
  });
  $("#tools").mouseout(function () {
    $(this).animate({ right: "-80px" }, 1000);
  });

  //Mouseover-out des barres menu de côté

  $("#picture2").mouseover(function () {
    $(this).animate({ right: "-240px" }, 1000);
  });
  $("#picture2").mouseout(function () {
    $(this).animate({ right: "-75px" }, 1000);
  });
  $("#motion2").mouseover(function () {
    $(this).animate({ right: "-210px" }, 1000);
  });
  $("#motion2").mouseout(function () {
    $(this).animate({ right: "-78px" }, 1000);
  });
  $("#diary2").mouseover(function () {
    $(this).animate({ right: "-250px" }, 1000);
  });
  $("#diary2").mouseout(function () {
    $(this).animate({ right: "-78px" }, 1000);
  });
  $("#tools2").mouseover(function () {
    $(this).animate({ right: "-210px" }, 1000);
  });
  $("#tools2").mouseout(function () {
    $(this).animate({ right: "-81px" }, 1000);
  });

  //Animation du Formulaire

  $("a#msgbottle").click(function () {
    $("#motion").animate({ opacity: "1" }, 1000);
    $("#diary").animate({ opacity: "1" }, 1000);
    $("#tools").animate({ opacity: "1" }, 1000);
    $("#picture").animate({ opacity: "1" }, 1000);

    $("#picture2").animate({ opacity: "0" }, 1000);
    $("#motion2").animate({ opacity: "0" }, 1000);
    $("#diary2").animate({ opacity: "0" }, 1000);
    $("#tools2").animate({ opacity: "0" }, 1000);

    $("#sidebar").animate({ left: "43%" }, 2000);
    $("#opacite").fadeIn(3000);
    $("#sectionbottle").fadeIn(3000);

    $("#youtube").animate({ opacity: "0", width: "0px" }, 1000);
    $("#minivideos").animate({ opacity: "0", width: "0px" }, 1000);
    $(".titresvideos").animate({ opacity: "0" }, 700);
    $(".titresvideos").animate({ opacity: "0", width: "0px" }, 1000);

    $(".opa").animate({ opacity: "0" }, 1000);
    $("#carteotresor").animate({ width: "0px" }, 1000);
    $("#carteotresor").animate({ "z-index": "-100" }, 500);

    $("a#parfum").animate({ opacity: "0", top: "-270px" }, 1500);
    $("a#mrjack").animate({ opacity: "0", top: "-170px" }, 1500);
    $("a#dague").animate({ opacity: "0", top: "-170px" }, 1500);
    $("a#soleil").animate({ opacity: "0", top: "-170px" }, 1500);
    $("a#amazone").animate({ opacity: "0", top: "-170px" }, 1500);
    $("a#nature").animate({ opacity: "0", top: "-170px" }, 1500);
    $("a#heineke").animate({ opacity: "0", top: "-170px" }, 1500);
    $("a#japon").animate({ opacity: "0", top: "-170px" }, 1500);
    $("a#manoir").animate({ opacity: "0", top: "-170px" }, 1500);
    $("a#maquette").animate({ opacity: "0", top: "-170px" }, 1500);
    $("a#plonge").animate({ opacity: "0", top: "-170px" }, 1500);
    $("a#roi").animate({ opacity: "0", top: "-170px" }, 1500);
    $("a#story").animate({ opacity: "0", top: "-170px" }, 1500);
    $("a#voyant").animate({ opacity: "0", top: "-170px" }, 1500);
    $("a#monopolice").animate({ opacity: "0", top: "-170px" }, 1500);

    $("#coming01").animate({ opacity: "0", top: "-170px" }, 1500);
    $("#coming02").animate({ opacity: "0", top: "-170px" }, 1500);

    $("#journal").animate({ height: "0px", opacity: "0" }, 1000);
    $("#journal").animate({ "z-index": "-100" }, 500);
  });

  //Animation des légendes de la carte aux trésors

  $("a#dsmaxor").mouseenter(function () {
    $("p#max").fadeIn(200);
  });
  $("a#dsmaxor").mouseleave(function () {
    $("p#max").fadeOut(200);
  });

  $("a#dreamor").mouseenter(function () {
    $("p#dream").fadeIn(200);
  });
  $("a#dreamor").mouseleave(function () {
    $("p#dream").fadeOut(200);
  });

  $("a#afteror").mouseenter(function () {
    $("p#afterfx").fadeIn(200);
  });
  $("a#afteror").mouseleave(function () {
    $("p#afterfx").fadeOut(200);
  });

  $("a#encoror").mouseenter(function () {
    $("p#encore").fadeIn(200);
  });
  $("a#encoror").mouseleave(function () {
    $("p#encore").fadeOut(200);
  });

  $("a#mayaor").mouseenter(function () {
    $("p#maya").fadeIn(200);
  });
  $("a#mayaor").mouseleave(function () {
    $("p#maya").fadeOut(200);
  });

  $("a#premieror").mouseenter(function () {
    $("p#premiere").fadeIn(200);
  });
  $("a#premieror").mouseleave(function () {
    $("p#premiere").fadeOut(200);
  });
  $("a#giantor").mouseenter(function () {
    $("p#giant").fadeIn(200);
  });
  $("a#giantor").mouseleave(function () {
    $("p#giant").fadeOut(200);
  });

  $("a#toshopor").mouseover(function () {
    $("p#toshop").fadeIn(200);
  });
  $("a#toshopor").mouseout(function () {
    $("p#toshop").fadeOut(200);
  });

  //Animation du journal
  $("a#amazones").click(function () {
    $(this).animate({ bottom: "0px", left: "-48px" }, 2000);
    $("#bonzai").animate({ top: "330px", left: "30px" }, 2000);
    $("#bouquet01").animate({ top: "450px", left: "320px" }, 2000);
    $("#bouquet02").animate({ top: "425px", left: "530px" }, 2000);
    $("#bouquet03").animate({ top: "455px", left: "195px" }, 2000);
    $("#bouquet04").animate({ top: "394px", left: "392px" }, 2000);
    $("#griffures").animate({ top: "530px", left: "385px" }, 2000);
    $("#haut").animate({ opacity: "1", "z-index": "850" }, 2000);
    $("#droite").animate({ opacity: "0", "z-index": "-100" }, 2000);
    $("#news").animate({ opacity: "0", "z-index": "-100" }, 2000);
    $("#presentation").animate({ opacity: "1", "z-index": "-100" }, 2000);
  });

  $("a#haut").click(function () {
    $(this).animate({ opacity: "0", "z-index": "-100" }, 2000);
    $("#bonzai").animate({ top: "0px", left: "0px" }, 2000);
    $("#bouquet01").animate({ top: "120px", left: "290px" }, 2000);
    $("#bouquet02").animate({ top: "95px", left: "500px" }, 2000);
    $("#bouquet03").animate({ top: "125px", left: "165px" }, 2000);
    $("#bouquet04").animate({ top: "64px", left: "362px" }, 2000);
    $("#griffures").animate({ top: "200px", left: "355px" }, 2000);
    $("#amazones").animate({ bottom: "0px", left: "-48px" }, 2000);
    $("#droite").animate({ opacity: "0", "z-index": "-100" }, 2000);
    $("#news").animate({ opacity: "0", "z-index": "-100" }, 2000);
    $("#presentation").animate({ opacity: "0", "z-index": "-100" }, 2000);
  });

  $("a#griffures").click(function () {
    $("#bonzai").animate({ top: "0px", left: "-370px" }, 2000);
    $("#bouquet01").animate({ top: "120px", left: "-80px" }, 2000);
    $("#bouquet02").animate({ top: "95px", left: "130px" }, 2000);
    $("#bouquet03").animate({ top: "125px", left: "-205px" }, 2000);
    $("#bouquet04").animate({ top: "64px", left: "-8px" }, 2000);
    $("#griffures").animate({ top: "200px", left: "-30px" }, 2000);
    $("#amazones").animate({ bottom: "0px", left: "-120px" }, 2000);
    $("#droite").animate({ opacity: "1", "z-index": "850" }, 2000);
    $("#haut").animate({ opacity: "0", "z-index": "-100" }, 2000);
    $("#news").animate({ opacity: "1", "z-index": "800" }, 2000);
    $("#presentation").animate({ opacity: "0", "z-index": "-100" }, 2000);
  });

  $("a#droite").click(function () {
    $(this).animate({ opacity: "0", "z-index": "-100" }, 2000);
    $("#bonzai").animate({ top: "0px", left: "0px" }, 2000);
    $("#bouquet01").animate({ top: "120px", left: "290px" }, 2000);
    $("#bouquet02").animate({ top: "95px", left: "500px" }, 2000);
    $("#bouquet03").animate({ top: "125px", left: "165px" }, 2000);
    $("#bouquet04").animate({ top: "64px", left: "362px" }, 2000);
    $("#griffures").animate({ top: "200px", left: "355px" }, 2000);
    $("#amazones").animate({ bottom: "0px", left: "-48px" }, 2000);
    $("#haut").animate({ opacity: "0", "z-index": "-100" }, 2000);
    $("#news").animate({ opacity: "0", "z-index": "-100" }, 2000);
    $("#presentation").animate({ opacity: "0", "z-index": "-100" }, 2000);
  });

  //Traitement du formulaire avec Ajax

  $("#submit").click(function () {
    var nom = $("#nom").val();
    var email = $("#email").val();
    var comment = $("#comment").val();

    var donnees = "nom=" + nom + "&email=" + email + "&comment=" + comment;

    $("#nom, #email, #comment").focus(function () {
      $(this).removeClass("error");
    });

    if (nom == "") {
      $("#nom").addClass("error");
    }
    if (email == "") {
      $("#email").addClass("error");
    }
    if (comment == "") {
      $("#comment").addClass("error");
    }

    if (nom != "" && email != "" && comment != "") {
      $.ajax({
        type: "POST",
        url: "index.php",
        data: donnees,
        beforeSend: function () {
          $("#loading").fadeIn();
        },
        success: function () {
          $("#loading").fadeOut();
          $("#sectionbottle")
            .empty()
            .append(
              '<div id="success">Votre bouteille sera pêchée prochainement !</div><p><a href="index.php" id="back">Retour Accueil</a></p>'
            )
            .hide()
            .slideDown();
        },
      });
    }

    return false;
  });
});
