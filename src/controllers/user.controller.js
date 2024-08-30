import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";

const registerUser = asyncHandler(async (req, res) => {

// get user details from frontend
// validation - non empty
// check if user already exit : username, email
// check for images check for avatar
// upload them to cloudinary, avatar
// create user object - create entry in db
// remove password and refresh token field
// check for user creation 
// return res

const {fullName, email, username, password } = req.body
console.log("email", email);

if(fullName == " ") {
    throw new ApiError(400, "fullname is required")
}

if(
    [fullName, email, username, password].some
) {

}

});

export { registerUser };
