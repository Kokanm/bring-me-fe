/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type DeliveriesList_deliveries$ref: FragmentReference;
declare export opaque type DeliveriesList_deliveries$fragmentType: DeliveriesList_deliveries$ref;
export type DeliveriesList_deliveries = {|
  +deliveries: $ReadOnlyArray<{|
    +id: string,
    +item: string,
    +imageURL: ?string,
    +locationFrom: ?string,
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
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '3bfa2e35dfb74dd603a272c95282812c';
module.exports = node;
