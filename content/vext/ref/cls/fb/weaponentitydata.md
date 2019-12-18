---
title: WeaponEntityData (Frostbite Container)
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| WeaponEntityData()                                                          | Create a new instance of this container type.                                                                           |
| WeaponEntityData(WeaponEntityData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| WeaponEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [WeaponEntityData](WeaponEntityData).                    |
| WeaponEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [WeaponEntityData](WeaponEntityData).              |
| WeaponEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [WeaponEntityData](WeaponEntityData).                            |
| WeaponEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [WeaponEntityData](WeaponEntityData).                    |
| WeaponEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [WeaponEntityData](WeaponEntityData).              |
| WeaponEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [WeaponEntityData](WeaponEntityData). |

## Properties

| Name             | Type                                   | Description |
| ---------------- | -------------------------------------- | ----------- |
| weaponStates     | [WeaponStateData](WeaponStateData)\[\] |             |
| weaponClass      | [WeaponClassEnum](WeaponClassEnum)     |             |
| aiData           | [GameAIWeaponData](GameAIWeaponData)   |             |
| weaponFiring     | [WeaponFiringData](WeaponFiringData)   |             |
| customWeaponType | [WeaponData](WeaponData)               |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [WeaponEntityData](WeaponEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [WeaponEntityData](WeaponEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
