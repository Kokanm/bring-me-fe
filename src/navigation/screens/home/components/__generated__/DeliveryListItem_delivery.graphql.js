/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'fbaabcc86a9a7039607cdc50d00e8c30';
module.exports = node;
