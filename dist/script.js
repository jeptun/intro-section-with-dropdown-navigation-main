const testString="Javascript test!";console.log(testString);const fruits=["😀","✨","💀"];fruits.map((t=>{console.log(t)}));const nav=document.querySelector(".primary-navigation"),navToggle=document.querySelector(".mobile-nav-toggle");navToggle.addEventListener("click",(()=>{"false"===nav.getAttribute("data-visible")?(nav.setAttribute("data-visible",!0),navToggle.setAttribute("aria-expanded",!0)):(nav.setAttribute("data-visible",!1),navToggle.setAttribute("aria-expanded",!1))}));var i,acc=document.getElementsByClassName("accordion");for(i=0;i<acc.length;i++)acc[i].addEventListener("click",(function(){this.classList.toggle("active");var t=this.nextElementSibling;"block"===t.style.display?t.style.display="none":t.style.display="block"}));
//# sourceMappingURL=script.js.map