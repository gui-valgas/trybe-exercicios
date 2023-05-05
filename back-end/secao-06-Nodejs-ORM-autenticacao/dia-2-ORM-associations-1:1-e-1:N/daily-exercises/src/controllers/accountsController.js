const AccountsService = require('../services/accountsService');

const getAccountById = async (req, res) => {
  try {
    const { id } = req.params;
    const account = await AccountsService.getAccountById(id);

    if (!account) {
      return res.status(404).json({ message: 'Nenhuma conta cadastrada' });
    }

    return res.status(200).json(account);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Algo deu errado!' });
  }
};

// lazy loading
const getAccountByIdLazy = async (req, res) => {
  try {
    const { id } = req.params;
    const account = await AccountsService.getAccountByIdLazy(id);

    if (!account) {
      return res.status(404).json({ message: 'Nenhum conta cadastrada' });
    }

    return res.status(200).json(account);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Algo deu errado!' });
  }
};

// Bonus exercises:
const saveAccountAndProfile = async (req, res) => {
  try {    
    const save = await AccountsService.saveAccountAndProfile(req.body);

    if (save.message) {
      return res.status(404).json(save);
    }

    return res.status(200).json({ message: 'Conta cadastrada com sucesso' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Algo deu errado!' });
  }
};

module.exports = {
  getAccountById,
  getAccountByIdLazy,
  saveAccountAndProfile,
};