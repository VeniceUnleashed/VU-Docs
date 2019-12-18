---
title: PickupEntityAsset (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| PickupEntityAsset()                                                          | Create a new instance of this container type.                                                                             |
| PickupEntityAsset(PickupEntityAsset other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| PickupEntityAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [PickupEntityAsset](PickupEntityAsset).                                      |
| PickupEntityAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PickupEntityAsset](PickupEntityAsset). |

## Properties

| Name | Type                                 | Description |
| ---- | ------------------------------------ | ----------- |
| data | [PickupEntityData](PickupEntityData) |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [PickupEntityAsset](PickupEntityAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PickupEntityAsset](PickupEntityAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
