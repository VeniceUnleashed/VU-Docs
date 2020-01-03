---
title: PickupEntityAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| PickupEntityAsset()                                                          | Create a new instance of this container type.                                                                             |
| PickupEntityAsset(PickupEntityAsset other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| PickupEntityAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [PickupEntityAsset](/vext/ref/fb/pickupentityasset/).                                      |
| PickupEntityAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PickupEntityAsset](/vext/ref/fb/pickupentityasset/). |

## Properties

| Name | Type                                 | Description |
| ---- | ------------------------------------ | ----------- |
| data | [PickupEntityData](/vext/ref/fb/pickupentitydata/) |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [PickupEntityAsset](/vext/ref/fb/pickupentityasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PickupEntityAsset](/vext/ref/fb/pickupentityasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
