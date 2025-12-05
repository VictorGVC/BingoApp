# BingoApp

## Sobre o projeto

BingoApp é uma jogo de bingo simples e divertido desenvolvido para gerar cartões de bingo e permitir a realização de sorteios/jogos de bingo de forma prática.
O objetivo é oferecer uma solução leve e fácil de usar para quem deseja brincar de bingo presencialmente sem os acessorios fisicos.

## Funcionalidades

- Geração automática de cartões de bingo (5x5).
- Interface amigável para marcar números chamados.
- Sorteador de números aleatorios.
- Visualização de números já sorteados.

## Tecnologias / Ferramentas usadas

- HTML para estruturação das páginas.
- CSS para estilo da página.
- JavaScript para sorteios, gerar cartelas e salvar informações de host e player.

---

## Como Utilizar

### 1. Acessar o Bingo

Acesse em todos os dispositivos o nosso bingo [Cliando Aqui](https://victorgvc.github.io/BingoApp/) ou atraves do link: https://victorgvc.github.io/BingoApp/

## 2. Escolha de papel

Um dos jogadores devera selecionar a opção de Host em seu dispositivo e o restante a opção de Player.

## 3. Se divertir

O jogador que está com a função de Host atraves do botão Sortear Número irá realizar os sorteios enquanto os Player deveram marcar em seus dispositivos os números ja sorteados

---

## Como rodar localmente

Caso queira jogar de maneira offline em lan ou jogar com alterações no projeto.

### 1. Clone o repositório

```bash
git clone https://github.com/VictorGVC/BingoApp.git
```

### 2. Abra o projeto

```bash
cd BingoApp
```

Abra a pasta no editor de sua preferência (VS Code recomendado).

### 3. Ligue o servidor

Nescessario ter o Python instaldo em seu computador.
Baixe no [site oficial](https://www.python.org/downloads/) ou pela *MicrosoftStore* do Windowns.
Caso utilize Linux instale pelo terminal com o comando:
`sudo apt-get install python3 ` Ou com o comando especifico de sua distribuição.

Use o servidor HTTP simples do Python a partir da pasta do projeto:

```bash
python -m http.server 8000
```

Após executar, o servidor estará disponível em:

```
http://localhost:8000
```

### 4. Conecte ao servidor (jogadores)

Os jogadores devem acessar via navegador, usando o **IP da máquina host** seguido da porta:

```
http://SEU_IP_LOCAL:8000
```

Exemplo:

```
http://192.168.0.12:8000
```

Certifique-se de que todos estejam conectados à mesma rede Wi-Fi / LAN.
Se o host estiver usando firewall, libere a porta 8000 para acesso local.

---

## Licença

Este projeto está licenciado sob a licença **MIT**.
