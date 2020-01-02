---
title: WeaponPickupEntityData
---
### Base Classes

[PickupEntityData](PickupEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| WeaponPickupEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| WeaponPickupEntityData(WeaponPickupEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| WeaponPickupEntityData([PickupEntityData](PickupEntityData) other)                | Upcast an instance of type [PickupEntityData](PickupEntityData) to [WeaponPickupEntityData](WeaponPickupEntityData).                |
| WeaponPickupEntityData([GamePhysicsEntityData](GamePhysicsEntityData) other)      | Upcast an instance of type [GamePhysicsEntityData](GamePhysicsEntityData) to [WeaponPickupEntityData](WeaponPickupEntityData).      |
| WeaponPickupEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [WeaponPickupEntityData](WeaponPickupEntityData).                    |
| WeaponPickupEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [WeaponPickupEntityData](WeaponPickupEntityData).              |
| WeaponPickupEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [WeaponPickupEntityData](WeaponPickupEntityData).                            |
| WeaponPickupEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [WeaponPickupEntityData](WeaponPickupEntityData).                    |
| WeaponPickupEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [WeaponPickupEntityData](WeaponPickupEntityData).              |
| WeaponPickupEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponPickupEntityData](WeaponPickupEntityData). |

## Properties

| Name              | Type                                     | Description |
| ----------------- | ---------------------------------------- | ----------- |
| weapons           | [WeaponPickupData](WeaponPickupData)\[\] |             |
| useForPersistence | bool                                     |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [WeaponPickupEntityData](WeaponPickupEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponPickupEntityData](WeaponPickupEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
