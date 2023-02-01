export enum App {
  DINGTALK = 'DingTalk',
  LARK = 'Lark',
  WECOM = 'WeCom',
}

export type Body = Record<string, unknown>;

export interface ActionOptions {
  app: App;
  webhook: string;
  secret?: string;
  template: string;
  params?: string;
  githubToken?: string;
  branch?: string;
}

export interface Options {
  app: App;
  webhook: string;
  secret?: string;
  payload: Body;
}

export type Response = {
  code?: number;
  errcode?: number;
  StatusCode?: number;
};
