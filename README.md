# pipedrive-bling-integration
A project integrating Pipedrive and Bling! transforming leads/deals into Bling orders.

### Get started
* Clone the project
* Run "yarn" command
* Create .env file inside project folder with the following template:
  ```APP_PORT=3333
  PIPEDRIVE_API_TOKEN=
  BLING_API_KEY=

  DB_CONNECTION_STRING=mongodb+srv://root:root@pipedrive-bling-integra.ahesq.mongodb.net/application?retryWrites=true&w=majority ```
* Run "yarn dev" command


### Endpoints
> /deals -> Transforms every won lead/deal into a Bling! order (IMPORTANT NOTE: It's necessary at least one product inside the lead/deal)
> /orders -> Returns all orders in the database
