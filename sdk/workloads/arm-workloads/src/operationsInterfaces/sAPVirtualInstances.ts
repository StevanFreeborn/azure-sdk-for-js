/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  SAPVirtualInstance,
  SAPVirtualInstancesListByResourceGroupOptionalParams,
  SAPVirtualInstancesListBySubscriptionOptionalParams,
  SAPVirtualInstancesCreateOptionalParams,
  SAPVirtualInstancesCreateResponse,
  SAPVirtualInstancesGetOptionalParams,
  SAPVirtualInstancesGetResponse,
  SAPVirtualInstancesUpdateOptionalParams,
  SAPVirtualInstancesUpdateResponse,
  SAPVirtualInstancesDeleteOptionalParams,
  SAPVirtualInstancesDeleteResponse,
  SAPVirtualInstancesStartOptionalParams,
  SAPVirtualInstancesStartResponse,
  SAPVirtualInstancesStopOptionalParams,
  SAPVirtualInstancesStopResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SAPVirtualInstances. */
export interface SAPVirtualInstances {
  /**
   * Gets all Virtual Instances for SAP in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: SAPVirtualInstancesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<SAPVirtualInstance>;
  /**
   * Gets all Virtual Instances for SAP in the subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: SAPVirtualInstancesListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<SAPVirtualInstance>;
  /**
   * Creates an Virtual Instance for SAP.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    options?: SAPVirtualInstancesCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SAPVirtualInstancesCreateResponse>,
      SAPVirtualInstancesCreateResponse
    >
  >;
  /**
   * Creates an Virtual Instance for SAP.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    options?: SAPVirtualInstancesCreateOptionalParams
  ): Promise<SAPVirtualInstancesCreateResponse>;
  /**
   * Gets an Virtual Instance for SAP.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    options?: SAPVirtualInstancesGetOptionalParams
  ): Promise<SAPVirtualInstancesGetResponse>;
  /**
   * Updates an Virtual Instance for SAP.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    options?: SAPVirtualInstancesUpdateOptionalParams
  ): Promise<SAPVirtualInstancesUpdateResponse>;
  /**
   * Deletes an Virtual Instance for SAP.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    options?: SAPVirtualInstancesDeleteOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SAPVirtualInstancesDeleteResponse>,
      SAPVirtualInstancesDeleteResponse
    >
  >;
  /**
   * Deletes an Virtual Instance for SAP.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    options?: SAPVirtualInstancesDeleteOptionalParams
  ): Promise<SAPVirtualInstancesDeleteResponse>;
  /**
   * Starts the SAP System.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP.
   * @param options The options parameters.
   */
  beginStart(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    options?: SAPVirtualInstancesStartOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SAPVirtualInstancesStartResponse>,
      SAPVirtualInstancesStartResponse
    >
  >;
  /**
   * Starts the SAP System.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP.
   * @param options The options parameters.
   */
  beginStartAndWait(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    options?: SAPVirtualInstancesStartOptionalParams
  ): Promise<SAPVirtualInstancesStartResponse>;
  /**
   * Stops the SAP System.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP.
   * @param options The options parameters.
   */
  beginStop(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    options?: SAPVirtualInstancesStopOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SAPVirtualInstancesStopResponse>,
      SAPVirtualInstancesStopResponse
    >
  >;
  /**
   * Stops the SAP System.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP.
   * @param options The options parameters.
   */
  beginStopAndWait(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    options?: SAPVirtualInstancesStopOptionalParams
  ): Promise<SAPVirtualInstancesStopResponse>;
}