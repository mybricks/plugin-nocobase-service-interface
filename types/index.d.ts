interface IOptions {
  method: string;
  url: string;
  data: any;
  params: any;
  headers: any;
  [key: string]: any;
}
interface IConfig {
  before: (options: IOptions) => any;
}

export function call(connector: {
  id: string;
  script: string;
  title: string;
  inputSchema: any;
  outputSchema: any;
}, params: any, config?: IConfig): Promise<any>;