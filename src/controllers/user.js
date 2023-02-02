import userData from ('../data/userData');
const getAllUsers = (req, res) => {
    res.status(200).json(userData);
};
const createUser = (req, res) => {
    userData.push(req.body);
    res.status(200).json(userData);
};
module.export = { getAllUsers, createUser };


