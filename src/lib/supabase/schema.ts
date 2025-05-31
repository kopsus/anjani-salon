export interface Database {
  public: {
    Tables: {
      services: {
        Row: {
          id: number;
          title: string;
          image: string;
          description: string;
        };
        Insert: {
          title: string;
          image: string;
          description: string;
        };
        Update: {
          title?: string;
          image?: string;
          description?: string;
        };
      };
    };
  };
}
