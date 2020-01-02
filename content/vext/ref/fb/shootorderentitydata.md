---
title: ShootOrderEntityData
---
### Base Classes

[BFOrderEntityData](BFOrderEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| ShootOrderEntityData()                                                          | Create a new instance of this container type.                                                                                   |
| ShootOrderEntityData(ShootOrderEntityData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| ShootOrderEntityData([BFOrderEntityData](BFOrderEntityData) other)              | Upcast an instance of type [BFOrderEntityData](BFOrderEntityData) to [ShootOrderEntityData](ShootOrderEntityData).              |
| ShootOrderEntityData([OrderEntityData](OrderEntityData) other)                  | Upcast an instance of type [OrderEntityData](OrderEntityData) to [ShootOrderEntityData](ShootOrderEntityData).                  |
| ShootOrderEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [ShootOrderEntityData](ShootOrderEntityData).                            |
| ShootOrderEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [ShootOrderEntityData](ShootOrderEntityData).                    |
| ShootOrderEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [ShootOrderEntityData](ShootOrderEntityData).              |
| ShootOrderEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ShootOrderEntityData](ShootOrderEntityData). |

## Properties

| Name                      | Type                         | Description |
| ------------------------- | ---------------------------- | ----------- |
| strengthType              | [StrengthType](StrengthType) |             |
| pose                      | [PoseType](PoseType)         |             |
| shootType                 | [ShootType](ShootType)       |             |
| preferAlternativeWeapon   | bool                         |             |
| completeWhenHumanIsSensed | bool                         |             |
| cycleTargets              | bool                         |             |
| randomTargetOrder         | bool                         |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [ShootOrderEntityData](ShootOrderEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ShootOrderEntityData](ShootOrderEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
