/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ContainerRegistryManagementClient } from "@azure/arm-containerregistry";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Deletes a specified task run resource.
 *
 * @summary Deletes a specified task run resource.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/preview/2019-06-01-preview/examples/TaskRunsDelete.json
 */
async function taskRunsDelete() {
  const subscriptionId = "4385cf00-2d3a-425a-832f-f4285b1c9dce";
  const resourceGroupName = "myResourceGroup";
  const registryName = "myRegistry";
  const taskRunName = "myRun";
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.taskRuns.beginDeleteAndWait(
    resourceGroupName,
    registryName,
    taskRunName
  );
  console.log(result);
}

taskRunsDelete().catch(console.error);