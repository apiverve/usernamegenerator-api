declare module '@apiverve/usernamegenerator' {
  export interface usernamegeneratorOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface usernamegeneratorResponse {
    status: string;
    error: string | null;
    data: UsernameGeneratorData;
    code?: number;
  }


  interface UsernameGeneratorData {
      count:       number;
      suggestions: string[];
      email:       string;
  }

  export default class usernamegeneratorWrapper {
    constructor(options: usernamegeneratorOptions);

    execute(callback: (error: any, data: usernamegeneratorResponse | null) => void): Promise<usernamegeneratorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: usernamegeneratorResponse | null) => void): Promise<usernamegeneratorResponse>;
    execute(query?: Record<string, any>): Promise<usernamegeneratorResponse>;
  }
}
