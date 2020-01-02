---
title: TextureStreamingSettings
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| TextureStreamingSettings()                                                          | Create a new instance of this container type.                                                                                           |
| TextureStreamingSettings(TextureStreamingSettings other)                            | Create a reference copy of an instance of the same type.                                                                                |
| TextureStreamingSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TextureStreamingSettings](TextureStreamingSettings). |

## Properties

| Name                          | Type   | Description |
| ----------------------------- | ------ | ----------- |
| fadeMipmapTime                | number |             |
| mipmapBias                    | number |             |
| maxTextureSizeKb              | number |             |
| maxFrameTextureCreateCount    | number |             |
| maxPendingLoadCount           | number |             |
| minMipmapCount                | number |             |
| maxMipmapCount                | number |             |
| xenonFinalPoolSizeAdjustment  | number |             |
| xenonRetailPoolSizeAdjustment | number |             |
| poolHeadroomSize              | number |             |
| onDemandPoolSize              | number |             |
| listViewPageIndex             | number |             |
| poolSize                      | number |             |
| forceMipmap                   | number |             |
| priorityThreshold             | number |             |
| defragFrameTransferLimit      | number |             |
| minTextureSize                | number |             |
| maxFrameTextureCreateSize     | number |             |
| onlyWantedInPool              | bool   |             |
| dxImmutableUsageEnable        | bool   |             |
| mipmapsEnable                 | bool   |             |
| uploadMipmapsEnable           | bool   |             |
| textureUpdateEnable           | bool   |             |
| asyncCreatesEnable            | bool   |             |
| loadMipmapsEnable             | bool   |             |
| forceWantedEnable             | bool   |             |
| updateEnable                  | bool   |             |
| poolEnable                    | bool   |             |
| defragEnable                  | bool   |             |
| defragTransfersEnable         | bool   |             |
| chunkLoadEnable               | bool   |             |
| instantUnloadingEnable        | bool   |             |
| fadeMipmapsEnable             | bool   |             |
| dynamicLoadingEnable          | bool   |             |
| enable                        | bool   |             |
| drawStatsEnable               | bool   |             |
| drawTextureGroupStatsEnable   | bool   |             |
| drawTextureFormatStatsEnable  | bool   |             |
| drawLoadingListEnable         | bool   |             |
| drawPriorityListEnable        | bool   |             |
| overridePoolSize              | bool   |             |
| dumpLoadedList                | bool   |             |
| useConditionalStreaming       | bool   |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [TextureStreamingSettings](TextureStreamingSettings) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TextureStreamingSettings](TextureStreamingSettings) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
