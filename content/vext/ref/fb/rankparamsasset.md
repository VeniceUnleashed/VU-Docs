---
title: RankParamsAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| RankParamsAsset()                                                          | Create a new instance of this container type.                                                                         |
| RankParamsAsset(RankParamsAsset other)                                     | Create a reference copy of an instance of the same type.                                                              |
| RankParamsAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [RankParamsAsset](/vext/ref/fb/rankparamsasset/).                                      |
| RankParamsAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RankParamsAsset](/vext/ref/fb/rankparamsasset/). |

## Properties

| Name  | Type                               | Description |
| ----- | ---------------------------------- | ----------- |
| ranks | [RankLevelData](/vext/ref/fb/rankleveldata/)\[\] |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [RankParamsAsset](/vext/ref/fb/rankparamsasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RankParamsAsset](/vext/ref/fb/rankparamsasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
