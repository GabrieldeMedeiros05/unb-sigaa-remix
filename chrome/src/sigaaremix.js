'use strict';

function tema(cor){
   var achouTema = false;
   for (var contagem = 0; contagem < temas2.length; contagem++) {
        if (cor == temas2[contagem][0]){
            cor1 = temas2[contagem][1];
            cor2 = temas2[contagem][2];
            cor3 = temas2[contagem][3];
            cor4 = temas2[contagem][4];
            if(temas2[contagem][5] != ''){corErro = temas2[contagem][5]};
            achouTema = true;
        };
   };
   if(cor == 'Tema Customizado'){
      cor1 = cor1CustomizadoObj.get();
      cor2 = cor2CustomizadoObj.get();
      cor3 = cor3CustomizadoObj.get();
      cor4 = cor4CustomizadoObj.get();
      achouTema = true;
   }
   if(achouTema == false){
            cor1 = '#2f3c52';
            cor2 = '#232f40';
            cor3 = '#141A25';
            cor4 = '#5e697d';
   }
}

//Ler temas customizados e adicionar a lista de opções
function lerTemas (){
    for (var contagem = 0; contagem < temas2.length; contagem++) {
         var opcao = document.createElement("option");
         opcao.setAttribute("value", temas2[contagem][0]);
         var opcaoTexto = document.createTextNode(temas2[contagem][0]);
         opcao.appendChild(opcaoTexto);
         document.getElementById("temaSeletor").appendChild(opcao);
     };
};
//Fim Temas


//Aplicar as mudanças na página
function executar (){
  function mudancasBasicias(){

    carregarCSS("css/basicas.css")

    //Mudar fonte
    document.body.style.fontFamily = fontePadrao;
    //Remoção do fundo
    xcss('html.background, body.background','background','white');
    ///remover espaço lateral do plano de fundo
    xcss('#container','width','auto');
    //Esconder rodapé
    xcss('#rodape','display','none');
    //Corrigir o bug
    xcss('#container','minWidth','70em');

    var basicasCss = document.createElement('style');
    basicasCss.innerHTML = `
    /*Mudar cor da barra com imagem*/
    table.formulario caption, table.listagem caption, table.visualizacao caption, h3.tituloTabela{
      background: ` + cor1 + `;
      border-radius: 2px;
      color: white;
    }
    .box-geral .box-cabecalho{
      background: ` + cor1 + `;
      border-radius: 2px;
      color: white;
    }
    `;
    document.head.appendChild(basicasCss);

    
 }


 function mudancasBarraDeCima(){

    carregarCSS("css/barradecima.css")

    //Escurecer sistema de gestão...
    xcss('#info-sistema','background',cor1);
    xcss('#info-sistema','color',corFonteClara1);
    xcss('#info-sistema','borderBottom',"1px solid" + cor3);

    //Mudar o fundo dá área do nome, departamento, semestre da barra de cima
    xcss('#painel-usuario','background',cor1);
    xcss('#painel-usuario','color',corFonteClara1);
    xcss('#painel-usuario','borderBottom',"1px solid" + cor3);


    //Mudar cores do fundo do menu com os botões modulos , menu discente...
    xcss('#painel-usuario #menu-usuario','background',cor1);
    xcss('#painel-usuario #menu-usuario','color',corFonteClara1);

    //Mudar botões modulos, caixa postal, discente, senha....
    xcss('#painel-usuario #menu-usuario li a','background',cor1); //Remover icones
    xcss('#painel-usuario #menu-usuario li a','color',corFonteClara1);
    xcss('#painel-usuario #menu-usuario li a','textAlign',"center");
    xcss('#painel-usuario #menu-usuario li a','padding',"2px 0px 2px 0px");
    xcss('#painel-usuario #menu-usuario li a','border',"1px solid " +cor4);
    xcss('#painel-usuario #menu-usuario li a','borderRadius',arrendondamentoBorda1);
    xcss('#painel-usuario #menu-usuario li a','marginTop','auto');

    //Mudar cor do botão sair
    xcss('#info-sistema span.sair-sistema a','color',corFonteClara1);
    var botaoSair = document.querySelector('#info-sistema span.sair-sistema a');
    if (botaoSair != null){ botaoSair.insertAdjacentHTML('beforeEnd', '&nbsp;<img src="' + xurl("img/logoff-white.svg") + '" width="19px" height="19px">'); };

    //Mudar a cor das bordas de cada item na barra que diz portal público, Ajuda, Tempo de sessão....
    xcss('#info-sistema span.acessibilidade','border','solid ' + cor3);
    xcss('#info-sistema span.acessibilidade','borderWidth','0 1px 0 0');

    //Inserir icones nos botões modulos, caixa postal...
    //Modulos
    var botaoModulos2 = document.querySelector('#painel-usuario #menu-usuario li.modulos a');
    if (botaoModulos2 != null){ botaoModulos2.insertAdjacentHTML('afterbegin', '<img src="' + xurl("img/modulos-white.svg") + '" width="12px" height="12px">&nbsp;'); }
    //Caixa Postal
    var botaoPostal2 = document.querySelector('#painel-usuario #menu-usuario li.caixa-postal a');
    if (botaoPostal2 != null){ botaoPostal2.insertAdjacentHTML('afterbegin', '<img src="' + xurl("img/caixa-postal-white.svg") + '" width="12px" height="12px">&nbsp;'); }
    //Chamado
    var botaoChamado2 = document.querySelector('#painel-usuario #menu-usuario li.chamado a');
    if (botaoChamado2 != null){ botaoChamado2.insertAdjacentHTML('afterbegin', '<img src="' + xurl("img/chamado-white.svg") + '" width="12px" height="12px">&nbsp;'); }
    //Menu discente
    var botaoDiscente2 = document.querySelector('#painel-usuario #menu-usuario li.menus a');
    if (botaoDiscente2 != null){ botaoDiscente2.insertAdjacentHTML('afterbegin', '<img src="' + xurl("img/menu-dicente-white.svg") + '" width="12px" height="12px">&nbsp;'); }
    //Alterar senha
    var botaoSenha2 = document.querySelector('#painel-usuario #menu-usuario li.dados-pessoais a');
    if (botaoSenha2 != null){ botaoSenha2.insertAdjacentHTML('afterbegin', '<img src="' + xurl("img/senha-white.svg") + '" width="12px" height="12px">&nbsp;'); }

    //Adicionar sombra
    xcss('#painel-usuario',"boxShadow", sombra1);

    //Mudar fundo avisso de erro
    xcss('#painel-erros','background',cor1);
    xcss('#painel-erros','borderBottom',"1px solid" + cor3);
    xcss('#painel-erros','color',corFonteClara1);
    xcss('#painel-erros a','color',corFonteClara1);
    xcss('#painel-erros ul.info','background','none'); //Esconder icone de informação
    xcss('#painel-erros ul.warning','background','none'); //Esconder icone de alerta
    xcss('#painel-erros ul.warning li','color','#ffeb3b'); //Mudar do aviso de alerta
    xcss('#painel-erros ul','padding','0'); //Remover o padding desnecessário
    xcss('#painel-erros ul.erros li','color',corErro); //Letra vermelha do aviso de erro

    substituirTexto('#info-sistema h1 span','UnB - SIGAA -','SIGAA Remix');
    removerTexto ('#info-sistema h3', 'Sistema Integrado de Gestão de Atividades Acadêmicas');

 }
 //Fim mudanças barra de cima

 function mudancasTurma(){

   carregarCSS("css/turma.css")

   var turmaCss = document.createElement('style');
   turmaCss.innerHTML = `
   /* Mudança no ícone de seta para esquerda */
   .botaoDireita {
     background: white url("` + xurl("img/painel-seta-esquerda-black.svg") + `") no-repeat 5px 5px !important;
   }
   /* Imagem turma virtual */
   div.intro-aval {
     background: white url(` + xurl("img/arte-turma-virtual.svg") + `) no-repeat left top !important;
   }
   /* Alterar o ícone de impressora */
   .botaoImprimir {
     background-image: url("` + xurl("img/impressora-black-12.svg") + `") !important;
     background-position: center !important;
   }
   /*  Alterar o ícone de casa/home  */
   .botaoPortal {
     background-image: url("` + xurl("img/home-black-12.svg") + `") !important;
     background-position: center !important;
   }
   /* Mudar ícone de ajuda do menu da esquerda */
   .itemMenuHeaderAjuda {
     background-image: url("` + xurl("img/ajuda-black-16.svg") + `");
   }
   /* Mudar ícone de estastistica */
   .itemMenuHeaderRelatorios {
     background-image: url("` + xurl("img/estatistica-black-16.svg") + `");
   }
   /* Mudar ícone de cadeira */
   .itemMenuHeaderTurma {
     background-image: url("` + xurl("img/turma-black-16.svg") + `");
   }
   /* Mudar ícone Materias/Livro*/
   .itemMenuHeaderMateriais {
     background-image: url("` + xurl("img/materiais-black-16.svg") + `");
   }
   /* ícone atividades */
   .itemMenuHeaderAtividades {
     background-image: url("` + xurl("img/atividades-black-16.svg") + `");
   }
   /* ícone alunos */
   .itemMenuHeaderAlunos {
     background-image: url("` + xurl("img/alunos-black-16.svg") + `");
   }
   /*ícone opções turmas */
   .botaoOpcoesTurma {
     background-image: url("` + xurl("img/opcoes-black-12.svg") + `") !important;
     background-position: center !important;
   }
   /* Mudar ícone Aula paginadas (setas)  */
   .botaoAulasPaginadas {
     background-image: url("` + xurl("img/aulas-paginadas-black-12.svg") + `") !important;
     background-position: center !important;
   }
   /* Mudar ícone Aula em lista (setas verticais)  */
   .botaoAulasEmLista {
     background-image: url("` + xurl("img/aulas-lista-black-12.svg") + `") !important;
     background-position: center !important;
   }
   /* Mudar ícone trocar de turma (seta ondulada) */
   .botaoTrocarTurma{
     background-image: url("` + xurl("img/trocar-turma-black-12.svg") + `") !important;
     background-position: center !important;
   }
   `;
   document.head.appendChild(turmaCss);

   //remover fundo da barra da interface "menu turma virtual" e o do lado direito
   xbackground("div > table > tbody > tr > td",'painel_bg.png','');

   //Mudar a cor do texto amarelo da barra de cima
   xcss('#info-sistema a','color',corFonteClara1);
   xcss('#tempoSessao','color',corFonteClara1);

   //Remover fundo e ajeitar borda do menu lateral retraido
   xcss('.botaoDireita','border','1px solid #e0e0e0');

   // Melhoria na borda lateral do nome
   xcss('#painelDadosUsuario','borderRight', '1px solid #e0e0e0');

   //Adicionar sombra na barra de cima
   xcss('#info-sistema',"boxShadow", sombra1);

   //Corrigir tamanho do nome do aluno
   xcss('#painelDadosUsuario > p','fontSize', tamanhoFonte1);

   //Mudar o ícone de seta para a direita
   xsrc("img","https://sigaa.unb.br/sigaa/ava/img/painel_seta_dir.png",xurl("img/painel-seta-direita-black.svg"));

   //Mudar o ícone de seta para a cima
   xsrc("img","https://sigaa.unb.br/sigaa/ava/img/painel_seta_cima.png",xurl("img/painel-seta-baixo-black.svg"));

   //Mudar o ícone da sra para baixo
   xsrc("img","https://sigaa.unb.br/sigaa/ava/img/painel_seta_baixo.png",xurl("img/painel-seta-cima-black.svg"));

 };

 function corrigirFonte(){
   document.body.style.fontSize = tamanhoFonte1;
 }
 function mudarScrollBar(){

  carregarCSS("css/scrollbar.css")

 }

 //Se o sigaa remix estiver ativado
 if (ativado != "false"){
  tema(temaAtivado);

  mudarScrollBar();
  
  novasImagens()

  //Mudar o ícone seta para esquerda
  xcss('tr > td.voltar > a','background', 'url(' + xurl("img/seta-esquerda-black.svg") + ') no-repeat');

  //Página inicial
  if (enderecosPaginaInicial){
    mudancasBasicias();
    mudancasBarraDeCima();
    mudancasTurma();
    corrigirFonte();
    novasImagensHome();
    
    carregarCSS("css/paginainicial.css")

    carregarCSS("css/mostrarhorario.css")

    //Mudar Fundo da área de dados pessoais
    xcss('#perfil-docente #agenda-docente','border', brancoBorda1);
    xcss('#perfil-docente #agenda-docente','borderRadius', arrendondamentoBorda1);

    //Corrigir tamanho letra em Detalhar
    xcss('tbody tr td form a','fontSize', tamanhoFonte1);

    //Mudar cor do fundo de minhas matérias para branco
    xcss('#avaliacao-portal','background', corTransparente);
    xcss('#avaliacao-portal','border', brancoBorda1);
    xcss('#avaliacao-portal','borderRadius', arrendondamentoBorda1);

    //perfil-docente
    xcss('#perfil-docente','background', corTransparente);
    xcss('#perfil-docente','border', brancoBorda1);
    xcss('#perfil-docente','borderRadius', arrendondamentoBorda1);
    //Melhorar a margem da área de perfil docente
    xcss('#perfil-docente','marginTop', '8px');

    //Evitar bug de redimensionamento
    xcss('#container','minWidth','68em');

    //correção do tamanho do texto em atualizações da turma
    xcss('#atualizacoes-turma','fontSize',tamanhoFonte2);

    //Remoção do fundo na barra de semestre, 2020.1
    xcss('#main-docente table td','background',corTransparente);

    // Mudar cor do fundo da disciplina na lista de componente curricular
    xcss('#main-docente tr.odd','background','#f5f5f5');

    // Mudar fundo da tag TH que é usada em uma barra
    xcss('#main-docente thead th','background',corTransparente);

    // Mudar tamanho da fonte da tag TH
    xcss('#main-docente thead th','fontSize',tamanhoFonte2);

    //Mudar borda da tag TH
    xcss('#main-docente thead th','borderBottom',brancoBorda1);

    //Correção do tamanho da tag P
    xcss('p','fontSize',tamanhoFonte1);

    //Correção tamanho de letras em Turmas do Semestre e Minhas Atividades
    xcss('#main-docente .simple-panel h4','fontSize',tamanhoFonte1);

    //Melhoria no padding de aviso de vazio
    xcss('#main-docente .simple-panel p.vazio','padding','10px');

    //Mudar a area da foto, mensagens, atualizar foto e perfil...
    xcss('.pessoal-docente','background',corTransparente);
    xcss('.pessoal-docente','border',brancoBorda1);
    xcss('.pessoal-docente','borderRadius',arrendondamentoBorda1);
    xcss('.pessoal-docente','margin','8px');

    ///muda fundo da aréa ensino,extensão,bolsas,..
    xcss('#menu-dropdown','background',cor2);
    // xcss('#menu-dropdown','borderBottom',"1px solid" + cor3);
    xcss('#menu-dropdown',"boxShadow", sombra1);
    xcss('#painel-usuario',"boxShadow", sombra1);

    ////ensino, cadastro, bolsas..... mudar cor e adicionar bordas
    xcss('.ThemeOfficeMainItem','background',cor2);
    xcss('.ThemeOfficeMainItem','color',corFonteClara1);
    xcss('.ThemeOfficeMainItem','textAlign',"center");
    xcss('.ThemeOfficeMainItem','borderBottom',"5px solid" + cor2);
    xcss('.ThemeOfficeMainItem','borderTop',"5px solid" + cor2);
    xcss('.ThemeOfficeMainItem','paddingLeft','15px');
    xcss('.ThemeOfficeMainItem','paddingRight','15px');

    //Remover icones estranhos do menu
    xcss('td.ThemeOfficeMenuItemLeft img','display','none');
    xcss('td.ThemeOfficeMenuFolderLeft img','display','none');

    //menu
    xcss('.ThemeOfficeMenuItem','background',cor1);
    xcss('.ThemeOfficeMenuItem','color',corFonteClara1);
    xcss('.ThemeOfficeSubMenu','border','1px solid' + cor3);
    xcss('.ThemeOfficeMenuItem .ThemeOfficeMenuFolderLeft, .ThemeOfficeMenuItem .ThemeOfficeMenuItemLeft','background',cor2);
    xcss('.ThemeOfficeMenuSplit','borderTop','1px solid' + cor3);

    //Remover o fundo de avaliação institucional e da área de dados pessoais
    xcss('#perfil-docente #agenda-docente','background',corTransparente);
    xcss('#perfil-docente #agenda-docente','margin','8px');

    //Mudar cor do fundo da área de texto da atualizações de turma
    xcss('.subFormulario','background',corTransparente);

    //Mudar cor do fundo da área de turmas para branco e adicionar borda
    xcss('#main-docente .simple-panel','background',corTransparente);
    xcss('#main-docente .simple-panel','border',brancoBorda1);
    xcss('#main-docente .simple-panel','borderRadius',arrendondamentoBorda1);

    //Adicionar sombra no menu de dropdown
    xcss('.ThemeOfficeSubMenu',"boxShadow", sombra1);

    //Avalição institucional
    xcss('#agenda-docente input','width','168px');

    //Mudar foto
    xcss('.foto','margin','10px');
    xcss('.foto img','borderRadius', '4px');

    //Remover imagem de telefone antigo
    xsrc('img','https://sigaa.unb.br/sigaa/img/celular.jpg','');
    xcss('#relatorio-paisagem-container',"width", '90%');
    xcss('#relatorio-paisagem-container',"minWidth", '60em');

    //Corrreção do tamanho da letra em consultar minhas notas
    xcss('#relatorio-rodape table tr td','fontSize',tamanhoFonte1);

    //Mudar as bordas
    xcss('#relatorio-rodape','border',brancoBorda1);
    xcss('#relatorio-rodape','borderRadius',arrendondamentoBorda1);
    xcss('#relatorio-cabecalho','border',brancoBorda1);
    xcss('#relatorio-cabecalho','borderRadius',arrendondamentoBorda1);

    xcss('.ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default','height','auto');
    xcss('.ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default','fontSize','14px');

    //Mudar o texto portal do discente
    removerTexto ('div > a:link', 'Portal do Discente');

    //Remover texto de links quebrados
    removerTexto ('p > a:link', `Calendário Acadêmico de Graduação`);
    removerTexto ('p > a:link', `Regulamento dos Cursos de Graduação`);

  }
  //Consultar indices acadêmicos
  else if (enderecosIndicesAcademicos){
    document.body.style.fontFamily = fontePadrao;
    document.body.style.fontSize = tamanhoFonte1;

    xcss('html.background, body.background','background','white');
    xcss('#relatorio-container','width','70%');
    xcss('#relatorio-container','minWidth','50em');

    xcss('#relatorio-rodape table tr td','fontSize',tamanhoFonte1);
    xcss('#relatorio-rodape','border',brancoBorda1);
    xcss('#relatorio-rodape','borderRadius',arrendondamentoBorda1);
    xcss('#relatorio-cabecalho','border',brancoBorda1);
    xcss('#relatorio-cabecalho','borderRadius',arrendondamentoBorda1);

  }
  //Área de turmas anteriores
  else if (enderecosTurmasAnteriores){
    mudancasBasicias();
    corrigirFonte();
    mudancasBarraDeCima();
    mudancasTurma();

    xcss('#container','minWidth','60em');

    xcss('.infoAltRem','background', corTransparente);
    xcss('.infoAltRem','border', 'none');

    xcss('table.listagem, table.subListagem','fontSize',tamanhoFonte2);
    xcss('div.infoAltRem','fontSize','18px');
    xcss('table.listagem, table.subListagem','width','90%');

    xcss('table.listagem > tfoot, table.listagem > tfoot td','background',cor1);
    xcss('table.listagem > tfoot, table.listagem > tfoot td','borderRadius',"2px");

    removerTexto ('div> a:link', 'Portal do Discente');
    removerTexto ('div> a:link', 'Turma Virtual');
    xcss('table.listagem, table.subListagem','border',"none");

  }
  //Área de Matrícula
  else if (enderecosMatricula){
    mudancasBasicias();
    corrigirFonte();
    mudancasBarraDeCima();
    xcss('label','fontSize', '16px');
    xcss('table.listagem#lista-turmas-curriculo > tbody tr.disciplina.no-hover td','fontSize', '1em');
  }
  //Correção de Página genéricas
  else if (enderecosTurmasSelecionadas || enderecosAtualizarDadosPessoais || enderecosPlanoMatricula){
    mudancasBasicias();
    corrigirFonte();
    mudancasBarraDeCima();

  }
  // área de avisos
  else if (enderecosAvisoCovid){
   mudancasBasicias();
   corrigirFonte();
   mudancasBarraDeCima();

   var AvisoCovidCss = document.createElement('style');
   AvisoCovidCss.innerHTML = `
   #conteudo {
     margin: 1em;
   }
   #info-sistema span.acessibilidade{
     border: none !important;
   }
   `;
   document.head.appendChild(AvisoCovidCss);
  }
  // área de mensagens
  else if (enderecosCaixaPostal){
    mudancasBasicias();
    corrigirFonte();
    mudancasBarraDeCima();

    carregarCSS("css/caixapostal.css")

    substituirTexto('#info-sistema h1','all','SIGAA Remix');
  }
  //Correção de Página genéricas
  else if (enderecosTurmaVirtual){
    mudancasBasicias();
    corrigirFonte();
    mudancasBarraDeCima();
    mudancasTurma();
  }
  //Área imprimir comprovante
  else if (enderecosImprimirComprovante){
    mudancasBasicias();
    corrigirFonte();
    xcss('td','fontSize', '14px');
  }
  //Área de Mudar foto
  else if (enderecosAreaMudarFoto){
    mudancasBasicias();
    mudancasBarraDeCima();
    corrigirFonte();
  }
  //Tela de login
  else if (enderecosLogin){
   mudancasBasicias();
   mudancasBarraDeCima();
   corrigirFonte();

   carregarCSS("css/login.css")

  }
 }


 //Parte de baixo

 var body = document.getElementsByTagName("body")[0];

 var divBotoesCor = document.createElement("div");
 divBotoesCor.setAttribute("id", "idBotoesCor");
 divBotoesCor.style.display = 'none';
 divBotoesCor.style.alignItems = 'center';
 divBotoesCor.style.justifyContent = 'center';
 divBotoesCor.style.marginLeft = 'auto';
 divBotoesCor.style.marginRight = 'auto';
 divBotoesCor.style.marginTop = 'none';
 divBotoesCor.style.marginBottom = 'none';
 divBotoesCor.style.maxWidth = '100em';
 divBotoesCor.style.flexWrap = 'wrap';
 body.appendChild(divBotoesCor);

 var divBotoes = document.createElement("div");
 divBotoes.setAttribute("id", "idBotoes");
 divBotoes.style.display = 'flex';
 divBotoes.style.alignItems = 'center';
 divBotoes.style.justifyContent = 'center';
 divBotoes.style.marginLeft = 'auto';
 divBotoes.style.marginRight = 'auto';
 divBotoes.style.marginTop = '1em';
 divBotoes.style.marginBottom = '0.5em';
 divBotoes.style.maxWidth = '86em';
 divBotoes.style.flexWrap = 'wrap';
 body.appendChild(divBotoes);


 carregarCSS("css/botao.css")

 //Botão de ativar e desativar
 var buttonPower = document.createElement("button");
 buttonPower.setAttribute("class", "botaoTema");
 if (ativado == 'false'){
     buttonPower.innerHTML = "Ativar SIGAA Remix Versão " + versao;
     buttonPower.style.backgroundColor = corAtivar;
 }
 else{
     buttonPower.innerHTML = "Desativar SIGAA Remix Versão " + versao;
     buttonPower.style.backgroundColor = corDesativar;
 }
 buttonPower.style.color = 'white';
 buttonPower.style.paddingLeft = '2em';
 buttonPower.style.backgroundImage = 'url(' + xurl("img/power-white.svg") + ')';
 buttonPower.style.backgroundPosition = '2% 50%';

 document.getElementById("idBotoes").appendChild(buttonPower);

 buttonPower.addEventListener ("click", function() {
   if (ativado == 'false'){
       localStorage.setItem("ativado", 'true');
       alert("SIGAA Remix Ativado");
   }
   else{
       localStorage.setItem("ativado", 'false');
       alert("SIGAA Remix Desativado");
   }
   document.location.reload(true);
 });

  //Botão do github
  var buttonGithub = document.createElement("button");
  buttonGithub.setAttribute("class", "botaoTema");
  buttonGithub.innerHTML = 'Sobre o SIGAA Remix';
  buttonGithub.style.paddingLeft = '2em';
  buttonGithub.style.backgroundImage = 'url("' + xurl("img/github-black.svg") + '")';
  buttonGithub.style.backgroundPosition = '1% 50%';
  buttonGithub.onclick = function(){
    alert("Será aberta uma nova janela na página do Github do projeto, lá você poderá ler tutoriais, relatar bugs e ver o código fonte.\r\n\r\nSIGAA Remix desenvolvido por Luís Guerra");
    window.open("https://github.com/luisrguerra/unb-sigaa-remix");
  };
  document.getElementById("idBotoes").appendChild(buttonGithub);

  //Botão da calculadora
  var buttonCalculadora = document.createElement("button");
  buttonCalculadora.setAttribute("class", "botaoTema");
  buttonCalculadora.innerHTML = 'Calculadora de Horários';
  buttonCalculadora.style.paddingLeft = '2em';
  buttonCalculadora.style.backgroundImage = 'url("' + xurl("img/calculadora-black.svg") + '")';
  buttonCalculadora.style.backgroundPosition = '3% 50%';
  buttonCalculadora.onclick = function(){
    window.open("https://luisrguerra.github.io/calculadora-horarios-sigaa-unb-html/");
  };
  document.getElementById("idBotoes").appendChild(buttonCalculadora);

  //Seletor de tema
  var temaSeletor = document.createElement("select");
  temaSeletor.setAttribute("id", "temaSeletor");
  temaSeletor.setAttribute("class", "botaoTema");
  temaSeletor.setAttribute("onchange", `

  const temaSelecionado = document.getElementById('temaSeletor').value;
  localStorage.setItem('temaAtivado', temaSelecionado);

  if(temaSelecionado == 'Tema Customizado'){ localStorage.setItem('menuCorRGB', 'true'); }
  else{ localStorage.setItem('menuCorRGB', 'false'); };

  document.location.reload(true);
  window.scrollTo(0, 0);

  `);

  var temaSeletorCss = document.createElement('style');
  temaSeletorCss.innerHTML = `
  #temaSeletor {
    width: 13em;
    min-width: 13em;
    appearence: none;
    -webkit-appearance: none;
    background-image: url("` + xurl("img/tema-black.svg") + `");
    background-position: 3% 50%;
  };
  `;
  document.head.appendChild(temaSeletorCss);
  document.getElementById("idBotoes").appendChild(temaSeletor);

   //Botão Contato SIGAA
   var buttonContato = document.createElement("button");
   buttonContato.setAttribute("class", "botaoTema");
   buttonContato.innerHTML = 'Contato SIGAA Remix';
   buttonContato.style.paddingLeft = '2.25em';
   buttonContato.style.backgroundImage = 'url("' + xurl("img/editar-email-black.svg") + '")';
   buttonContato.style.backgroundPosition = '3% 50%';
   buttonContato.onclick = function(){
     window.open("https://forms.gle/ftX57dBGQTHo3QS87");
   };
   document.getElementById("idBotoes").appendChild(buttonContato);

   //Botão Link para o Cadê o Matricula Web
   var buttonMW = document.createElement("button");
   buttonMW.setAttribute("class", "botaoTema");
   buttonMW.innerHTML = 'Cadê o MW?';
   buttonMW.style.paddingLeft = '2.25em';
   buttonMW.style.backgroundImage = 'url("' + xurl("img/aluno-black.svg") + '")';
   buttonMW.style.backgroundPosition = '3% 50%';
   buttonMW.onclick = function(){
     window.open("https://cadeomw.com.br/");
   };
   document.getElementById("idBotoes").appendChild(buttonMW);

   //Botão Link Notícias UnB
   var buttonNoticias = document.createElement("button");
   buttonNoticias.setAttribute("class", "botaoTema");
   buttonNoticias.innerHTML = 'UnB Notícias';
   buttonNoticias.style.paddingLeft = '2.25em';
   buttonNoticias.style.backgroundImage = 'url("' + xurl("img/newspaper-black.svg") + '")';
   buttonNoticias.style.backgroundPosition = '3% 50%';
   buttonNoticias.onclick = function(){
     window.open("https://noticias.unb.br/");
   };
   document.getElementById("idBotoes").appendChild(buttonNoticias);

  var opcaoTitulo = document.createElement("option");
  opcaoTitulo.setAttribute("value", "none");
  var opcaoTituloTexto = document.createTextNode("\u00A0\u00A0\u00A0\u00A0 Selecionar um tema \u00A0\u00A0\u00A0\u00A0");
  opcaoTitulo.appendChild(opcaoTituloTexto);
  document.getElementById("temaSeletor").appendChild(opcaoTitulo);
  lerTemas ();

  //Botões de customização de cores
  carregarCSS("css/botaocor.css")

  var botaoCor1 = document.createElement("INPUT");
  botaoCor1.setAttribute("type", "color");
  botaoCor1.setAttribute("class", "temaBotaoCor");
  botaoCor1.setAttribute("id", "botaoCor1");
  botaoCor1.setAttribute("value", cor1CustomizadoObj.get() );
  divBotoesCor.appendChild(botaoCor1);

  var botaoCor2 = document.createElement("INPUT");
  botaoCor2.setAttribute("type", "color");
  botaoCor2.setAttribute("class", "temaBotaoCor");
  botaoCor2.setAttribute("id", "botaoCor2");
  botaoCor2.setAttribute("value", cor2CustomizadoObj.get() );
  divBotoesCor.appendChild(botaoCor2);

  var botaoCor3 = document.createElement("INPUT");
  botaoCor3.setAttribute("type", "color");
  botaoCor3.setAttribute("class", "temaBotaoCor");
  botaoCor3.setAttribute("id", "botaoCor3");
  botaoCor3.setAttribute("value", cor3CustomizadoObj.get() );
  divBotoesCor.appendChild(botaoCor3);

  var botaoCor4 = document.createElement("INPUT");
  botaoCor4.setAttribute("type", "color");
  botaoCor4.setAttribute("class", "temaBotaoCor");
  botaoCor4.setAttribute("id", "botaoCor4");
  botaoCor4.setAttribute("value", cor4CustomizadoObj.get() );
  divBotoesCor.appendChild(botaoCor4);

  var botaoCorAplicar = document.createElement("IMG");
  botaoCorAplicar.setAttribute("id", "botaoCorAplicar");
  botaoCorAplicar.style.backgroundColor = corAtivar;

  if (menuCorRGB == 'true'){divBotoesCor.style.display = "flex";}
  else{divBotoesCor.style.display = "none";};

  botaoCorAplicar.src = xurl("img/check-white.svg");
  botaoCorAplicar.setAttribute("onclick", `

       let botaoCor1 = document.getElementById("botaoCor1");
       let botaoCor2 = document.getElementById("botaoCor2");
       let botaoCor3 = document.getElementById("botaoCor3");
       let botaoCor4 = document.getElementById("botaoCor4");
       
       localStorage.setItem('cor1Customizado', botaoCor1.value);
       localStorage.setItem('cor2Customizado', botaoCor2.value);
       localStorage.setItem('cor3Customizado', botaoCor3.value);
       localStorage.setItem('cor4Customizado', botaoCor4.value);

       localStorage.setItem('menuCorRGB', 'false');

       document.location.reload(true);
       window.scrollTo(0, 0);

  `);
  divBotoesCor.appendChild(botaoCorAplicar);

  //Esconder botões na impressão
  var impressaoCss = document.createElement('style');
  impressaoCss.innerHTML = `
  @media print{
   #idBotoes{
       visibility: hidden;
   }
  }
  `;
  document.head.appendChild(impressaoCss);

};

//Executar tema
executar ();


// --- LÓGICA DA SIDEBAR RETRÁTIL E MENU CEBRASPE ---

function decodificarHTML(texto) {
  if (!texto) return '';
  const txt = document.createElement('textarea');
  txt.innerHTML = texto;
  return txt.value.replace(/<[^>]*>?/gm, '').trim();
}

function parseJSArrayString(str) {
  let index = 0;

  function parseValue() {
    skipWhitespace();
    if (index >= str.length) return null;
    if (str[index] === '[') return parseArray();
    if (str[index] === '{') return parseObject();
    if (str[index] === "'" || str[index] === '"') return parseString();
    return parseLiteral();
  }

  function skipWhitespace() {
    while (index < str.length && /\s/.test(str[index])) index++;
  }

  function parseArray() {
    index++;
    const arr = [];
    skipWhitespace();
    while (index < str.length && str[index] !== ']') {
      if (str[index] === ',') { index++; skipWhitespace(); continue; }
      arr.push(parseValue());
      skipWhitespace();
      if (str[index] === ',') { index++; skipWhitespace(); }
    }
    if (str[index] === ']') index++;
    return arr;
  }

  function parseObject() {
    while (index < str.length && str[index] !== '}') index++;
    if (str[index] === '}') index++;
    return null;
  }

  function parseString() {
    const quote = str[index++];
    let val = '';
    while (index < str.length) {
      if (str[index] === '\\') { index++; val += str[index]; }
      else if (str[index] === quote) { index++; break; }
      else { val += str[index]; }
      index++;
    }
    return val;
  }

  function parseLiteral() {
    let start = index;
    while (index < str.length && !/[,\s\]\}]/.test(str[index])) index++;
    let raw = str.substring(start, index).trim();
    if (raw === 'null') return null;
    if (raw === 'true') return true;
    if (raw === 'false') return false;
    return raw;
  }

  return parseValue();
}

function obterMatrizMenuNativo() {
  const scripts = document.querySelectorAll('script');
  for (let script of scripts) {
    const conteudo = script.textContent || script.innerText || '';
    if (conteudo.includes('menu_discente') || conteudo.includes('menu_form_menu')) {
      try {
        let idx = conteudo.indexOf('var menu_form_menu_discente_discente_menu =');
        if (idx === -1) idx = conteudo.indexOf('menu_form_menu_discente_discente_menu =');
        
        if (idx !== -1) {
          let inicio = conteudo.indexOf('[', idx);
          let fim = conteudo.lastIndexOf('];');
          if (inicio !== -1 && fim !== -1) {
            let trecho = conteudo.substring(inicio, fim + 1);
            return parseJSArrayString(trecho);
          }
        }
      } catch (err) {
        console.error('SIGAA Remix: Erro no parser:', err);
      }
    }
  }
  return null;
}

function dispararAcaoOuURL(comandoAcao) {
  if (!comandoAcao) return;

  if (comandoAcao.indexOf('http://') === 0 || comandoAcao.indexOf('https://') === 0) {
    window.location.href = comandoAcao;
    return;
  }

  const form = document.getElementById('menu:form_menu_discente') || 
               document.forms['menu:form_menu_discente'] || 
               document.querySelector('form[action*="discente.jsf"]') ||
               document.forms[0];

  if (form) {
    let inputAction = form.querySelector('input[name="jscook_action"]');
    if (!inputAction) {
      inputAction = document.createElement('input');
      inputAction.type = 'hidden';
      inputAction.name = 'jscook_action';
      form.appendChild(inputAction);
    }
    
    inputAction.value = comandoAcao;
    form.submit();
  }
}

/**
 * Renderiza recursivamente itens e sub-grupos em profundidade arbitrária (N níveis)
 */
function construirSubMenuHTML(itensArray, container, nivel = 1) {
  if (!Array.isArray(itensArray)) return;

  itensArray.forEach(subItem => {
    if (!Array.isArray(subItem) || subItem.length < 2) return;

    const textoRaw = subItem[1];
    const acaoRaw = subItem[2];

    if (!textoRaw || textoRaw === 'null') return;

    const textoLimpo = decodificarHTML(textoRaw);

    // 1. Caso seja um Link Final
    if (acaoRaw && typeof acaoRaw === 'string') {
      const a = document.createElement('a');
      a.textContent = textoLimpo;
      a.href = '#';
      a.className = 'sigaa-remix-item-link';
      // Recuo dinâmico proporcional ao nível
      a.style.paddingLeft = `${20 + (nivel * 12)}px`;
      
      a.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispararAcaoOuURL(acaoRaw);
      };
      container.appendChild(a);
    } 
    // 2. Caso seja um Subgrupo (possui filhos)
    else if (subItem.length > 5) {
      const wrapper = document.createElement('div');
      wrapper.className = 'sigaa-remix-subgroup-wrapper';

      const btn = document.createElement('button');
      btn.className = `sigaa-remix-subgroup-btn nivel-${nivel}`;
      btn.type = 'button';
      btn.style.paddingLeft = `${12 + (nivel * 10)}px`;
      btn.innerHTML = `<span>${textoLimpo}</span> <span class="sigaa-remix-sub-arrow">▸</span>`;

      const subContainer = document.createElement('div');
      subContainer.className = 'sigaa-accordion-sub-nested';
      subContainer.style.display = 'none';

      // Chama a si mesmo incrementando o nível de profundidade
      const filhos = subItem.slice(5);
      construirSubMenuHTML(filhos, subContainer, nivel + 1);

      btn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const estaAberto = subContainer.style.display === 'block';

        // Fecha APENAS os irmãos diretos no mesmo nível (sem fechar os pais ou avós)
        Array.from(container.children).forEach(child => {
          if (child !== wrapper && child.classList?.contains('sigaa-remix-subgroup-wrapper')) {
            const innerSub = child.querySelector(':scope > .sigaa-accordion-sub-nested');
            const innerArrow = child.querySelector(':scope > .sigaa-remix-subgroup-btn .sigaa-remix-sub-arrow');
            if (innerSub) innerSub.style.display = 'none';
            if (innerArrow) innerArrow.textContent = '▸';
          }
        });

        if (!estaAberto) {
          subContainer.style.display = 'block';
          btn.querySelector('.sigaa-remix-sub-arrow').textContent = '▾';
        } else {
          subContainer.style.display = 'none';
          btn.querySelector('.sigaa-remix-sub-arrow').textContent = '▸';
        }
      };

      wrapper.appendChild(btn);
      wrapper.appendChild(subContainer);
      container.appendChild(wrapper);
    }
  });
}

function renderizarSidebarRemix() {
  let sidebar = document.getElementById('sigaa-remix-sidebar');
  if (!sidebar) {
    sidebar = document.createElement('aside');
    sidebar.id = 'sigaa-remix-sidebar';
    document.body.appendChild(sidebar);
  }

  // Se já tiver populado o accordion, interrompe para não duplicar
  if (sidebar.querySelector('.sigaa-remix-accordion-container')) return true;

  const matrizGlobal = obterMatrizMenuNativo();

  // Esconde a área de dropdown nativa antiga apenas quando os dados forem lidos
  const menuAntigo = document.getElementById('menu-dropdown');
  if (menuAntigo) {
    menuAntigo.style.display = 'none';
  }

  if (!Array.isArray(matrizGlobal) || matrizGlobal.length === 0) return false;

  const containerAccordion = document.createElement('div');
  containerAccordion.className = 'sigaa-remix-accordion-container';

  matrizGlobal.forEach((opcaoModulo) => {
    if (!Array.isArray(opcaoModulo) || opcaoModulo.length < 2) return;

    const nomeModulo = decodificarHTML(opcaoModulo[1]);
    const subItens = opcaoModulo.slice(5);

    const itemModulo = document.createElement('div');
    itemModulo.className = 'sigaa-remix-section';

    const header = document.createElement('button');
    header.className = 'sigaa-remix-header-btn';
    header.type = 'button';
    header.innerHTML = `<span>${nomeModulo}</span> <span class="sigaa-remix-arrow">▼</span>`;

    const subContainer = document.createElement('div');
    subContainer.className = 'sigaa-accordion-sub';
    subContainer.style.display = 'none';

    construirSubMenuHTML(subItens, subContainer);

    header.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();

      const estaAberto = subContainer.style.display === 'block';

      sidebar.querySelectorAll('.sigaa-accordion-sub').forEach(el => el.style.display = 'none');
      sidebar.querySelectorAll('.sigaa-remix-arrow').forEach(el => el.textContent = '▼');

      if (!estaAberto) {
        subContainer.style.display = 'block';
        header.querySelector('.sigaa-remix-arrow').textContent = '▲';
      }
    };

    itemModulo.appendChild(header);
    itemModulo.appendChild(subContainer);
    containerAccordion.appendChild(itemModulo);
  });

  sidebar.appendChild(containerAccordion);
  return true;
}

(function setupSidebarRemix() {
  const iniciar = () => {
    let trigger = document.getElementById('zen-sidebar-trigger');
    if (!trigger) {
      trigger = document.createElement('div');
      trigger.id = 'zen-sidebar-trigger';
      trigger.innerHTML = '☰';
      trigger.title = 'Alternar Menu';
      
      trigger.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let sidebar = document.getElementById('sigaa-remix-sidebar');
        if (sidebar) {
          sidebar.classList.toggle('zen-active');
        }
      };
      
      document.body.appendChild(trigger);
    }

    renderizarSidebarRemix();
  };

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    iniciar();
  } else {
    document.addEventListener('DOMContentLoaded', iniciar);
  }

  // Tenta reexecutar em retardo caso o script JSF do SIGAA demore a carregar no DOM
  setTimeout(iniciar, 300);
  setTimeout(iniciar, 800);

  document.addEventListener('click', (e) => {
    const sidebar = document.getElementById('sigaa-remix-sidebar');
    if (sidebar && sidebar.classList.contains('zen-active')) {
      if (!e.target.closest('#sigaa-remix-sidebar') && !e.target.closest('#zen-sidebar-trigger')) {
        sidebar.classList.remove('zen-active');
      }
    }
  });
})();