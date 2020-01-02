---
title: WeaponUnlockPickupEntityData
---
### Base Classes

[PickupEntityData](PickupEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| WeaponUnlockPickupEntityData()                                                          | Create a new instance of this container type.                                                                                                   |
| WeaponUnlockPickupEntityData(WeaponUnlockPickupEntityData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| WeaponUnlockPickupEntityData([PickupEntityData](PickupEntityData) other)                | Upcast an instance of type [PickupEntityData](PickupEntityData) to [WeaponUnlockPickupEntityData](WeaponUnlockPickupEntityData).                |
| WeaponUnlockPickupEntityData([GamePhysicsEntityData](GamePhysicsEntityData) other)      | Upcast an instance of type [GamePhysicsEntityData](GamePhysicsEntityData) to [WeaponUnlockPickupEntityData](WeaponUnlockPickupEntityData).      |
| WeaponUnlockPickupEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [WeaponUnlockPickupEntityData](WeaponUnlockPickupEntityData).                    |
| WeaponUnlockPickupEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [WeaponUnlockPickupEntityData](WeaponUnlockPickupEntityData).              |
| WeaponUnlockPickupEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [WeaponUnlockPickupEntityData](WeaponUnlockPickupEntityData).                            |
| WeaponUnlockPickupEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [WeaponUnlockPickupEntityData](WeaponUnlockPickupEntityData).                    |
| WeaponUnlockPickupEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [WeaponUnlockPickupEntityData](WeaponUnlockPickupEntityData).              |
| WeaponUnlockPickupEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponUnlockPickupEntityData](WeaponUnlockPickupEntityData). |

## Properties

| Name                    | Type                                                 | Description |
| ----------------------- | ---------------------------------------------------- | ----------- |
| weapons                 | [WeaponUnlockPickupData](WeaponUnlockPickupData)\[\] |             |
| useForPersistence       | bool                                                 |             |
| randomlySelectOneWeapon | bool                                                 |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [WeaponUnlockPickupEntityData](WeaponUnlockPickupEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponUnlockPickupEntityData](WeaponUnlockPickupEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
