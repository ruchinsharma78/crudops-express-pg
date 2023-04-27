const getUserByEmailandId="SELECT * FROM getusers($1,$2)"
const updateUserEmail="SELECT * FROM updateusersemail($1,$2)"
module.exports = {
    getUserByEmailandId,updateUserEmail
};



