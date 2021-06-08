# Recuperação de senha

**Requisitos Funcionais**

- Usuário deve poder recuperar sua senha informando o seu email;
- O usuário deve receber um email com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**Requisitos Não Funcionais**

- Utilizar Mailtrap para testar envios de desenvolvimento;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**Regras de Negocios**

- O link enviado por e-mail para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar a senha;

# Atualização do perfil

**Requisitos Funcionais**

- O usuário deve poder atualizar seu perfil seu nome, e-mail e senha;

**Regras de Negocios**

- O usuário não pode alterar seu e-mail para um e-mail ja utilizado;
- Para atualizar sua senha, o usuário deve infomar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;


# Painel do prestador

**Requisitos Funcionais**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder vizualizar as notificações não lidas;

**Requisitos Não Funcionais**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**Regras de Negocios**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

# Agendamento de serviços

**Requisitos Funcionais**

- O usuário deve poder listar todos os prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponivel de um prestador;
- O usuário deve poder listar horários disponíveis de um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**Requisitos Não Funcionais**

- A listagem de prestadores deve ser armazenada em cache;

**Regras de Negocios**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis atre 8h às 18h (Primeiro às 8h, Último às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviço consigo mesmo;
