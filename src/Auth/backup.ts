import { LogLevel, Configuration } from "@azure/msal-browser";

export const msalConfig: Configuration = {
  auth: {
    clientId: "48898b7f-f509-4297-8978-747ac704da93",
    authority:
      "https://login.microsoftonline.com/8483f5da-75f1-4c68-8a9a-64db18715699",
    postLogoutRedirectUri: "https://stg.admin.pdahub.com.br/",
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
            console.log(message);
            return;
          case LogLevel.Verbose:
            console.log(message);
            return;
          default:
            console.log(message);
        }
      },
    },
  },
};

export const loginRequest = {
  scopes: ["User.Read"],
};
