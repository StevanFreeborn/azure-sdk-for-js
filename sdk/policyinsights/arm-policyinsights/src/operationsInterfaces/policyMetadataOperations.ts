/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  SlimPolicyMetadata,
  PolicyMetadataListOptionalParams,
  PolicyMetadataGetResourceOptionalParams,
  PolicyMetadataGetResourceResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PolicyMetadataOperations. */
export interface PolicyMetadataOperations {
  /**
   * Get a list of the policy metadata resources.
   * @param options The options parameters.
   */
  list(
    options?: PolicyMetadataListOptionalParams
  ): PagedAsyncIterableIterator<SlimPolicyMetadata>;
  /**
   * Get policy metadata resource.
   * @param resourceName The name of the policy metadata resource.
   * @param options The options parameters.
   */
  getResource(
    resourceName: string,
    options?: PolicyMetadataGetResourceOptionalParams
  ): Promise<PolicyMetadataGetResourceResponse>;
}