import { Environment, Network, RecordSource, Store } from 'relay-runtime';

function fetchQuery(operation, variables) {
  // TODO change to proper one
  return fetch('http://f522d56c.ngrok.io/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
}

const network = Network.create(fetchQuery);
const store = new Store(new RecordSource());

const environment = new Environment({
  network,
  store,
});

export default environment;
