---
title: TerrainStreamingSettings (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| TerrainStreamingSettings()                                                          | Create a new instance of this container type.                                                                                           |
| TerrainStreamingSettings(TerrainStreamingSettings other)                            | Create a reference copy of an instance of the same type.                                                                                |
| TerrainStreamingSettings([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [TerrainStreamingSettings](TerrainStreamingSettings). |

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
| [TerrainStreamingSettings](TerrainStreamingSettings) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [TerrainStreamingSettings](TerrainStreamingSettings) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
