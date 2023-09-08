"use strict"

const investmen = document.querySelector(".investmen"),
      working = document.querySelector(".work"),
      educational = document.querySelector(".educational"),
      prvBtn = document.querySelector(".prevBtn"),
      select = document.querySelector("#select"),
      nxtBtn = document.querySelector(".nextBtn");
  
    const edu=["phD","master","achelor"]
    const work=["job offer","job seeker"]
    const inv=["marketing companies","local agent","buy house"]

let currentTab = 0; 
showTab(currentTab);
//////////////////////////////
function showTab(n) {
    const tabs = document.querySelectorAll(".tab");
    tabs[n].style.display = "flex";
    if (n == 0) {
      prvBtn.style.display = "none";
      nxtBtn.style.display = "none";
    } else {
      prvBtn.style.display = "inline";
      nxtBtn.style.display = "inline";
      nxtBtn.innerHTML = "Submit";
    } 
  }
//////////////////////////////////
  let tabs, tab;
    tabs = document.querySelectorAll(".tab");
    tab = tabs[currentTab].querySelectorAll(".el-validataion");

    tab.forEach(e => {
      e.addEventListener('click',()=>{
          nextPrev();
      })
    })
 ////////////////  ////////    
function selectShow(e) {
  select.hidden = false;
  select.innerHTML = "";
  e.forEach(e => {
    const html = `<option value="${e}">${e}</option>`;
    select.innerHTML += html;
    nxtBtn.disabled = false;

  });
}//////////////////
    educational.addEventListener('click', ()=> {
      selectShow(edu);
    })
    working.addEventListener('click',() => {
      
      selectShow(work);
    })
    investmen.addEventListener('click', () => {
      selectShow(inv);
    })
//////////////////////////////////
  function nextPrev(n=1) {
    tabs[currentTab].style.display = "none";
    select.hidden = true;
    currentTab += n;
    if(currentTab >= 2){
      currentTab=0
      alert("well done man!!!!👍")
    } 
    nxtBtn.disabled=true
    showTab(currentTab); 
  }