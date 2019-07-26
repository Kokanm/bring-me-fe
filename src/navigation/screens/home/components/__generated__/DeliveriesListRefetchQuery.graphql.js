/**
 * @flow
 * @relayHash 87dea03a1ba496e1ec66e3ef8ce9c544
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type DeliveryListItem_delivery$ref = any;
export type DeliveriesListRefetchQueryVariables = {||};
export type DeliveriesListRefetchQueryResponse = {|
  +deliveries: $ReadOnlyArray<{|
    +$fragmentRefs: DeliveryListItem_delivery$ref
  |}>
|};
export type DeliveriesListRefetchQuery = {|
  variables: DeliveriesListRefetchQueryVariables,
  response: DeliveriesListRefetchQueryResponse,
|};
*/


/*
query DeliveriesListRefetchQuery {
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
    "name": "DeliveriesListRefetchQuery",
    "type": "Query",
    "metadata": null,
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
            "kind": "FragmentSpread",
            "name": "DeliveryListItem_delivery",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DeliveriesListRefetchQuery",
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
    "name": "DeliveriesListRefetchQuery",
    "id": null,
    "text": "query DeliveriesListRefetchQuery {\n  deliveries {\n    ...DeliveryListItem_delivery\n    id\n  }\n}\n\nfragment DeliveryListItem_delivery on Delivery {\n  id\n  item\n  imageURL\n  locationFrom\n  locationTo\n  deliverBy\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = 'bee344ee522717829c55918c13c720b8';
module.exports = node;
