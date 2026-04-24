import bcryptjs from "bcryptjs"





async function hashing(password, saltRounds)
{
	return (await bcryptjs.hash(password, saltRounds));
}

async function  checker(username, password)
{
	if (!username || username.length < 3)
    {
    	return (
            {
				message: "Username must be at least 3 characters",
				success: false,
				status: 400 }
        );
    }

    if (!password || password.length < 6)
    {
        return(
            {message: "Password must be at least 6 characters",
				success: false,
			status: 400 }   
        );
    }

	return ({message : "good", status : 200, success: true});
}





export {hashing, checker}