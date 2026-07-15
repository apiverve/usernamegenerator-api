declare module '@apiverve/usernamegenerator' {
  export interface usernamegeneratorOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface usernamegeneratorResponse {
    status: string;
    error: string | null;
    data: UsernameGeneratorData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface UsernameGeneratorData {
      count:       number | null;
      suggestions: (null | string)[];
      email:       null | string;
  }

  export default class usernamegeneratorWrapper {
    constructor(options: usernamegeneratorOptions);

    execute(callback: (error: any, data: usernamegeneratorResponse | null) => void): Promise<usernamegeneratorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: usernamegeneratorResponse | null) => void): Promise<usernamegeneratorResponse>;
    execute(query?: Record<string, any>): Promise<usernamegeneratorResponse>;
  }
}
