---
title: WeaponStateEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| WeaponStateEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| WeaponStateEntityData(WeaponStateEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| WeaponStateEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [WeaponStateEntityData](WeaponStateEntityData).                            |
| WeaponStateEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [WeaponStateEntityData](WeaponStateEntityData).                    |
| WeaponStateEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [WeaponStateEntityData](WeaponStateEntityData).              |
| WeaponStateEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponStateEntityData](WeaponStateEntityData). |

## Properties

| Name       | Type           | Description |
| ---------- | -------------- | ----------- |
| realm      | [Realm](Realm) |             |
| weaponSlot | number         |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [WeaponStateEntityData](WeaponStateEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponStateEntityData](WeaponStateEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
