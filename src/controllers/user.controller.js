import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";

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

  const { fullName, email, username, password } = req.body;
  console.log("email", email);

  if (fullName == " ") {
    throw new ApiError(400, "fullname is required");
  }

  if (
    [fullName, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser)
    throw new ApiError(409, "User with email or username already exit");

  const avatarLocalPath = req.files?.avatar[0]?.path;

  const coverImageLocalPath = req.file?.coverImage[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }
  const avatar = await uploadOnCloudinary(avatarLocalPath);

  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  if(!avatar) {
    fullName,
    throw new ApiError(400, "Avatar file is required");
  }
});

export { registerUser };
