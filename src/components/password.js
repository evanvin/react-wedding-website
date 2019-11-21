import Cookies from "js-cookie";
import passwordHash from "password-hash";
const hashed = "sha1$41856d60$1$eb1e8dc762f9df078a280cc98eb2e65b8641dcf1";
const COOKIE_KEY = "bishiguerra-wedding";

const uuid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const isValidCookie = cookie => {
  const parts = cookie.split(".");
  if (parts.length === 4 && parts[0] === "bishy") {
    const num1 = parseInt(parts[1]);
    const num2 = parseInt(parts[2]);
    return Math.abs(num1 - num2) === 408;
  }
  return false;
};

export const createValidCookieString = () => {
  const num1 = Math.floor(Math.random() * 2000000);
  const num2 = Math.abs(num1 - 408);
  return `bishy.${num2}.${num1}.${uuid()}`;
};

export const generateCookie = () => {
  Cookies.set(COOKIE_KEY, createValidCookieString());
};

export const checkCookie = () => {
  const cookies = Cookies.get();
  return cookies[COOKIE_KEY] != undefined && isValidCookie(cookies[COOKIE_KEY]);
};

export const checkPassword = pass => {
  return passwordHash.verify(pass, hashed);
};
