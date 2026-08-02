# Leet-Codas

Acervo de soluções de desafios do [LeetCode](https://leetcode.com/), resolvidos
por mim e por alguns amigos, seguindo a trilha de LeetCode do
[roadmap.sh](https://roadmap.sh).

A ideia é acompanhar a trilha de forma organizada: cada desafio resolvido vira um
**módulo próprio, numerado de forma ascendente**, e dentro dele **cada colaborador
envia a sua própria solução em um arquivo separado**. Assim dá pra estudar o
histórico, comparar abordagens diferentes e revisitar soluções com facilidade.

## 📁 Estrutura

Cada desafio recebe um módulo em uma pasta numerada, na ordem em que é resolvido.
Dentro do módulo, há um arquivo de solução por colaborador:

```
Leet-Codas/
├── 001-two-sum/
│   ├── README.md         # enunciado, link e observações
│   ├── solution_eder.py  # solução do Eder
│   └── solution_maria.py # solução da Maria
├── 002-add-two-numbers/
│   ├── README.md
│   └── solution_eder.py
└── ...
```

Convenção do nome da pasta: `<número>-<slug-do-desafio>`

- **número**: sequencial e ascendente, com 3 dígitos (`001`, `002`, ...).
- **slug**: o nome do desafio em minúsculas, com hífens no lugar de espaços.

Convenção do nome do arquivo de solução: `solution_<colaborador>.py`

- Um arquivo por colaborador — cada pessoa cria e mantém a **sua própria** solução.
- Nunca edite o arquivo de outra pessoa; se quiser propor algo, crie o seu.

## ➕ Como adicionar um novo desafio

**Se o desafio ainda não existe:**

1. Descubra o próximo número disponível (o maior existente + 1).
2. Crie a pasta seguindo a convenção, ex.: `003-longest-substring/`.
3. Preencha o `README.md` da pasta com:
   - link para o desafio no LeetCode;
   - o enunciado (ou um resumo);
   - a dificuldade.
4. Adicione o seu arquivo `solution_<colaborador>.py` com a sua implementação.
5. Registre o desafio na tabela de [Índice](#-índice) abaixo.

**Se o desafio já existe e você quer enviar a sua solução:**

1. Entre na pasta do desafio já criada.
2. Adicione o seu próprio arquivo `solution_<colaborador>.py` — sem mexer nos
   arquivos dos outros.

## 📚 Índice

| #   | Desafio | Dificuldade | Módulo |
| --- | ------- | ----------- | ------ |
| —   | _Ainda não há desafios resolvidos_ | — | — |

## 🤝 Colaboração

Este é um repositório colaborativo. Ao contribuir:

- Um módulo por desafio — não misture desafios diferentes na mesma pasta.
- **Uma solução por colaborador, em arquivo separado** (`solution_<colaborador>.py`).
  Cada pessoa mantém apenas o seu arquivo e não edita o dos outros.
- Mantenha o [Índice](#-índice) atualizado.
