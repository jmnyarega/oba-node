# OBA online business analyser

- [documented here](https://app.swaggerhub.com/apis-docs/jos/oba-node/1.0.0)

## Setup
- Copy contents for .sample_env file and replace with correct values
- And run the following commands from your terminal
```bash
git clone <url>
cd oba-node
npm install
npm run migrate
npm start
```
## Enpoints

endpoints | method | type
--- | --- | ---
/signup | POST | public
/login | POST | public
/reset | POST | public
/company | POST | private
/company | GET | private
/company  | DELETE | private
/transaction | GET | private
/transaction  | POST | private
1 | 2 | 3
