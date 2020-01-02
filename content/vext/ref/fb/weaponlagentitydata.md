---
title: WeaponLagEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| WeaponLagEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| WeaponLagEntityData(WeaponLagEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| WeaponLagEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [WeaponLagEntityData](WeaponLagEntityData).                            |
| WeaponLagEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [WeaponLagEntityData](WeaponLagEntityData).                    |
| WeaponLagEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [WeaponLagEntityData](WeaponLagEntityData).              |
| WeaponLagEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponLagEntityData](WeaponLagEntityData). |

## Properties

| Name    | Type                                 | Description |
| ------- | ------------------------------------ | ----------- |
| binding | [WeaponLagBinding](WeaponLagBinding) |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [WeaponLagEntityData](WeaponLagEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponLagEntityData](WeaponLagEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
