---
title: PlayFromHereAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| PlayFromHereAsset()                                                          | Create a new instance of this container type.                                                                             |
| PlayFromHereAsset(PlayFromHereAsset other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| PlayFromHereAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [PlayFromHereAsset](/vext/ref/fb/playfromhereasset/).                                      |
| PlayFromHereAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PlayFromHereAsset](/vext/ref/fb/playfromhereasset/). |

## Properties

| Name                     | Type                                                 | Description |
| ------------------------ | ---------------------------------------------------- | ----------- |
| soldier                  | [Blueprint](/vext/ref/fb/blueprint/)                               |             |
| animatedSkeletonDatabase | [AnimatedSkeletonDatabase](/vext/ref/fb/animatedskeletondatabase/) |             |
| antProject               | [AntProjectAsset](/vext/ref/fb/antprojectasset/)                   |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [PlayFromHereAsset](/vext/ref/fb/playfromhereasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PlayFromHereAsset](/vext/ref/fb/playfromhereasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
