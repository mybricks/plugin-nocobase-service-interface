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

export default function pluginEntry(config?: any): {
    name: string;
    title: string;
    description: string;
    data: {
        connectors: any[];
    };
    contributes: {
        sliderView: {
            tab: {
                title: string;
                icon: JSX.Element;
                apiSet: string[];
                render(args: any): JSX.Element;
            };
        };
    };
};

export declare function call(connector: {
  id: string;
  script: string;
  title: string;
  inputSchema: any;
  outputSchema: any;
}, params: any, config?: IConfig): Promise<any>;

export declare function mock(connector: {
  id: string;
  script: string;
  title: string;
  inputSchema: any;
  outputSchema: any;
}, params: any, config?: IConfig): Promise<any>;