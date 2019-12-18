---
title: AdvertisementComponentData (Frostbite Container)
---
### Base Classes

[PartComponentData](PartComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| AdvertisementComponentData()                                                          | Create a new instance of this container type.                                                                                               |
| AdvertisementComponentData(AdvertisementComponentData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| AdvertisementComponentData([PartComponentData](PartComponentData) other)              | Upcast an instance of type [PartComponentData](PartComponentData) to [AdvertisementComponentData](AdvertisementComponentData).              |
| AdvertisementComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [AdvertisementComponentData](AdvertisementComponentData).                      |
| AdvertisementComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [AdvertisementComponentData](AdvertisementComponentData).                    |
| AdvertisementComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [AdvertisementComponentData](AdvertisementComponentData).              |
| AdvertisementComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AdvertisementComponentData](AdvertisementComponentData). |

## Properties

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| identifier | string |             |
| adTexture  | string |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [AdvertisementComponentData](AdvertisementComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AdvertisementComponentData](AdvertisementComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
