const pool = require("../../db");
const queries = require("./queries")

const updateUserEmail = async (req, res) => {

    const { oldEmail = null, newEmail = null } = req.body;
    try {
        if (!oldEmail && !newEmail) {
            res.json({ message: "Data Not Found!" })
        }
        else {

            const { rows } = await pool.query(queries.updateUserEmail, [oldEmail, newEmail])
            const {updateusersemail} = rows[0];
            if(updateusersemail)
            {
                res.status(200).json({message:"Record(s) updated successfully!"})   
            }
            else
            {
                res.status(404).json({message:"No Record Found!"})        
            }
        }
    }
    catch(error){
        res.status(400).json(error);
    }
    }


const getUserByEmailandId = async (req, res) => {
    /**
     * Destructuring from req.body object
     * email=null means if a key named email is not present by default it will keep it as null
     * id=null means if a key named id is not present by default it will keep it as null
     */
    const { email = null, id = null } = req.body
    try {
        const { rows } = await pool.query(queries.getUserByEmailandId, [id, email])
        if (!email && !id) {
            res.json({
                message: "No Data Found"
            })
        } else {
            res.status(200).json(rows)
        }

    } catch (error) {
        res.status(400).json(error)
    }


}



module.exports = {
    getUserByEmailandId, updateUserEmail
};
