---
title: DynamicWeaponPickupEntityData
---
### Base Classes

[PickupEntityData](PickupEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| DynamicWeaponPickupEntityData()                                                          | Create a new instance of this container type.                                                                                                     |
| DynamicWeaponPickupEntityData(DynamicWeaponPickupEntityData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| DynamicWeaponPickupEntityData([PickupEntityData](PickupEntityData) other)                | Upcast an instance of type [PickupEntityData](PickupEntityData) to [DynamicWeaponPickupEntityData](DynamicWeaponPickupEntityData).                |
| DynamicWeaponPickupEntityData([GamePhysicsEntityData](GamePhysicsEntityData) other)      | Upcast an instance of type [GamePhysicsEntityData](GamePhysicsEntityData) to [DynamicWeaponPickupEntityData](DynamicWeaponPickupEntityData).      |
| DynamicWeaponPickupEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [DynamicWeaponPickupEntityData](DynamicWeaponPickupEntityData).                    |
| DynamicWeaponPickupEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [DynamicWeaponPickupEntityData](DynamicWeaponPickupEntityData).              |
| DynamicWeaponPickupEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [DynamicWeaponPickupEntityData](DynamicWeaponPickupEntityData).                            |
| DynamicWeaponPickupEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [DynamicWeaponPickupEntityData](DynamicWeaponPickupEntityData).                    |
| DynamicWeaponPickupEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [DynamicWeaponPickupEntityData](DynamicWeaponPickupEntityData).              |
| DynamicWeaponPickupEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DynamicWeaponPickupEntityData](DynamicWeaponPickupEntityData). |

## Properties

| Name          | Type                                                           | Description |
| ------------- | -------------------------------------------------------------- | ----------- |
| weaponSlots   | [DynamicWeaponPickupSlotData](DynamicWeaponPickupSlotData)\[\] |             |
| keepAmmoState | bool                                                           |             |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [DynamicWeaponPickupEntityData](DynamicWeaponPickupEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DynamicWeaponPickupEntityData](DynamicWeaponPickupEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
