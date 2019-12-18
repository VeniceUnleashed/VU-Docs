---
title: MeshMergingSettings (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| MeshMergingSettings()                                                          | Create a new instance of this container type.                                                                                 |
| MeshMergingSettings(MeshMergingSettings other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| MeshMergingSettings([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [MeshMergingSettings](MeshMergingSettings). |

## Properties

| Name                               | Type   | Description |
| ---------------------------------- | ------ | ----------- |
| statsSeedIndex                     | number |             |
| statsLodIndex                      | number |             |
| textureAtlasWidth                  | number |             |
| drawStatsEnable                    | bool   |             |
| drawDebugTexturesEnable            | bool   |             |
| virtualTextureArrayStreamingEnable | bool   |             |
| enable                             | bool   |             |
| textureAtlasMergeEnable            | bool   |             |
| clearMergeReport                   | bool   |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [MeshMergingSettings](MeshMergingSettings) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [MeshMergingSettings](MeshMergingSettings) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
