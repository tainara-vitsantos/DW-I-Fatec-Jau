# comandos para git e GithHub
Neste arquivos iremos fazer um resumo de comandos para utilização do git e github nas aulas de Desenvolvimento Web na Fatec Jahu


## Comandos do Terminal
Para ir ate o C: ou qualquer raiz da unidade do Windows utilizamos a \
```bash
cd \
```

**IMPORTANTE:** O CD troca de pastas no pormpt.

Para criar pastas utilizamos o mkdir
```bash
mkdir nome-da-pasta-sem-espaço
```

Para entrar na pasta criada utilizamos o CD 
````bash
cd  nome-da-pasta-sem-espaço
````

Para abir o explorer na pasta chamamos ele com 1 ponto
````bash
explorer . 
````
 Para voltar a pasta anterior utilizamos 2 pontos 
 ````bash
cd  ..
````

>Estes comandos são utilizados para navegação no windows e deve ser repetidos conforme a necessidade de cada ação.

<br>

## comando do Git
Para utilizar o git precisamos instalar no computador através do site:(https://git-scm.com/).<br>

**OBSERVAÇÃO:** Para utilizar o git é necessário estar dentro da pasta do projeto que deseja versionar. <br>

**IMPORTANTE:** Não é possivel versionar uma pasta que já esta sendo versionada pelo git. 

Para começar a versionar uma pasta com git utilizamos o comando `init`
**OBS** Só é executado uma vez.
````bash
git init
````

Podemos ver a situação do repósitório a qualquer momento com `status`:
````bash
git status
````

Ao usarmos o `add` salvamos o código até onde codamos e com isso, na próxima vez que entrarmos nele, ele estará da mesma forma na qual salvamos da última vez
**OBS** Caso seja feita alguma modificação no código após salvar pelo `add` e não ser feita  mesma coisa, não ficará salvo! (é possivel vizualizar isso no gih status).

Ao usarmos o `commit` enviamos uma mensagem como um porque fizemos tudo até então dentro do código, justificando os últimos passos.

**VERMELHO** Quando os arquivos estão em vermelho, foram criados ou editados e não estão peontos para serem salvos,precisa rodar o `add`.

**VERDE** Quando os arquivos estão em verdes, já foram preparados para serem salvos próximo passo é rodar o `commit`. 

