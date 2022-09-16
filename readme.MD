# Testes no Carrinho da Amazon

Foram identificados alguns casos de testes utilizando manualmente o carrinho de compras da amazon. 

**Pré condições:** Usuário visitante, não tem necessidade de estar logado. 

**Ambiente:** Windows 11 / Navegador Google Chrome Versão 105.0.5195.102.

**Ferramenta utilizada:** JavaScript, Cypress, vsCode, NodeJS. 

Para startar o projeto, clonar o repositório:

    git clone https://github.com/dosantosbjj/cart-amazon-tests

Em seguida, efetuar a instalação dos pacotes necessários:

    npm install
   
Para executar os testes, rodar o comando:

    npx cypress open

Os testes são todos autoexplicativos e rodam em uma interface interativa e de uso facilitado. 
Para executar os testes é só selecionar uma das suítes: amazon-cart-tests.spec.js que os testes irão executar um após o outro, em seguida exibindo os resultados.
Obs.: Podem ocorrer alguns erros ao carregar os diversos e pesados recursos do site, mas dêem mais uma chance pra um testador iniciante rodando novamente a suíte de testes. 

# 
Agradeço ao pessoal da DOT Digital Group pela oportunidade de colocar alguns conceitos em prática, encontrei dificuldade para identificar alguns elementos mas estou buscando conhecimentos para facilitar a desenvoltura dos testes. Vale ressaltar que embora tenha passado uma "raivinha" básica, foi muito divertido fazer esses testes e identificar alguns cenários diferenciados de teste. 

Espero que não seja o último contato e que possamos debater sobre as técnicas utilizadas e trocar alguns conhecimentos e experiências. 

Pra uma próxima implementação, que farei em outro dos sites listados, utilizarei massas de dados pra variar produtos, explorando outros recursos do framework que ainda estou aprendendo.
Obrigado e até logo! 

 


