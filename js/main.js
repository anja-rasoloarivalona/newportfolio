var isSidebarAnimated,showSideBar,width=$(document).width();$(window).on("beforeunload",function(){$(window).scrollTop(0)}),isSidebarAnimated=900<width?0:"-100%",$(window).on("load",function(){new TimelineMax({repeat:0}).to(".loader",1,{autoAlpha:0},"+=3").to(".home",1,{y:0,opacity:1}).to(".sidebar",1,{x:isSidebarAnimated},"-=.5").to(".home__layer",1,{opacity:1}).to(".about",.2,{opacity:1},"-=.7").to(".sidebar__toggle",.5,{opacity:1},"-=.5").to("html",.3,{overflowY:"scroll"},"-=.5")}),showSideBar=900<width?0:"0%";var a=new TimelineMax;a.to(".sidebar__toggle--1",.4,{rotation:135,position:"absolute",top:"1rem",ease:Power2.easeOut}).to(".sidebar__toggle--3",.4,{rotation:-135,position:"absolute",top:"1rem",ease:Power2.easeOut},"-=.4").to(".sidebar",.4,{x:showSideBar},"-=.4").stop();var b=new TimelineMax;b.to(".sidebar__toggle--2",.4,{opacity:0,scale:0}).stop();var show=!1;$(".sidebar__toggle").on("click",function(){!1===show?(a.play(),b.play(),show=!0,(new TimelineMax).to("html",.4,{overflowY:"hidden"}),$(".sidebar__list__item").on("click",function(){a.reverse(),b.reverse(),show=!1,(new TimelineMax).to("html",.4,{overflowY:"scroll"})})):(a.reverse(),b.reverse(),show=!1,(new TimelineMax).to("html",.4,{overflowY:"scroll"}))});var scroll1=new TimelineMax;scroll1.set(".about__text",{autoAlpha:0,y:300}).to(".about__text",2,{autoAlpha:1,y:0,ease:Power2.easeOut});var controller=new ScrollMagic.Controller,scene1=new ScrollMagic.Scene({triggerElement:".about",triggerHook:1,offset:350}).reverse(!1).setTween(scroll1).addIndicators().addTo(controller),scroll2=new TimelineMax;scroll2.set(".portfolio__gallery__item",{autoAlpha:0,y:300}).to(".portfolio__gallery__item",2,{autoAlpha:1,y:0,ease:Power2.easeOut});controller=new ScrollMagic.Controller,scene1=new ScrollMagic.Scene({triggerElement:".portfolio",triggerHook:1,offset:350}).reverse(!1).setTween(scroll2).addIndicators().addTo(controller);if($(function(){$(".sidebar__list__item").click(function(){$(".sidebar__list li").removeClass("sidebar__active"),$(this).addClass("sidebar__active")})}),$(document).on("scroll",function(){var e=$(window).scrollTop();$("#home").position().top<e&&($(".sidebar__list li").removeClass("sidebar__active"),$(".sidebar__list li.sidebar__list__item--home").addClass("sidebar__active"))}),$(document).on("scroll",function(){var e=$(window).scrollTop();$("#about").position().top-200<e&&($(".sidebar__list li").removeClass("sidebar__active"),$(".sidebar__list li.sidebar__list__item--about").addClass("sidebar__active"))}),$(document).on("scroll",function(){var e=$(window).scrollTop();$("#portfolio").position().top-300<e&&($(".sidebar__list li").removeClass("sidebar__active"),$(".sidebar__list li.sidebar__list__item--portfolio").addClass("sidebar__active"))}),$(document).on("scroll",function(){var e=$(window).scrollTop();$("#skills").position().top-300<e&&($(".sidebar__list li").removeClass("sidebar__active"),$(".sidebar__list li.sidebar__list__item--skills").addClass("sidebar__active"))}),$(document).on("scroll",function(){var e=$(window).scrollTop();$("#contact").position().top-300<e&&($(".sidebar__list li").removeClass("sidebar__active"),$(".sidebar__list li.sidebar__list__item--contact").addClass("sidebar__active"))}),681<(width=$(document).width())){var writer=new TimelineMax({repeat:-1,repeatDelay:1.5});writer.to(".home__title__writer",1.5,{x:-372},"+=4").to(".home__title__hide",1.5,{x:8},"-=1.5").to(".home__title",1.5,{x:"20%"},"-=1.5").to(".home__title--2",.2,{opacity:1}).to(".home__title--1",.2,{opacity:0}).to(".home__title__writer",1.5,{x:-50}).to(".home__title__hide",1.5,{x:330},"-=1.5").to(".home__title",1.5,{x:"0%"},"-=1.5").to(".home__title__writer",1.5,{x:-370},"+=3").to(".home__title__hide",1.5,{x:10},"-=1.5").to(".home__title",1.5,{x:"20%"},"-=1.5").to(".home__title--2",.2,{opacity:0}).to(".home__title--1",.2,{opacity:1}).to(".home__title__writer",1.5,{x:-5}).to(".home__title__hide",1.5,{x:372},"-=1.5").to(".home__title",1.5,{x:"0%"},"-=1.5").delay(5)}