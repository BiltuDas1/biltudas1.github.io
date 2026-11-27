import { InfisicalSDK } from "@infisical/sdk";

let clientPromise: Promise<InfisicalSDK> | undefined;

async function getInfisicalClient() {
  if (!clientPromise) {
    clientPromise = (async () => {
      const client = new InfisicalSDK({
        siteUrl: "https://app.infisical.com",
      });

      await client.auth().universalAuth.login({
        clientId: process.env.INFISICAL_CLIENT_ID!,
        clientSecret: process.env.INFISICAL_CLIENT_SECRET!,
      });

      return client;
    })().catch((error) => {
      clientPromise = undefined;
      throw error;
    });
  }

  return clientPromise;
}

export async function getSecret(secretName: string) {
  const client = await getInfisicalClient();

  const secret = await client.secrets().getSecret({
    environment: "prod",
    projectId: process.env.INFISICAL_PROJECT_ID!,
    secretName,
    secretPath: "/",
  });

  return secret.secretValue;
}
