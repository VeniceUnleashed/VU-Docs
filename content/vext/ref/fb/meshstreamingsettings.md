---
title: MeshStreamingSettings
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| MeshStreamingSettings()                                                          | Create a new instance of this container type.                                                                                     |
| MeshStreamingSettings(MeshStreamingSettings other)                               | Create a reference copy of an instance of the same type.                                                                          |
| MeshStreamingSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MeshStreamingSettings](MeshStreamingSettings). |

## Properties

| Name                               | Type   | Description |
| ---------------------------------- | ------ | ----------- |
| defragTransferLimit                | number |             |
| listViewPageIndex                  | number |             |
| poolSize                           | number |             |
| forceLod                           | number |             |
| poolHeadroomSize                   | number |             |
| listViewSortOrder                  | number |             |
| ps3CellDefragTransferLimit         | number |             |
| xenonFinalPoolSizeAdjustment       | number |             |
| maxUnloadCountPerFrame             | number |             |
| xenonRetailPoolSizeAdjustment      | number |             |
| maxPendingLoadCount                | number |             |
| ps3CellPoolSize                    | number |             |
| ps3CellPoolHeadroomSize            | number |             |
| instantUnloadingEnable             | bool   |             |
| asyncCreatesEnable                 | bool   |             |
| dxImmutableUsageEnable             | bool   |             |
| overridePoolSizes                  | bool   |             |
| useSlowTexturePrio                 | bool   |             |
| updateEnable                       | bool   |             |
| dynamicLoadingEnable               | bool   |             |
| priorityJobEnable                  | bool   |             |
| prioritySpuJobEnable               | bool   |             |
| updateJobEnable                    | bool   |             |
| defragTransfersEnable              | bool   |             |
| prioritizeVisibleMeshesFirstEnable | bool   |             |
| prioritizeVisibleLodsFirstEnable   | bool   |             |
| prioritizeVisibleLoadsEnable       | bool   |             |
| prioritizeTexturesEnable           | bool   |             |
| highestPriorityEnable              | bool   |             |
| prioritizeNearestPointEnable       | bool   |             |
| drawInstanceBoxesEnable            | bool   |             |
| drawStatsEnable                    | bool   |             |
| drawMissingListEnable              | bool   |             |
| drawPriorityListEnable             | bool   |             |
| drawLoadingListEnable              | bool   |             |
| drawMeshListEnable                 | bool   |             |
| drawNonStreamedListEnable          | bool   |             |
| defragEnable                       | bool   |             |
| enable                             | bool   |             |
| dumpLoadedList                     | bool   |             |
| useConditionalStreaming            | bool   |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [MeshStreamingSettings](MeshStreamingSettings) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MeshStreamingSettings](MeshStreamingSettings) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
