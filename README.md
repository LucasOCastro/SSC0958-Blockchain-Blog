# Rede Social em Blockchain - USP
Projeto realizado para a disciplina SSC0958 - Criptomoedas e Blockchain (2025).

## Descrição
Uma página web simples que permite escrever e ler posts armazenados em uma Blockchain, hospedada no Hardhat e acessível por MetaMask.

Os posts são armazenados inteiramente on-chain para fins didáticos. Em uma aplicação real, seria mais viável
armazenar CIDs ou outra informação de rastreio/autoria, e armazenar textos/mídia em um banco de dados separado.

## Como Rodar
### Hardhat
1) Abra um terminal na pasta `hardhat`;
2) Instale as dependências com `npm install`;
2) Compile os contratos com `npx hardhat compile`;
3) Execute um nó local com `npx hardhat node`;
4) Aguarde as contas aparecerem no terminal.

Agora você tem uma rede Ethereum local rodando com 20 contas. Mantenha o terminal anterior aberto.

Precisamos ainda fazer o deploy do contrato:
1) Abra outro terminal na pasta `hardhat`;
2) Execute o deploy com `npx hardhat run scripts/deploy.js --network localhost`;
3) Espere a mensagem de confirmação.

O script de deploy preencheu os arquivos de configuração na pasta de frontend.

### Metamask
Recomendo criar um perfil do navegador separado para cada página, para poder configurar
a extensão Metamask separadamente. No Firefox, isso pode ser feito
na página ``about:profiles``.

No novo perfil:
1) Instale a extensão metamask e crie uma nova conta;
2) Conecte-se à rede do Hardhat:
   1) Clique no nome da rede atual (abaixo da aba "Tokens");
   2) Selecione a aba "Custom";
   3) Clique no botão "Add custom network";
   4) Em "Default RPC URL" insira `http://127.0.0.1:8545`;
   5) Em "Chain ID" insira `31337`;
   6) A extensão vai sugerir um `Network name` e `Currency symbol`;
   7) Aperte "Save".
3) Configure uma das contas geradas:
   4) Clique no nome da conta atual (canto superior esquerdo);
   5) Clique no botão "Add account or wallet";
   6) Selecione a opção "Private Key";
   7) Insira uma das chaves que apareceram no console do hardhat (Cuidado para copiar o valor exato de uma private key, sem espaços antes ou depois)
   8) Salve e nomeie a conta.

Se a configuração está correta, deve exibir uma conta com aproximadamente 10.000 moedas.

Nos outros navegadores de teste, apenas repita o processo e use outra Private Key na hora de adicionar a conta.

### Frontend
1) Abra um terminal na pasta `frontend`;
2) Instale as dependências com `npm install`;
3) Garanta que o http-server está instalado com `npm install -g http-server`;
4) Execute o servidor com o comando `http-server`;
5) Abra a url que aparecer no terminal;
6) Aprove a conexão com a metamask na conta de teste.

## Como Usar

1) Um username aleatório é gerado no topo da página;
2) Escreva uma mensagem na caixa de texto;
3) Aperte o botão ao lado da caixa para submeter;
4) Confirme a transação na metamask;
5) A mensagem é replicada nos dois navegadores.