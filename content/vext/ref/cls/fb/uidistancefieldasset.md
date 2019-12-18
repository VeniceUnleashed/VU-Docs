---
title: UIDistanceFieldAsset (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| UIDistanceFieldAsset()                                                          | Create a new instance of this container type.                                                                                   |
| UIDistanceFieldAsset(UIDistanceFieldAsset other)                                | Create a reference copy of an instance of the same type.                                                                        |
| UIDistanceFieldAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIDistanceFieldAsset](UIDistanceFieldAsset).                                      |
| UIDistanceFieldAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIDistanceFieldAsset](UIDistanceFieldAsset). |

## Properties

| Name                 | Type                         | Description |
| -------------------- | ---------------------------- | ----------- |
| distanceFieldTexture | [TextureAsset](TextureAsset) |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIDistanceFieldAsset](UIDistanceFieldAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIDistanceFieldAsset](UIDistanceFieldAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
