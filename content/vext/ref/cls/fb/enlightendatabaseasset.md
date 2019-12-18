---
title: EnlightenDatabaseAsset (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| EnlightenDatabaseAsset()                                                          | Create a new instance of this container type.                                                                                       |
| EnlightenDatabaseAsset(EnlightenDatabaseAsset other)                              | Create a reference copy of an instance of the same type.                                                                            |
| EnlightenDatabaseAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [EnlightenDatabaseAsset](EnlightenDatabaseAsset).                                      |
| EnlightenDatabaseAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [EnlightenDatabaseAsset](EnlightenDatabaseAsset). |

## Properties

| Name                 | Type                                                 | Description |
| -------------------- | ---------------------------------------------------- | ----------- |
| dataVersion          | number                                               |             |
| debugMeshDataVersion | number                                               |             |
| outputSizeX          | number                                               |             |
| outputSizeY          | number                                               |             |
| systems              | [EnlightenDbSystem](EnlightenDbSystem)\[\]           |             |
| lightProbeSets       | [EnlightenLightProbeSet](EnlightenLightProbeSet)\[\] |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [EnlightenDatabaseAsset](EnlightenDatabaseAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [EnlightenDatabaseAsset](EnlightenDatabaseAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
