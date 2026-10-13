(function(){
  var btn=document.getElementById('copy-email');
  if(btn){btn.addEventListener('click',function(){
    var t=btn.getAttribute('data-copy');
    function done(){btn.textContent='copied';setTimeout(function(){btn.textContent='copy address';},1600);}
    function fallback(){var el=document.getElementById('email');var r=document.createRange();r.selectNodeContents(el);var s=getSelection();s.removeAllRanges();s.addRange(r);btn.textContent='selected, press ⌘C';}
    try{navigator.clipboard.writeText(t).then(done,fallback);}catch(e){fallback();}
  });}
  var z=document.getElementById('zoom'),lb=document.getElementById('lightbox');
  if(z&&lb){
    var close=function(){lb.hidden=true;document.body.style.overflow='';z.focus();};
    z.addEventListener('click',function(){lb.hidden=false;document.body.style.overflow='hidden';document.getElementById('lb-close').focus();});
    document.getElementById('lb-close').addEventListener('click',close);
    lb.querySelector('img').addEventListener('click',close);
    document.addEventListener('keydown',function(e){if(!lb.hidden&&e.key==='Escape')close();});
  }
  var prev=document.querySelector('[rel="prev"]'),next=document.querySelector('[rel="next"]');
  document.addEventListener('keydown',function(e){
    if(lb&&!lb.hidden)return;
    if(e.target.closest&&e.target.closest('input,textarea'))return;
    if(e.key==='ArrowLeft'&&prev)location.href=prev.href;
    if(e.key==='ArrowRight'&&next)location.href=next.href;
  });
})();

(function(){
  var bar=document.querySelector('.bar'),b=bar&&bar.querySelector('.menu-btn');
  if(!b)return;
  function set(o){bar.classList.toggle('is-open',o);b.setAttribute('aria-expanded',o?'true':'false');b.textContent=o?'close':'menu';}
  b.addEventListener('click',function(){set(!bar.classList.contains('is-open'));});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&bar.classList.contains('is-open')){set(false);b.focus();}});
})();
