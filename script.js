
document.addEventListener('DOMContentLoaded',()=>{
  const yearEl=document.querySelectorAll('.year');
  yearEl.forEach(el=>el.textContent=new Date().getFullYear());
});
