
document.addEventListener('DOMContentLoaded',function(){
  var IC={topicos:'<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
    resumodia:'<path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/>',
    videoaulas:'<polygon points="5 3 19 12 5 21 5 3"/>',
    revisoes:'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/>',
    pdfsemana:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>'};
  document.querySelectorAll('.tab[data-tab]').forEach(function(t){
    var txt=t.textContent.replace(/^[^A-Za-zÀ-ú]+/,'').trim();
    t.innerHTML='<svg viewBox="0 0 24 24">'+(IC[t.dataset.tab]||'')+'</svg><span class="tl">'+txt+'</span>';
  });
  var tt=document.querySelector('.tab[data-tab=topicos] .tl');if(tt)tt.textContent='Checklist do dia';
  var pane=document.querySelector('.tab-content[data-tab=topicos]'),ul=document.getElementById('daily-checklist'),sp=document.getElementById('subject-panels');
  if(pane&&ul){
    var box=document.createElement('div');box.className='cmp-check';box.appendChild(ul);
    pane.insertBefore(box,pane.firstChild);
    if(sp)sp.style.display='none';
    var blk=document.getElementById('checklist-counter');blk=blk&&blk.closest('.side-block');if(blk)blk.style.display='none';
  }
  var side=document.querySelector('.side');
  if(side){
    var R=46,C=2*Math.PI*R,card=document.createElement('div');card.className='cmp-ring';
    card.innerHTML='<div class="cmp-ring-fig"><svg viewBox="0 0 110 110"><circle cx="55" cy="55" r="'+R+'" class="cmp-r-bg"/><circle id="cmp-arc" cx="55" cy="55" r="'+R+'" class="cmp-r-fg" stroke-dasharray="'+C+'" stroke-dashoffset="'+C+'"/></svg><div class="cmp-ring-c"><b id="cmp-num">0/0</b></div></div><div class="cmp-ring-t">tópicos de hoje estudados</div>';
    side.insertBefore(card,side.firstChild);
    var upd=function(){
      var li=[].slice.call(ul.querySelectorAll('li')).filter(function(x){return !x.classList.contains('checklist-subgroup-header')});
      var d=li.filter(function(x){return x.classList.contains('done')}).length,t=li.length;
      document.getElementById('cmp-num').textContent=d+'/'+t;
      document.getElementById('cmp-arc').style.strokeDashoffset=t?C*(1-d/t):C;
    };
    new MutationObserver(upd).observe(ul,{subtree:true,childList:true,attributes:true,attributeFilter:['class']});upd();
  }
  var hero=document.querySelector('.day-hero'),cta=document.getElementById('btn-estudei');
  if(hero&&cta)hero.appendChild(cta);
  document.querySelectorAll('.rt-card').forEach(function(c){
    if(c.dataset.editor!=='mr')return;
    c.classList.add('cmp-collapsed');
    var h=c.firstElementChild,h4=h&&h.querySelector('h4');
    if(h4){h4.insertAdjacentHTML('beforeend','<span class="cmp-chev">▾</span>');}
    c.addEventListener('click',function(e){
      if(c.classList.contains('cmp-collapsed')){c.classList.remove('cmp-collapsed');return}
      if(h.contains(e.target)&&!e.target.closest('button'))c.classList.add('cmp-collapsed');
    });
  });
});
