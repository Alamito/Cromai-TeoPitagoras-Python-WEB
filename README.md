# 🧮 Teorema de Pitagoras 🔺
[![NPM](https://img.shields.io/github/license/Alamito/ConcertS.A.-TesterInterface-CSharp-Dotnet)](https://github.com/Alamito/ConcertS.A.-TesterInterface-CSharp-Dotnet/blob/main/LICENSE)

# 📜 Sobre o projeto 📜
<p align="justify">
Projeto dedicado ao desafio prático proposto pela empresa Cromai em seu processo seletivo, no qual tem como objetivo o desenvolvimento de uma calculadora de relação entre os lados de um triângulo retângulo, conhecido popularmente como Teorema de Pitágoras.

Para a resolução do projeto foram desenvolvidos dois sistemas: o Front-end e uma API junto com um endpoint.

### Front-end
Responsável por conter e apresentar ao usuário os elementos visuais do projeto, como a entrada de valores dos lados do triângulo. Além disso, também é encarregado de fazer a requisição da API (tipo GET) informando dois valores dos lados dos triângulos, bem como aquele que será calculado o valor.

### API
Responsável por receber os valores fornecidos pelo usuário que foram enviados pelo Front-end, após processar eles efetuando o cálculo do valor do lado do triângulo a ser descoberto e, por fim, retornar esse valor para ser consumido pelo Front-end.
</p>

# 🎥 Apresentação do projeto 🎥
<p align="justify">
A seguir está representada a aplicação, onde foram calculados dois valores de lados de triângulos, assim como testados a inserção de poucos, muitos e inválidos valores e, por fim, foi verificado a responsividade da página WEB e mostrada as requisições feitas à API.
</p>

https://user-images.githubusercontent.com/102616676/214167213-b5796748-7dae-4ec4-8767-6bb72f94e1ff.mp4

<p align="justify">

### O que está acontecendo "por debaixo dos panos"?
No momento que o usuário clica no botão "calcular", os dados são enviados para URL base da seguinte maneira:<br/><br/>
`
http://localhost:5000/triangleSides/{valor da hipotenusa};{valor do cateto a};{valor do cateto b}
`
<br/><br/>
Porém o lado que não possui valor (aquele que será calculado) é inserido na URL com o valor "0.0". Então, a API calcula o valor do lado seguindo o teorema de pitágoras:
</p>

$$
   hipotenusa^2 = a^2 + b^2
$$

<p align="justify">
onde: <b>a</b> e <b>b</b> são os catetos do triãngulo retângulo;<br/>
Após retorna duas informações: lado calculado e o valor dele. Por fim, o Front-end verifica essas informções e as informa ao usuário.

</p>

# 🧬 Tecnologias utilizadas 🧬
- HTML5, CSS3 e JavaScript;
- Módulos Node: Axios;
- Python;
- Dependências Python: Flask.

# ⏯ Como executar o projeto ⏯

### Requisitos
- Python e PIP.

```bash
# clonar repositório
git clone https://github.com/Alamito/Cromai-TeoPitagoras-Python-WEB.git

# entrar no diretório do programa
cd "Cromai-TeoPitagoras-Python-WEB"

# baixar os módulos Python
pip install -r requirements.txt

# entrar no diretório da API
python app.py

# voltar para o diretório do programa
cd..

# inicializar o Front-end
index.html
```

# ✍️ Autor ✍️
Alamir Bobroski Filho 
- www.linkedin.com/in/alamirdev

<p align = "center"><em>"O poder não vem do conhecimento mantido, mas do conhecimento compartilhado"</em></p> <p align = "center">Bill Gates</p>

