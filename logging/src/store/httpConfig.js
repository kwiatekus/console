const defaultDomain = 'kyma.local';
let domain = defaultDomain;

const clusterConfig = window['clusterConfig'];
if (clusterConfig && clusterConfig['domain']) {
  domain = clusterConfig['domain'];
}

const config = {
  queryEndpoint: `https://loki.${domain}/api/prom/query`,
  labelEndpoint: `https://loki.${domain}/api/prom/label`,
  resourceLabels: resource =>
    `https://loki.${domain}/api/prom/label/${resource}/values`,

  // graphqlApiUrl: `https://console-backend.${domain}/graphql`,
  // subscriptionsApiUrl: `wss://console-backend.${domain}/graphql`,
};

export default { ...config };
