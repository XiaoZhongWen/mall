/*
 * @Author: 肖仲文 xiaozhongwen@mye.hk
 * @Date: 2023-03-17 10:50:38
 * @LastEditors: 肖仲文 xiaozhongwen@mye.hk
 * @LastEditTime: 2023-03-17 14:21:59
 * @FilePath: /mall/src/pages/index/components/slider/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import "./slider.css";
import "./btns.css";
import Slider from "./module";

const slider = new Slider(document.querySelector(".slider"), {
  initialIndex: 1,
  animation: true,
  speed: 300,
  autoplay: 0,
});

const leftbtnEl = document.getElementById("leftbtn");
const rightbtnEl = document.getElementById("rightbtn");
const bannerEl = document.getElementById("banner");

leftbtnEl.addEventListener(
  "click",
  () => {
    slider.prev();
  },
  false
);
rightbtnEl.addEventListener(
  "click",
  () => {
    slider.next();
  },
  false
);

// bannerEl.addEventListener(
//   "mouseenter",
//   () => {
//     slider.pause();
//   },
//   false
// );
// bannerEl.addEventListener(
//   "mouseleave",
//   () => {
//     slider.autoplay();
//   },
//   false
// );
