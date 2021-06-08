interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    }
  }
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      // Adicionar aqui um email padrao que você tenha dentro do SES da Amazon
      email: 'email@example.com',
      name: 'Nome Sobrenome'
    }
  }
} as IMailConfig;
