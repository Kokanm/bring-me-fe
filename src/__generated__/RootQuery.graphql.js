/**
 * @flow
 * @relayHash 5b00c3910c11949bcd09eb42843f3b58
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RootQueryVariables = {||};
export type RootQueryResponse = {|
  +users: $ReadOnlyArray<{|
    +id: string,
    +firstName: string,
  |}>
|};
export type RootQuery = {|
  variables: RootQueryVariables,
  response: RootQueryResponse,
|};
*/


/*
query RootQuery {
  users {
    id
    firstName
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "users",
    "storageKey": null,
    "args": null,
    "concreteType": "User",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "firstName",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "RootQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "RootQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "RootQuery",
    "id": null,
    "text": "query RootQuery {\n  users {\n    id\n    firstName\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '12f2bac204a668a368629e6e40edb457';
module.exports = node;
