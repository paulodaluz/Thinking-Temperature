# Descrição do Projeto
Este projeto foi desenvolvido com o intuito de atender aos requisitos de um trabalho da faculdade, condizente a matéria de Internet of Things.

## Objetivo do Projeto
O objetivo deste trabalho é o desenvolvimento de soluções funcionais passíveis de integrarem ambientes de Internet das Coisas(IoT).

Definições específicas:

- Os alunos serão divididos em grupos de até 4 (quatro) participantes;
- Cada grupo deverá desenvolver uma solução para IoT;
- Cada grupo poderá optar por desenvolver a sua solução seguindo uma das
seguintes abordagens: Software-based, Hardware-based;
- O grupo deverá desenvolver uma justificativa para que a solução desenvolvida
encaixe com ambientes de IoT;
- A solução poderá ser para qualquer área da IoT: Cidades Inteligentes,
Indústria 4.0, Agricultura, Trânsito, Saúde, Educação, Casas Inteligentes, entre
outras;
- A solução deverá possuir uma identidade visual e um nome fantasia que a
represente;


#### Abordagem Software-based:
- Desenvolvimento focado na parte de Software;
- Qualquer linguagem de programação poderá ser utilizada pra o desenvolvimento;
- Nesta abordagem, o grupo poderá simular um dispositivo físico no back-end.
- O input e output de dados deve ser feito para um arquivo .txt, banco de dados, ou Web Service. Por exemplo: o grupo poderá criar um arquivo .txt com todas as entradas de um sensor de temperatura hipotético;
- A solução deverá obrigatoriamente seguir a abordagem de Middleware vista em sala de aula;
- A solução deverá possuir uma interface gráfica intuitiva para atuação ou sensoriamento sobre os dispositivos no front-end, sendo eles simulados ou não;



#### Abordagem Hardware-based:
- Desenvolvimento focado na parte de Hardware;
- O grupo deverá montar o circuito com os sensores e atuadores disponíveis para uso,
além da placa de desenvolvimento Arduino UNO e/ou Raspberry Pi 3 para back-end;
- Qualquer linguagem de programação poderá ser utilizada pra o desenvolvimento na
parte de Software front-end;
- A solução deverá obrigatoriamente seguir a abordagem de Middleware vista em sala
de aula;
- O grupo poderá utilizar os softwares vistos em aula: Blynk e Remote XY. Porém, é
necessário que o grupo desenvolva soluções próprias para trabalhar em conjunto
com os softwares mencionados;
- São sensores disponíveis para uso: temperatura, proximidade, luminosidade,
acelerômetro e giroscópio, botões;
- São atuadores disponíveis para uso: leds, LCD, servo motores, buzzer, módulo relé.

## Idéia

#### Método escolhido: 
Modelo Híbrido (Software-based e Hardware-based);

#### Solução:
Desenvolver um sistema com a finalidade de poder detectar quantas pessoas estão presentes em um determinado recinto, efetuando o controle de temperatura ativando / desativando o ar-condicionado conforme a temperatura ambiente e determinadas regras;

#### Justificativa: 
A nossa ideia foi feita com base em um pensamento mais econômico em relação ao modo de como usamos a energia. O projeto consiste em dois sensores ultrassônicos sondando uma porta para determinar quantas pessoas estão dentro de um recinto, e com a ajuda de um sensor de temperatura, determinar se o arduino deve ou não fazer um ajuste na temperatura do local. Tendo algumas regras para ligar e desligar o ar-condicionado (baseando-se no horário do dia) e para determinar a alteração da temperatura, além de deixar o local com uma boa ambientação, também evita os gastos desnecessários de energia, já que o próprio arduino determina quando se deve ou não ligar o ar-condicionado e se ele necessita de uma alteração na sua temperatura (levando em conta o número de pessoas dentro do recinto, a temperatura ambiente e o horário do dia).

#### Componentes: 
Para o nosso trabalho foram utilizadas os seguintes componentes:
- 1x Arduino UNO;
- 2x Protoboards;
- 1x Cabo de Alimentação;
- 53x Jumpers;
- 1x Sensor de Temperatura;
- 2x Sensores Ultrassônicos;
- 1x Display LCD;
- 1x Potenciômetro.

## Tecnologias Utilizadas
As técnologias utilizadas foram NodeJS, NPM, React, Firebase e Arduino.

## Bibliotecas utilizadas
* axios versão 0.19.0,
* bootstrap versão 4.3.1,
* firebase versão 7.2.1,
* react versão 16.9.0,
* react-bootstrap versão 1.0.0-beta.12,
* react-dom versão 16.9.0,
* react-router-dom versão 5.0.1,
* react-scripts versão 3.1.1,
* react-spinners versão 0.6.1

## Como instalar a aplicação
Basta apenas baixar o projeto, abrir a pasta ```frontend``` no terminal e digitar o comando ```npm install```, que ele ira instalar todas as bibliotecas.

## Como utilizar a aplicação localmente
Para startar o projeto você pode digitar o comando ```npm start``` na pasta ```frontend``` do projeto.

Após isso ele irá abrir na porta `3000` no seu localhost, ou seja, basta apenas entrar em `localhost:3000`.

## Como realizar o build da aplicação
Para realizar o build do projeto você deve abrir o terminal na pasta do projeto e digitar o comando `npm run build` no diretório do projeto. Ele irá gerar tudo dentro da pasta build, pronto para ser usado.

## Desenvolvedor
[Paulo Ricardo da Luz Júnior](https://www.linkedin.com/in/paulo-ricardo-da-luz-j%C3%BAnior-5a3953164/)

[Alisson Muhammad](https://www.linkedin.com/in/alissonmuhammad/)

[Vithor Gabriel]
