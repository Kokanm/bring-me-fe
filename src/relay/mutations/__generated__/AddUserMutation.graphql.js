/**
 * @flow
 * @relayHash 3f6d83db926cd6c10cd91c8e18a32baf
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NewUserInput = {|
  firstName: string,
  lastName: string,
|};
export type AddUserMutationVariables = {|
  newUserData: NewUserInput
|};
export type AddUserMutationResponse = {|
  +addUser: {|
    +firstName: string,
    +lastName: string,
  |}
|};
export type AddUserMutation = {|
  variables: AddUserMutationVariables,
  response: AddUserMutationResponse,
|};
*/


/*
mutation AddUserMutation(
  $newUserData: NewUserInput!
) {
  addUser(newUserData: $newUserData) {
    firstName
    lastName
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "newUserData",
    "type": "NewUserInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "newUserData",
    "variableName": "newUserData"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "firstName",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lastName",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AddUserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addUser",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AddUserMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addUser",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
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
    "name": "AddUserMutation",
    "id": null,
    "text": "mutation AddUserMutation(\n  $newUserData: NewUserInput!\n) {\n  addUser(newUserData: $newUserData) {\n    firstName\n    lastName\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9e0174982d1b2e9937455daec4e96685';
module.exports = node;
