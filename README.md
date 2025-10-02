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

### Frontend
1) Abra um terminal na pasta `frontend`;
2) Instale as dependências com `npm install`;
3) Configure a MetaMask no seu navegador para se conectar a uma das contas do Hardhat;
   1) Escolha configurar rede manualmente;
   2) Insira o endereço `http://127.0.0.1:8545`;
   3) Use uma das chaves que apareceram no terminal do metamask;
3) Abra o arquivo `index.html` no seu navegador;
4) Use a interface para escrever posts.

Para ter duas instâncias rodando ao mesmo tempo, abra dois navegadores distintos,
cada um configurado com uma chave do Hardhat diferente. 

## Como Usar

1) Um username aleatório é gerado no topo da página;
2) Escreva uma mensagem na caixa de texto;
3) Aperte o botão ao lado da caixa;
4) A mensagem é replicada nos dois navegadores.