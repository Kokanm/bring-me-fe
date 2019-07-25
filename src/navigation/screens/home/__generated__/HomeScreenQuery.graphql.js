/**
 * @flow
 * @relayHash 9c51895b0f2a374789002db7ab7f7175
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type DeliveriesList_deliveries$ref = any;
export type HomeScreenQueryVariables = {||};
export type HomeScreenQueryResponse = {|
  +$fragmentRefs: DeliveriesList_deliveries$ref
|};
export type HomeScreenQuery = {|
  variables: HomeScreenQueryVariables,
  response: HomeScreenQueryResponse,
|};
*/


/*
query HomeScreenQuery {
  ...DeliveriesList_deliveries
}

fragment DeliveriesList_deliveries on Query {
  deliveries {
    ...DeliveryListItem_delivery
    id
  }
}

fragment DeliveryListItem_delivery on Delivery {
  id
  item
  imageURL
  locationFrom
  locationTo
  deliverBy
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "HomeScreenQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "DeliveriesList_deliveries",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HomeScreenQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deliveries",
        "storageKey": null,
        "args": null,
        "concreteType": "Delivery",
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
            "name": "item",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "imageURL",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "locationFrom",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "locationTo",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "deliverBy",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "HomeScreenQuery",
    "id": null,
    "text": "query HomeScreenQuery {\n  ...DeliveriesList_deliveries\n}\n\nfragment DeliveriesList_deliveries on Query {\n  deliveries {\n    ...DeliveryListItem_delivery\n    id\n  }\n}\n\nfragment DeliveryListItem_delivery on Delivery {\n  id\n  item\n  imageURL\n  locationFrom\n  locationTo\n  deliverBy\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '40be330933cf7d4fb1db7bbda99fed72';
module.exports = node;
