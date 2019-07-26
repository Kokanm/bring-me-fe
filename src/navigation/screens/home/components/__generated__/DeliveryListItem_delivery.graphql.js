/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
export type DeliveryType = "Offer" | "Request" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type DeliveryListItem_delivery$ref: FragmentReference;
declare export opaque type DeliveryListItem_delivery$fragmentType: DeliveryListItem_delivery$ref;
export type DeliveryListItem_delivery = {|
  +id: string,
  +item: string,
  +imageURL: ?string,
  +locationFrom: ?string,
  +locationTo: string,
  +deliverBy: ?any,
  +type: DeliveryType,
  +$refType: DeliveryListItem_delivery$ref,
|};
export type DeliveryListItem_delivery$data = DeliveryListItem_delivery;
export type DeliveryListItem_delivery$key = {
  +$data?: DeliveryListItem_delivery$data,
  +$fragmentRefs: DeliveryListItem_delivery$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "DeliveryListItem_delivery",
  "type": "Delivery",
  "metadata": null,
  "argumentDefinitions": [],
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "type",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '8b25224d3c9fc0850d85190356ac1c01';
module.exports = node;
