
`fluxograma`.

Se você nunca fez um fluxograma, confira este [recurso](https://www.youtube.com/watch?v=Lub5qOmY4JQ).

Se você nunca fez um fluxograma, confira este [recurso ll](https://www.youtube.com/watch?v=Lub5qOmY4JQ).

Se você nunca fez um fluxograma, confira este [recurso lll](https://www.youtube.com/watch?v=Lub5qOmY4JQ).

Se você nunca fez um fluxograma, confira este [recurso lV](https://www.youtube.com/leticiav=Lubkejfrngiuhdio5qOmY4JQ).



Uma alternativa ao fluxograma pode ser `pseudocódigo`.

### Planejamento

Neste projeto recomendamos o uso do **Github Projects**, ferramenta
de planejamento e organização do GitHub

Por meio de **issues** e **milestones** pode-se organizar e planificar
tarefas e objetivos concretos.

Levando em consideração os **entregáveis** do projeto,
[9. Checklist](#9-checklist) e os **passos** que foram definidos em seu
`fluxograma`, crie o seu  planejamento em GitHub Projects.

### Antes do código

Desta vez você estará trabalhando em **NodeJS**, certifique-se de
saber para que serve e suas considerações.

Em particular, é preciso decidir antecipadamente se usará
`ES Modules`, ou seja usar **import/export**, ou se utilizará
`CommonJS Modules`, ou seja **require/module.exports**.

Certifique-se de ter esta decisão clara desde o início para
que você não encontre problemas mais tarde.

### Ler um arquivo

Como primeiro desafio, você pode tentar ler um único arquivo com
um caminho fixo e imprimir seu conteúdo no console com um `console.log`.

A biblioteca nativa `FS` (FileSystem) será útil para você.

**Lembrar**: Para este projeto, sugerimos que você **não use**
a versão síncrona da função de leitura de arquivo,
`readFileSync`, e tente resolver esse desafio de forma assíncrona.

### Descobrir a extensão de um arquivo

Já sabendo ler um arquivo, aventure-se em saber qual
é a sua extensão.

Lembre-se, as extensões são aquelas letras no final do
nome de um arquivo, por exemplo: .js, .txt, .doc etc.

A biblioteca `FS` também pode ser útil aqui.

### Obter o conteúdo de um diretório

Este projeto consiste em buscar arquivos, mas para isso,
você deve primeiro ser capaz de vê-los.

Tenta imprimir para console a lista de arquivos em uma pasta.

A biblioteca `FS` também será útil aqui.

**Lembrar**: Para diminuir a complexidade de seu algoritmo
recursivo, recomendamos usar a versão síncrona da função
de leitura do diretórios, `readdirSync`.

### Definir rotas

Para acessar pastas e arquivos, será necessário
indicar onde eles estão localizados em seu computador, sendo
chamadas de **rotas**.

Use a biblioteca nativa `path` para unir dois segmentos de caminho,
Por exemplo, se quisermos juntar:

1) /home/Laboratório/
2) ./teste

O resultado seria: /home/Lab/test

### Recursão

Este projeto pode ser resolvido com
**recursão**.

Por que?

Porque não sabemos quantas pastas e arquivos
teremos que passar antes de terminar.

Se você receber um caminho de pasta, não saberá com antecedência se
há mais pastas dentro ou mais arquivos.

Portanto, certifique-se de entender o que o
recursão e veja alguns exemplos.

### Crie uma promessa

O valor de retorno da nossa biblioteca é uma `Promise`,
não um `Array`.

Tente ler sobre promessas e criando uma por
conta própria usando **new Promise()**

É importante que você saiba o que é um **callback** porque serão usadas
nas promessas.
