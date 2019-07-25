/**
 * @flow
 * @relayHash eed9022f38f5f149f4346acc9ae17aee
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type HomeScreenQueryVariables = {||};
export type HomeScreenQueryResponse = {|
  +users: $ReadOnlyArray<{|
    +id: string,
    +firstName: string,
  |}>,
  +deliveries: $ReadOnlyArray<{|
    +item: string
  |}>,
|};
export type HomeScreenQuery = {|
  variables: HomeScreenQueryVariables,
  response: HomeScreenQueryResponse,
|};
*/


/*
query HomeScreenQuery {
  users {
    id
    firstName
  }
  deliveries {
    item
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "users",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": [
    (v0/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "firstName",
      "args": null,
      "storageKey": null
    }
  ]
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "item",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "HomeScreenQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      (v1/*: any*/),
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deliveries",
        "storageKey": null,
        "args": null,
        "concreteType": "Delivery",
        "plural": true,
        "selections": [
          (v2/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HomeScreenQuery",
    "argumentDefinitions": [],
    "selections": [
      (v1/*: any*/),
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deliveries",
        "storageKey": null,
        "args": null,
        "concreteType": "Delivery",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v0/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "HomeScreenQuery",
    "id": null,
    "text": "query HomeScreenQuery {\n  users {\n    id\n    firstName\n  }\n  deliveries {\n    item\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c6a6b996a6c7d6b1d6b6b2dd1394482e';
module.exports = node;
