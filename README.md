# Construction-budget-backend


### REQUISITOS

- [x] CRIAR CONTA (UTILIZANDO EMAIL PARA LOGIN)
- [x] ATUALIZAR CONTA
- [x] DELETAR CONTA
- [x] OBTER DADOS DA CONTA
- [] CONSUMIR API PAGAMENTOS ATRAVÉS DE PLANOS (MENSAL, TRIMESTRAL E ANUAL)

# REGRAS DE NEGÓCIOS

### ORCAMENTOS
- [] CRIAR ORÇAMENTO (INSERINDO TODOS OS DADOS NECESSÁRIOS)
- [] CRIAR SUBETAPAS DO ORÇAMENTO
- [] CRIAR ITENS COM BASE NAS TABELAS OFICIAIS E INSERIR QUANTIDADES
- [] INSERIR BDI GLOBAL DA OBRA
- [] GERAR XLS DO ORÇAMENTO SINTÉTICO (COM CABEÇALHO E VALOR TOTAL)

# MANUTENÇÃO
- [] CRIAR TABELA (INSERINDO NOME E ARQUIVOS XLS)
- [] DELETAR TABELA

# USUARIO

- [] NÃO PODE SER POSSÍVEL CADASTRAR UMA CONTA COM MESMO CPF/CNPJ
- [] NÃO PODE SER POSSÍVEL CADASTRAR UMA CONTA COM MESMO EMAIL
- [] BLOQUEAR USUÁRIO QUANDO PAGAMENTO ESTIVER PENDENTE (PODE ACESSAR OS ORÇAMENTOS, MAS NÃO PODE EDITAR NEM BAIXAR EM XLS, APENAS EM PDF)

### NÍVEIS DE ACESSO

- [] USUÁRIO (PAGAMENTO OK OU PENDENTE)
- [] SUPORTE (ACESSO AOS ORÇAMENTOS DOS CLIENTES)
- [] MANUTENÇÃO (INSERIR TABELAS NOVAS PARA CONSULTA PELAS REQUISIÇÕES)