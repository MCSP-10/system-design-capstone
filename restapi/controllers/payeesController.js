import payeesModel from '../model/payeesModel.js';

const payeesController = {};

payeesController.getAll = async (req, res) => {
    const data = await payeesModel.getAll(req.params.id);
    res.json(data);
};

payeesController.getOne = async (req, res) => {
    const data = await payeesModel.getOne(req.params.payee_id);
    res.json(data);
};

payeesController.addOne = async (req, res) => {
    const data = await payeesModel.addOne(req.params.id, req.body);
    res.json(data);
};

payeesController.deleteOne = async (req,res) => {
    const data = await payeesModel.deleteOne(req.params.payee_id);
    res.json(data)
}

payeesController.changeOne = async (req,res) => {
    const data = await payeesModel.changeOne(req.params.payee_id, req.body)
    res.json(data)
}

export default payeesController;