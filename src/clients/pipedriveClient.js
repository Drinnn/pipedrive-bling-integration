import pipedrive from "pipedrive";

pipedrive.Configuration.apiToken = process.env.PIPEDRIVE_API_TOKEN;

export default pipedrive;
