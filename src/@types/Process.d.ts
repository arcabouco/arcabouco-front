declare namespace NodeJS {
  export interface ProcessEnv {
    NEXT_PUBLIC_ENV: 'dev' | 'prod' | 'test-dev' | 'test-prod'
  }
}
