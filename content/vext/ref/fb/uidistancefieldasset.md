---
title: UIDistanceFieldAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| UIDistanceFieldAsset()                                                          | Create a new instance of this container type.                                                                                   |
| UIDistanceFieldAsset(UIDistanceFieldAsset other)                                | Create a reference copy of an instance of the same type.                                                                        |
| UIDistanceFieldAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIDistanceFieldAsset](/vext/ref/fb/uidistancefieldasset/).                                      |
| UIDistanceFieldAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIDistanceFieldAsset](/vext/ref/fb/uidistancefieldasset/). |

## Properties

| Name                 | Type                         | Description |
| -------------------- | ---------------------------- | ----------- |
| distanceFieldTexture | [TextureAsset](/vext/ref/fb/textureasset/) |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIDistanceFieldAsset](/vext/ref/fb/uidistancefieldasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIDistanceFieldAsset](/vext/ref/fb/uidistancefieldasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
