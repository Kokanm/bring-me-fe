/**
 * @flow
 * @relayHash fef9ff82951f878e7792202adb1e693b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeliveryType = "Offer" | "Request" | "%future added value";
export type NewDeliveryInput = {|
  item: string,
  imageURL?: ?string,
  description?: ?string,
  locationFrom?: ?string,
  locationTo: string,
  deliverBy?: ?any,
  type: DeliveryType,
|};
export type AddDeliveryMutationVariables = {|
  newDeliveryData: NewDeliveryInput
|};
export type AddDeliveryMutationResponse = {|
  +addDelivery: {|
    +item: string,
    +imageURL: ?string,
    +description: ?string,
    +locationTo: string,
    +locationFrom: ?string,
    +deliverBy: ?any,
    +type: DeliveryType,
  |}
|};
export type AddDeliveryMutation = {|
  variables: AddDeliveryMutationVariables,
  response: AddDeliveryMutationResponse,
|};
*/


/*
mutation AddDeliveryMutation(
  $newDeliveryData: NewDeliveryInput!
) {
  addDelivery(newDeliveryData: $newDeliveryData) {
    item
    imageURL
    description
    locationTo
    locationFrom
    deliverBy
    type
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "newDeliveryData",
    "type": "NewDeliveryInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "newDeliveryData",
    "variableName": "newDeliveryData"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "item",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "imageURL",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "locationTo",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "locationFrom",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "deliverBy",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AddDeliveryMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addDelivery",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Delivery",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AddDeliveryMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addDelivery",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Delivery",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "AddDeliveryMutation",
    "id": null,
    "text": "mutation AddDeliveryMutation(\n  $newDeliveryData: NewDeliveryInput!\n) {\n  addDelivery(newDeliveryData: $newDeliveryData) {\n    item\n    imageURL\n    description\n    locationTo\n    locationFrom\n    deliverBy\n    type\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '34163f7d4c9091cf3f0f50e8187c8ae9';
module.exports = node;
