import { InjectionToken } from "@angular/core";

export let APP_CONFIG = new InjectionToken<string>("app.config");

export interface IAppConfig {
  apiEndpoint: string;
  apiSettingsPath: string;
}

export const AppConfig: IAppConfig = {
  apiEndpoint: "https://localhost:44324/api",
  apiSettingsPath: "ApiSettings"
};
