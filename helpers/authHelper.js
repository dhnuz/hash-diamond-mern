import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  try {
    const salt = 10;
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
  } catch (err) {
    console.log(`error in authHelper${err}`);
  }
};

export const comparePassword = async (password, hasedPassword) => {
  return bcrypt.compare(password, hasedPassword);
};
