## LabenuSystem:

- Grupo: Ana Terra, Lais Petra, Tatiana Fischer

- No arquivo Class.ts, temos a interface User, que é implementada pela class Studantes que representam estudantes da instituição. Possuem id, nome, email, data de nascimento e os principais hobbies dele. 

- No arquivo Teatcher.ts temos a class Teatcher, que tambem implementa a interface User, representando os docentes da instituição. Possuem id, nome, email, data de nascimento e todas as especialidades dele (React, Redux, CSS, Testes, Typescript, Programação Orientada a Objetos e Backend, configurados num ENUM)

- No arquivo Mission.ts se encontra a class abstrata Mission, com id, nome, data de início, data de término, lista de professores responsáveis, uma lista de alunos e módulo atual em que a turma está. Existem também filhos dessa classe (FullTimeMission e NightMission - a segunda possui conferência de cumprimento do requisito de nome). 

- Todas as classes anteriores tem um Manager responsável por escrever e ler dados do arquivo json específico. 

- Todas as funcionalidades básicas funcionam: criar estudante, criar docente, criar turma, adicionar estudante na turma, adicionar docente na turma, pegar a idade de algum estudante a partir do id.
