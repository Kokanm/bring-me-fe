/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type DeliveryListItem_delivery$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type DeliveriesList_deliveries$ref: FragmentReference;
declare export opaque type DeliveriesList_deliveries$fragmentType: DeliveriesList_deliveries$ref;
export type DeliveriesList_deliveries = {|
  +deliveries: $ReadOnlyArray<{|
    +$fragmentRefs: DeliveryListItem_delivery$ref
  |}>,
  +$refType: DeliveriesList_deliveries$ref,
|};
export type DeliveriesList_deliveries$data = DeliveriesList_deliveries;
export type DeliveriesList_deliveries$key = {
  +$data?: DeliveriesList_deliveries$data,
  +$fragmentRefs: DeliveriesList_deliveries$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "DeliveriesList_deliveries",
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
};
// prettier-ignore
(node/*: any*/).hash = '686c7259230e3d88a451773013d2e5c4';
module.exports = node;
