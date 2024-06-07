import { LogLevel, Configuration } from "@azure/msal-browser";

const clientId = import.meta.env.VITE_CLIENT_ID;
const authority = import.meta.env.VITE_AUTHORITY;

export const msalConfig: Configuration = {
  auth: {
    clientId: clientId,
    authority: authority,
    postLogoutRedirectUri: "/",
    redirectUri: "/",
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.info(message);
            return;
          default:
            console.info(message);
        }
      },
    },
  },
};

export const loginRequest = {
  scopes: ["User.Read"],
};
