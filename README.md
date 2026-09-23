# Tela de Login - React + Vite

Tela de login em React para estudo de componentes.

## 1. O que precisa instalado

- Node.js LTS 18+ (já vem com npm) - https://nodejs.org
- Git
- VS Code (opcional)

Confere no terminal:

node -v
npm -v

## 2. Como rodar do zero

git clone https://github.com/kayone12/Tela-de-login.git
cd Tela-de-login
npm install
npm run dev

Abra o link que aparece no terminal, ex: http://localhost:5173

Para parar: Ctrl + C

## 3. Outros comandos

npm run build - gera pasta dist final
npm run preview - testa a build

## 4. Se der erro

- 'npm' não reconhecido -> reinstala o Node e fecha/abre o terminal
- porta em uso -> npm run dev -- --port 5174
- erro após pull -> apaga node_modules e package-lock.json e roda npm install de novo
- vite não encontrado -> roda npm install antes do dev
