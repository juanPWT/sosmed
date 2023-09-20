import jwt from "jsonwebtoken";
import response from "../utils/response.js";

export const verifyLogin = (req, res, next) => {
  const authHeaders = req.headers["authorization"];
  const token = authHeaders && authHeaders.split(" ")[1];
  if (token == null) {
    return response(401, "failed login", "your not login!!", res);
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decode) => {
    if (err) return response(403, "forbiden", "wrong token", res);
    req.email = decode.email;
    next();
  });
};
