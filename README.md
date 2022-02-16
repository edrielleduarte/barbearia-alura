- < h1 style="text-align: center;"> - para escrever direto na tag

- Deixar algo centralizado é text-align: center

<h2>Marcando elemento css </h1>
p > em > strong - para mudar por exemplo a cor ou sem o >, p em strong

- HEXADECIMAL CSS: e o numerico com a ABCDEF OU SEJA: 12323434ABCDEF

- RGB = RED GREEN BLUE: # \_ \_ \_ \_ \_ \_ dois primeiros red, dois segundos green e os dois ultimos blue.
  0 = ausencia
  f = maximo de cor

preto: #000000
BRANCO: #FFFFFF
VERMELHO: #FF0000

# LISTAS CRIAR

- ul : SÃO LISTAS NÃO ORDENADAS, NÃO IMPORTA A ORDEM
- ol : SÃO LISTAS ORDENADAS NA ORDEM

* id = elemento/id unicos
* class = para varios elementos que vai ser repetidos

* text-align: center = centraliza o elemento na pagina

padding referente ao elemento ex dentro de uma borda correspondendo cima, baixo, lado esqerdo e direito.. espaçamento no titulo/elemento

- PS: no html 5, para criar o cabeçalho de uma pagina foi dado a tag < header ></ header >'
  - tag NAV : navegação

# DIFERENCA NO CSS

- nav > ul > li : encaminha por tag e tag
- nav li: vai direto da tag pai pra tag filha que quer, sem passar por passo a passo

# ESPAÇAMENTO

- margin: 0 0 0 15px; = aqui informa que o espaço vai ser dos elementos para so esquerda

# POSIÇÃO

- O elemento ele esta no modo static, não muda porque ele ja vai estar naquele ponto, eu tenho que colocar o position em modo relativo ou seja olha o ponto inicial e vai colocar relative a posição inicial

- ele tem que usar o posicionamento absoluto, ele tira aquele elemento dali e você posiciona onde quer

  - Com o position: absolute, eu consigo posicionar meu elemento em qualquer lugar da página.

- Na tag nav colocamos o

  - nav { <br>
    position: absolute; <br>
    right: 0; <br>
    top: 110px; <br>
    } <br>
    Faz com o que o elemento se posicione onde deseja.

  Após colocamos tudo dentro de uma div, class container.. para CENTRALIZAR o conteudo, pq esta muito nos cantos os elementos.

  Mas o conteudo tem que ter o modo absoluto dentro da class container/div, pra que ele levante e pra isso na container/div, tem que ter o position: relative

  para os elementos ficar centralizado, calculando o tamanho das margens, eu coloco: margin: 0 auto;

# POSICIONAMENTO CSS 2

[00:00] No vídeo passado, a gente viu como funciona o posicionamento e como que a gente faz para deixar o nosso site do jeito que ele deveria estar. A gente viu posicionamento estático, posicionamento relativo e posicionamento absoluto e agora, a gente sabe o que a gente precisa fazer no nosso site, para deixar ele igual ao que a gente gostaria.

[00:18] Para isso, a gente vai agora no nosso produtos CSS e vai criar para a tag nav, aquele posicionamento que a gente falou. Então, a gente vai botar um position absolute, a gente vai botar o topo = 0 e a direita = 0. Voltando para o navegador e recarregando a página, ele está lá certinho naquele canto que a gente gostaria.

[00:50] Só que ele está colado no topo e eu não quero, eu quero que ele esteja alinhado ao meio da imagem, eu sei que essa imagem tem 240 pixels de altura, para que esse elemento fique no meio, a gente precisa que o topo tenha aproximadamente 110 pixels de altura. E aí, ele fica alinhado pelo meio da imagem.

[01:11] Só que, se a gente reparar no nosso site de exemplo e no nosso resultado final, tem alguma coisa que está desconexa, por quê? A minha imagem está colada no canto esquerdo e o meu menu está colado no canto direito e eu quero que este conteúdo esteja centralizado.

[01:33] Para fazer isso, a gente precisa que dentro do nosso cabeçalho tenha alguma coisa envelopando todo esse conteúdo, tenha alguma coisa que limite todo esse conteúdo e para isso, naturalmente a gente vai usar a tag da div, dentro do nosso cabeçalho, a gente vai botar uma div, que vai envolver o nosso h1 e o nosso nav.

[02:02] Então, deixa eu indentar isso aqui corretamente, indentar é jogar a estrutura de visualização para frente e agora eu tenho essa configuração aqui. Só que div é um nome muito genérico, div é só uma divisão, ela não tem importância, por isso, eu vou precisar criar uma classe aqui.

[02:25] E para essa classe, eu vou chamar de caixa, essa caixa que vai ficar no meio, centralizando todo esse conteúdo. Se a gente for no nosso site, a div está lá, ela não está fazendo nada e o que que eu quero fazer agora?

[02:43] Eu quero que essa div tenha um tamanho fixo, para isso eu vou chamar de .caixa, que é como a gente marca no CSS uma classe do HTML, para essa caixa, eu vou dar uma largura fixa, uma largura de 940 pixels. Essa largura, ela é uma largura padrão que se usa na web, porque a maioria das boas resoluções é de 1.260 pixels de largura, quando você usa 940, você está numa boa margem.

[03:20] Temos 940 pixels de largura na nossa caixa, vamos recarregar e ver o que aconteceu? Nada, a nossa caixa e aí, eu vou inspecionar o elemento aqui, a nossa caixa, ela está aqui com esse tamanho, mas o menu não está dentro da caixa e aí vem um detalhe importante.

[03:44] Toda a vez que a gente mexe em posicionamento e a gente está usando posicionamento absoluto, ele fica absoluto em relação a página, ou seja, o novo ponto inicial dele é qualquer ponto que a gente selecionou no navegador.

[03:59] Quando eu quero que ele tenha um ponto absoluto, mas de dentro de alguma caixa, eu preciso que essa caixa levante, eu preciso que essa caixa também tenha um posicionamento, só que agora um posicionamento relativo, eu quero só que ela levante, position relative.

[04:1] Se eu salvar isso aqui e recarregar, a gente vai ver que agora o nosso menu está dentro da caixa, a única coisa que não está acontecendo é a caixa estar centralizada e para a gente fazer isso, a gente precisa que: dado esses 940 pixels de largura, a margem da direita, seja igual a margem da esquerda, eu posso fazer isso na mão? Eu posso ficar calculando essa dimensão?

[04:44] Não é viável, por quê? Porque se eu boto 50 de um lado e 50 do outro, pode ser que numa tela de 1.300 pixels, ele não fique centralizado, se eu boto 200 de um lado e 200 do outro, pode ser que numa tela de 1.000 pixels, ele não fique centralizado, por isso, a gente precisa que essa margem da direita e a margem da esquerda, elas se calculem sozinhas, elas sejam automáticas.

[05:08] E aí, voltando no nosso CSS, eu quero que na minha caixa, o espaçamento externo, ou seja, a margem, para cima e para baixo seja zero e para direita e para a esquerda, elas se calculem automaticamente e para isso, a gente declara que elas são auto, de automáticos.

[05:28] Quando eu recarrego, eu tenho a minha caixa agora, centralizada. Se eu fechar o developer tools, a minha janela vai aumentar e reparem que a minha caixa agora continua centralizada. Eu continuo com esse espaço aqui sempre certinho, 940 pixels e a margem vai sambando para o lado.

[05:50] Só que agora o meu menu está colado na minha caixa, porque o meu menu é absoluto, mas a minha caixa é relativa, então ele é absoluto em relação a esse elemento que também levantou do meu HTML. Para deixar só perfeito isso aqui, a gente precisa no nosso header, botar um espaçamento interno para cima e para baixo.

[06:15] Então no meu header, eu vou botar um padding de 20 pixels para cima e para baixo e zero para a direita e para a esquerda. Se eu recarregar aqui, deu para ver que o meu cabeçalho aumentou um pouquinho e as coisas estão um pouco mais centralizadas, por que que eu botei um padding, ou seja, um espalhamento interno no meu cabeçalho?

[06:35] Porque eu quero que tudo dentro dele esteja nesses limites, eu não quero que nada dentro do meu cabeçalho chegue na margem, eu quero que entre a margem e o conteúdo tenha esses 20 pixels para cima e para baixo. Com isso, a gente finaliza o nosso cabeçalho, a gente tem ele exatamente igual ao cabeçalho que a gente quer na nossa tela de exemplo.

# inline e inline block

- Os elementos ele ocupa 100% da pagina, fazendo que as demais elementos seja inseridos a baixo.
  quando queremos editar, informar as larguras, usamos o inline-block o inline quando quer exibir so o elemento dele 100 tamanho original

  <b>Reforçando o que a gente já viu em algumas das aulas anteriores, quando a gente tem uma lista, a lista é um elemento de bloco, ou seja, ele ocupa 100% da largura e cada um dos itens da lista também é um bloco, ele ocupa 100% da largura e o próximo item começa na linha de baixo.

  Nós já vimos algumas coisas para consertar esse comportamento, já vimos a exibição do elemento como inline, quando a gente quer que ele exiba somente o tamanho do conteúdo dele ou o inline block, por padrão, ele vai exibir a largura do conteúdo dele, mas ainda podemos alterar esse tamanho.

  Nós vamos com essa alternativa, nós vamos com inline block. Queremos que cada um dos elementos, ele tenha uma largura que nós vamos dizer e além disso, queremos que cada um desses elementos, fique um do lado do outro. Só que no nosso HTML. Vou fechar aqui novamente o cabeçalho.

  No nosso HTML, não criamos nada para facilitar a nossa marcação, ou seja, não temos uma classe ou identificador, vamos criar agora. A nossa lista, o nosso “ul”, vai ter uma classe chamada: produtos. E agora, no nosso CSS: .produtos “li”, vai ter o comportamento de display inline-block.
  </b>

# ESPAÇAMENTO COM BOX-SIZING

<b>Por último, para completar isso aqui, a gente repara que o nosso texto, ou seja, a nossa descrição, ela está muito colada na borda, está muito colada no fim do elemento, e aí, eu quero aumentar o espaçamento interno. O espaçamento interno é o padding, eu vou botar 30 pixels para cima e para baixo e 20 pixels para as laterais.

[01:47] Quando eu salvo isso e recarrego o navegador, reparem que o tamanho do elemento aumentou, antes eu tinha um elemento com 30% de largura, mas agora eu tenho um elemento com 30% de largura e mais 20 pixels para cada lado, o padding, o espaçamento interno, ele adicionou uma largura naqueles 30%.

[02:13] E aí, com isso, quebrou toda a minha conta, mas mexer com pixel, junto com percentual, é uma coisa que a gente faz no dia-a-dia e aí, tem uma forma para resolver isso. Hoje, o nosso CSS e o nosso navegador, eles estão somando percentual, mais os pixels.

[02:31] A gente tem como mudar a forma como ele pensa, para que o espaçamento lateral esteja dentro do percentual. E aí, para fazer isso, a gente usa uma propriedade chamada box-sizing: border-box, com isso aqui, os meus 30%, agora são definitivos, são sempre a largura e esses pixels de espaçamento interno, estão dentro desses 30%.

[03:02] Então, quando eu salvo isso e volto para o meu navegador, está lá. A gente tem um espaçamento interno de 20 pixels para cada lado e a gente tem um elemento ocupando 30% da largura. Para deixar isso aqui ainda mais perfeito, o nosso preço está muito colado na descrição.

[03:21] Então, eu vou no meu preço aqui e vou botar um espaçamento externo para cima de 10 pixels, para os lados zero e para baixo também zero. Isso aqui é a mesma coisa que a gente escrever: margin-top, 10 pixels, as duas descrições são iguais.</b>

# BORDAS

Três elementos define a borda:

- border-color: ;
- border-width: ;
- border-style: ;

Ou um jeito mas simplicado definindo as tres: <br>

- border: 2px solid #000000; = tamanho = 2px, solid = formato e style = cor

* Na estrutura de "caixas" do CSS, a borda fica posicionada entre o padding e a margin.

## Canto arrendodado da bordas.

- border-radius: 10px; = arredonda as bordas pra todo sentindo ou podemos especiar como: border-radius: 10px 20px 20px 30px;

# COMPORTAMENTO AO PASSAR O MOUSE

<b>O nosso link, o nosso “a”. Então para isso, eu vou botar um “a”, “:” e o hover, que é o comportamento que eu quero mapear. Só que na minha estrutura, eu não quero pegar todos os links quaisquer da página, eu quero pegar os links que estão dento do menu de navegação.

Então, quando eu tenho nav a, ou seja o link da navegação, eu tenho o comportamento padrão, quando eu tenho hover a nav, eu tenho, quando o mouse estiver por cima dos links, dentro do menu de navegação e aqui, a gente pode criar o estilo que a gente quiser, por exemplo, eu posso botar uma cor extremamente complexa.

Só para a gente praticar isso, aqui, eu posso o botar o color #C78C19, essa cor, quando eu recarregar a minha página, a gente consegue perceber que é um amarelo meio estranho, uma mostarda.</b>

- nav a:hover { <BR>
  color: #c78c19;<BR>
  text-decoration: underline;<BR>
  } - Então eu pego o nav a pq é os links referindo que aonde eu quero que esses efeitos ocorra.

- .produtos li:active{<BR>
  border-color: green;<BR>
  } - Quer dizer que so vai ser ativo quando eu clicar no elemento e vai ter o efeito.

# HOVER NO TITULO

O nosso título, ele tem um tamanho de fonte especificado, a nossa descrição e o nosso preço também. O título tem o tamanho de 30 pixels, a descrição de 18 e o preço de 22, como faço então, para que, quando o mouse estiver por cima do elemento, eu consiga afetar outro elemento dentro dele?

Para fazer isso, eu quero quando no produtos “li”, o mouse estiver por cima, ou seja, hover no “li” dos produtos, eu quero alterar o h2, que está dentro dessa estrutura, vamos reler isso aqui. Eu quero que o h2, quando o mouse estiver por cima do “li” dos produtos, ele tenha, agora sim, o tamanho de fonte de 40 pixels.

FICARIA ASSIM:

- .pre_container li:hover h2 { <BR>
  font-size: 34px;<BR>
  }

  - Quer dizer quando mouse estiver em cima do meu li/caixa/div, quando ele tiver no modo hover, o titulo h2 altere a font dele tb, como o exemplo acima.

No hover, mapeamos o comportamento do mouse por cima do elemento, e podemos usar isso para destacar visualmente o elemento em questão.
