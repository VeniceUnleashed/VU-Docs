---
title: TerrainStreamingSettings
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| TerrainStreamingSettings()                                                          | Create a new instance of this container type.                                                                                           |
| TerrainStreamingSettings(TerrainStreamingSettings other)                            | Create a reference copy of an instance of the same type.                                                                                |
| TerrainStreamingSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TerrainStreamingSettings](/vext/ref/fb/terrainstreamingsettings/). |

## Properties

| Name                                | Type   | Description |
| ----------------------------------- | ------ | ----------- |
| dataLoadJobCount                    | number |             |
| activeFreeStreamingDataLoadJobCount | number |             |
| heightfieldAtlasSampleCountXFactor  | number |             |
| additionalBlurriness                | number |             |
| invisibleDetailReductionFactor      | number |             |
| occludedDetailReductionFactor       | number |             |
| heightfieldAtlasSampleCountYFactor  | number |             |
| maskAtlasSampleCountYFactor         | number |             |
| colorAdditionalBlurriness           | number |             |
| maskAtlasSampleCountXFactor         | number |             |
| maskAdditionalBlurriness            | number |             |
| colorAtlasSampleCountXFactor        | number |             |
| colorAtlasSampleCountYFactor        | number |             |
| keepPoolFullEnable                  | bool   |             |
| loadOccluderDataEnable              | bool   |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [TerrainStreamingSettings](/vext/ref/fb/terrainstreamingsettings/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TerrainStreamingSettings](/vext/ref/fb/terrainstreamingsettings/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
