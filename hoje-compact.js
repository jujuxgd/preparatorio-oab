
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
  // Progresso dos tópicos: faixa larga acima do checklist, não anel na
  // lateral. É o número que acompanha a lista, então fica junto dela.
  var painel=document.querySelector('.tab-content[data-tab=topicos]');
  if(painel&&ul){
    var faixa=document.createElement('div');
    faixa.className='cmp-faixa';
    faixa.innerHTML=
      '<div class="cf-topo">'+
        '<span class="cf-rot">Tópicos de hoje</span>'+
        '<span class="cf-num"><b id="cf-feitos">0</b> de <span id="cf-total">0</span></span>'+
        '<span class="cf-plano">Plano <b id="cf-plano">0%</b> <span id="cf-dias"></span></span>'+
      '</div>'+
      '<div class="cf-trilho"><span class="cf-barra" id="cf-barra"></span></div>';
    painel.insertBefore(faixa, painel.firstChild);
    var atualiza=function(){
      var li=[].slice.call(ul.querySelectorAll('li')).filter(function(x){return !x.classList.contains('checklist-subgroup-header')});
      var d=li.filter(function(x){return x.classList.contains('done')}).length, t=li.length;
      document.getElementById('cf-feitos').textContent=d;
      document.getElementById('cf-total').textContent=t;
      document.getElementById('cf-barra').style.width=(t?(d/t)*100:0)+'%';
      var p=document.getElementById('progress-pct-text'), dd=document.getElementById('progress-days-text');
      if(p) document.getElementById('cf-plano').textContent=p.textContent.trim();
      if(dd) document.getElementById('cf-dias').textContent='· '+dd.textContent.replace(' concluídos','');
    };
    new MutationObserver(atualiza).observe(ul,{subtree:true,childList:true,attributes:true,attributeFilter:['class']});
    atualiza(); setTimeout(atualiza,400);
  }

  // a coluna da direita some: o que restava dela subiu pra faixa
  var side=document.querySelector('.side');
  if(side) side.style.display='none';

  var hero=document.querySelector('.day-hero'),cta=document.getElementById('btn-estudei');
  if(hero&&cta)hero.appendChild(cta);
  // Microresumo e Resumo do Dia tratam da mesma coisa em escalas
  // diferentes — ficavam em abas separadas, um deles espremido embaixo
  // do checklist. Agora dividem a aba Resumos, em duas colunas.
  var mr=document.querySelector('.rt-card[data-editor="mr"]');
  var rd=document.querySelector('.rt-card[data-editor="rd"]');
  [mr, rd].forEach(function(card){
    if(!card) return;
    var h=card.querySelector('h4');
    if(h) h.childNodes.forEach(function(n){
      if(n.nodeType===3) n.nodeValue=n.nodeValue.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]\uFE0F?\s*/gu,'');
    });
  });
  if(mr&&rd&&rd.parentNode){
    // Microresumo aberto em cima; o Resumo do Dia, mais longo, fica
    // embaixo recolhido atrás de um ">" que gira ao abrir — o padrão
    // de seção dobrável do Notion. Duas colunas espremiam os dois.
    var pilha=document.createElement('div');
    pilha.className='cmp-pilha';
    rd.parentNode.insertBefore(pilha, rd);
    pilha.appendChild(mr);
    pilha.appendChild(rd);

    var cab=rd.firstElementChild, h4r=cab&&cab.querySelector('h4');
    if(h4r){
      rd.classList.add('cmp-dobra','cmp-collapsed');
      var seta=document.createElement('button');
      seta.type='button';
      seta.className='cmp-seta';
      seta.setAttribute('aria-expanded','false');
      seta.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>';
      h4r.insertBefore(seta, h4r.firstChild);

      var alterna=function(){
        var abrir=rd.classList.contains('cmp-collapsed');
        rd.classList.toggle('cmp-collapsed', !abrir);
        seta.setAttribute('aria-expanded', abrir?'true':'false');
      };
      seta.addEventListener('click',function(e){e.stopPropagation();alterna();});
      h4r.addEventListener('click',function(e){
        if(e.target.closest('button')&&!e.target.closest('.cmp-seta'))return;
        alterna();
      });
      h4r.style.cursor='pointer';
    }
  }
  var tr=document.querySelector('.tab[data-tab=resumodia] .tl');
  if(tr) tr.textContent='Resumos';
});
