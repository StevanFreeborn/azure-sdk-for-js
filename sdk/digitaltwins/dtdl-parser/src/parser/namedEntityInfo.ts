// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/* eslint-disable valid-jsdoc */
/* eslint-disable guard-for-in */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable sort-imports */

import { EntityInfo } from "./internal";
export interface NamedEntityInfo extends EntityInfo {
  entityKind:
    | "command"
    | "commandpayload"
    | "component"
    | "enumvalue"
    | "field"
    | "mapkey"
    | "mapvalue"
    | "property"
    | "relationship"
    | "telemetry"
    | "unitattribute"
    | "commandrequest"
    | "commandresponse"
    | "namedlatenttype";
  name?: string;
}