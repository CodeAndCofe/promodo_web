import bcryptjs from "bcryptjs"





async function hashing(password, saltRounds)
{
	return (await bcryptjs.hash(password, saltRounds));
}






export {hashing}