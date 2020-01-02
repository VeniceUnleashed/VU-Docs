---
title: ShootAtFromCoverData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| ShootAtFromCoverData()                                                          | Create a new instance of this container type.                                                                                   |
| ShootAtFromCoverData(ShootAtFromCoverData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| ShootAtFromCoverData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [ShootAtFromCoverData](ShootAtFromCoverData).                            |
| ShootAtFromCoverData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [ShootAtFromCoverData](ShootAtFromCoverData).                    |
| ShootAtFromCoverData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [ShootAtFromCoverData](ShootAtFromCoverData).              |
| ShootAtFromCoverData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ShootAtFromCoverData](ShootAtFromCoverData). |

## Properties

| Name                    | Type                         | Description |
| ----------------------- | ---------------------------- | ----------- |
| strengthType            | [StrengthType](StrengthType) |             |
| shootType               | [ShootType](ShootType)       |             |
| cycleTargets            | bool                         |             |
| randomTargetOrder       | bool                         |             |
| preferAlternativeWeapon | bool                         |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [ShootAtFromCoverData](ShootAtFromCoverData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ShootAtFromCoverData](ShootAtFromCoverData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
