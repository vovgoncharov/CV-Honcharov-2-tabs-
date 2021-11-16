"use strict";
const tabs = document.querySelectorAll(".tab");

const getTab = () => {
    tabs.forEach((el) => {
        el.addEventListener("click", (e) => {
            document.querySelector(".tab.active")?.classList.remove("active");
            e.currentTarget.classList.toggle("active");
            document.querySelector(".tab-content.show")?.classList.remove("show"); 
            const text = e.currentTarget.dataset.content;
            document.querySelector(text).classList.toggle("show");
        });
    });
};
getTab();
