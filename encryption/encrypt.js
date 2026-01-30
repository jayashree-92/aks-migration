var encryptor = require("./function.js")
const args = process.argv;
const key = args[2]
const db_url = args[3]
const client_id = args[4]
const keycloak_pass = args[5]
const adopattoken = args[6]
const ocp4token = args[7]
const ocpUserPassword = args[8]
const db_conn_str = encryptor.encrypt(db_url, key);
const keycloak_client_id = encryptor.encrypt(client_id, key);
const keycloak_password = encryptor.encrypt(keycloak_pass, key);
const ado_pat_token = encryptor.encrypt(adopattoken, key);
const ocp4_token = encryptor.encrypt(ocp4token, key);
const ocp4_ldap_user_password = encryptor.encrypt(ocpUserPassword, key);
console.log("DB_URL-",db_conn_str)
console.log("KEYCLOAK_CLIENT_ID-",keycloak_client_id)
console.log("KEYCLOAK_PASSWORD-",keycloak_password)
console.log("ADO_PAT_TOKEN-",ado_pat_token)
console.log("OCP4_TOKEN",ocp4_token)
console.log("OCP_LDAP_USER_PASSWORD",ocp4_ldap_user_password)