---
title: PathfindingTypeAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| PathfindingTypeAsset()                                                          | Create a new instance of this container type.                                                                                   |
| PathfindingTypeAsset(PathfindingTypeAsset other)                                | Create a reference copy of an instance of the same type.                                                                        |
| PathfindingTypeAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [PathfindingTypeAsset](/vext/ref/fb/pathfindingtypeasset/).                                      |
| PathfindingTypeAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PathfindingTypeAsset](/vext/ref/fb/pathfindingtypeasset/). |

## Properties

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| index | number |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [PathfindingTypeAsset](/vext/ref/fb/pathfindingtypeasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PathfindingTypeAsset](/vext/ref/fb/pathfindingtypeasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
