# Comandos para git e GitHub
Neste arquivo iremos fazer um resumo de comandos para utilização do 
git e Github nas aulas de Desenvolvimento Web da Fatec Jahu.

## Comandos do Terminal
Para ir até o C: ou qualquer raiz da unidade do Windows utilizamos a \
```bash
cd \
```
**IMPORTANTE:** O CD troca de pastas no Prompt.

Para criar pastas utilizamos o mkdir
```bash
mkdir nome-da-pasta-sem-espaço
```

Para entrar na pasta criada utilizamos o CD
```bash
cd nome-da-pasta-sem-espaço
```

Para abrir o explorer na pasta chamamos ele com 1 ponto
```bash
explorer .
```

Para voltar a pasta anterior utilizamos 2 pontos
```bash
cd ..
```
> Estes comandos são utilizados para navegação no windows e devem ser repetidos conforme a necessidade de cada ação.

<br>

## Comando do Git
Para utilizar o git precisamos instalar no computador através do site:(https://git-scm.com/).<br>

**OBSERVAÇÃO:** Para utilizar o git é necessário estar dentro da pasta do projeto que deseja versionar. <br>

**IMPORTANTE:** Não é possivel versionar uma pasta dentro de outra pasta que já está sendo versionada pelo git.

**CONFIGURAR O USUÁRIO E E-MAIL**
```bash
git config --global user.name "Tainara Santos"
git config --global user.email "tainaravit.santos28@gmail.com"
```

Para começar a versionar uma pasta com git utilizamos o comando `init`:
**OBS:** Só é executado uma vez.
```bash
git init
```

Podemos ver a situação do repositório a qualquer momento com `status`:
```bash
git status
```
**VERMELHO:** Quando os arquivos estão em vermelho, foram criados ou editados e não estão prontos para serem salvos, precisa rodar o `add`.

**VERDE:** Quando os arquivos estão verdes, já foram preparados para serem salvos, próximo passo é rodar o `commit`.

Para adicionar e preparar os arquivos para serem salvos utilizamos o `add`:
```bash
git add .
```

Para salvar uma versão dos arquivos preparados utilizamos o `commit`:
```bash
git commit -m "Porque estou salvando"
```

Para sincronizar o repositório local com um criado no Github, utilizamos o `remote`
```bash
git remote add origin <URL>
```
> O melhor caminho é utilizar a segunda parte de comandos que são apresentandos na página do Github após criar um repositório.

Para enviar os commits para o GitHub utilizamos o `push`
```bash
git push
```
> Na primeira execução deve ser utilizado o push como apresentado na página do Github.

Para receber as alterações feitas em outro computador que estão no Github para o computador atual usamos o `pull`
````bash
git pull
````