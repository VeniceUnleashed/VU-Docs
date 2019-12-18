---
title: PlayFromHereAsset (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| PlayFromHereAsset()                                                          | Create a new instance of this container type.                                                                             |
| PlayFromHereAsset(PlayFromHereAsset other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| PlayFromHereAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [PlayFromHereAsset](PlayFromHereAsset).                                      |
| PlayFromHereAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PlayFromHereAsset](PlayFromHereAsset). |

## Properties

| Name                     | Type                                                 | Description |
| ------------------------ | ---------------------------------------------------- | ----------- |
| soldier                  | [Blueprint](Blueprint)                               |             |
| animatedSkeletonDatabase | [AnimatedSkeletonDatabase](AnimatedSkeletonDatabase) |             |
| antProject               | [AntProjectAsset](AntProjectAsset)                   |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [PlayFromHereAsset](PlayFromHereAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PlayFromHereAsset](PlayFromHereAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
