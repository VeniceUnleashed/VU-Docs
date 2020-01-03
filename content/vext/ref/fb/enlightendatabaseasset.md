---
title: EnlightenDatabaseAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| EnlightenDatabaseAsset()                                                          | Create a new instance of this container type.                                                                                       |
| EnlightenDatabaseAsset(EnlightenDatabaseAsset other)                              | Create a reference copy of an instance of the same type.                                                                            |
| EnlightenDatabaseAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [EnlightenDatabaseAsset](/vext/ref/fb/enlightendatabaseasset/).                                      |
| EnlightenDatabaseAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EnlightenDatabaseAsset](/vext/ref/fb/enlightendatabaseasset/). |

## Properties

| Name                 | Type                                                 | Description |
| -------------------- | ---------------------------------------------------- | ----------- |
| dataVersion          | number                                               |             |
| debugMeshDataVersion | number                                               |             |
| outputSizeX          | number                                               |             |
| outputSizeY          | number                                               |             |
| systems              | [EnlightenDbSystem](/vext/ref/fb/enlightendbsystem/)\[\]           |             |
| lightProbeSets       | [EnlightenLightProbeSet](/vext/ref/fb/enlightenlightprobeset/)\[\] |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [EnlightenDatabaseAsset](/vext/ref/fb/enlightendatabaseasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EnlightenDatabaseAsset](/vext/ref/fb/enlightendatabaseasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
