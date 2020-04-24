import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface TransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}
// CAMADA RESPONSÁVEL PELAS REGRAS DE NEGÓCIO
class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: TransactionDTO): Transaction {
    // validação de tipo de caractere inserido dentro do type (tipo de transação)
    if (!['income', 'outcome'].includes(type)) {
      throw new Error('Invalid transaction type');
    }
    // Validação para ver se o valor retirado é inferior ou igual ao valor total do balance
    const { total } = this.transactionsRepository.getBalance();

    if (type === 'outcome' && total < value) {
      throw new Error('Your outcome can not be bigger then your balance');
    }

    const transaction = this.transactionsRepository.create({
      title,
      type,
      value,
    });

    return transaction;
  }
}

export default CreateTransactionService;
