---
title: AimAtOrderEntityData (Frostbite Container)
---
### Base Classes

[BFOrderEntityData](BFOrderEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| AimAtOrderEntityData()                                                          | Create a new instance of this container type.                                                                                   |
| AimAtOrderEntityData(AimAtOrderEntityData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| AimAtOrderEntityData([BFOrderEntityData](BFOrderEntityData) other)              | Upcast an instance of type [BFOrderEntityData](BFOrderEntityData) to [AimAtOrderEntityData](AimAtOrderEntityData).              |
| AimAtOrderEntityData([OrderEntityData](OrderEntityData) other)                  | Upcast an instance of type [OrderEntityData](OrderEntityData) to [AimAtOrderEntityData](AimAtOrderEntityData).                  |
| AimAtOrderEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [AimAtOrderEntityData](AimAtOrderEntityData).                            |
| AimAtOrderEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [AimAtOrderEntityData](AimAtOrderEntityData).                    |
| AimAtOrderEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [AimAtOrderEntityData](AimAtOrderEntityData).              |
| AimAtOrderEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AimAtOrderEntityData](AimAtOrderEntityData). |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [AimAtOrderEntityData](AimAtOrderEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AimAtOrderEntityData](AimAtOrderEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
