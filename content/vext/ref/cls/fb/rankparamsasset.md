---
title: RankParamsAsset (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| RankParamsAsset()                                                          | Create a new instance of this container type.                                                                         |
| RankParamsAsset(RankParamsAsset other)                                     | Create a reference copy of an instance of the same type.                                                              |
| RankParamsAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [RankParamsAsset](RankParamsAsset).                                      |
| RankParamsAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [RankParamsAsset](RankParamsAsset). |

## Properties

| Name  | Type                               | Description |
| ----- | ---------------------------------- | ----------- |
| ranks | [RankLevelData](RankLevelData)\[\] |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [RankParamsAsset](RankParamsAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [RankParamsAsset](RankParamsAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
