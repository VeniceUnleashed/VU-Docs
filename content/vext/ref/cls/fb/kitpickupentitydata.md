---
title: KitPickupEntityData (Frostbite Container)
---
### Base Classes

[PickupEntityData](PickupEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| KitPickupEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| KitPickupEntityData(KitPickupEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| KitPickupEntityData([PickupEntityData](PickupEntityData) other)                | Upcast an instance of type [PickupEntityData](PickupEntityData) to [KitPickupEntityData](KitPickupEntityData).                |
| KitPickupEntityData([GamePhysicsEntityData](GamePhysicsEntityData) other)      | Upcast an instance of type [GamePhysicsEntityData](GamePhysicsEntityData) to [KitPickupEntityData](KitPickupEntityData).      |
| KitPickupEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [KitPickupEntityData](KitPickupEntityData).                    |
| KitPickupEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [KitPickupEntityData](KitPickupEntityData).              |
| KitPickupEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [KitPickupEntityData](KitPickupEntityData).                            |
| KitPickupEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [KitPickupEntityData](KitPickupEntityData).                    |
| KitPickupEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [KitPickupEntityData](KitPickupEntityData).              |
| KitPickupEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [KitPickupEntityData](KitPickupEntityData). |

## Properties

| Name                  | Type | Description |
| --------------------- | ---- | ----------- |
| keepAdditionalWeapons | bool |             |
| keepAmmoState         | bool |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [KitPickupEntityData](KitPickupEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [KitPickupEntityData](KitPickupEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
