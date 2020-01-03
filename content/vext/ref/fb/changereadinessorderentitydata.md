---
title: ChangeReadinessOrderEntityData
---
### Base Classes

[BFOrderEntityData](BFOrderEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| ChangeReadinessOrderEntityData()                                                          | Create a new instance of this container type.                                                                                                       |
| ChangeReadinessOrderEntityData(ChangeReadinessOrderEntityData other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| ChangeReadinessOrderEntityData([BFOrderEntityData](BFOrderEntityData) other)              | Upcast an instance of type [BFOrderEntityData](BFOrderEntityData) to [ChangeReadinessOrderEntityData](ChangeReadinessOrderEntityData).              |
| ChangeReadinessOrderEntityData([OrderEntityData](OrderEntityData) other)                  | Upcast an instance of type [OrderEntityData](OrderEntityData) to [ChangeReadinessOrderEntityData](ChangeReadinessOrderEntityData).                  |
| ChangeReadinessOrderEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [ChangeReadinessOrderEntityData](ChangeReadinessOrderEntityData).                            |
| ChangeReadinessOrderEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [ChangeReadinessOrderEntityData](ChangeReadinessOrderEntityData).                    |
| ChangeReadinessOrderEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [ChangeReadinessOrderEntityData](ChangeReadinessOrderEntityData).              |
| ChangeReadinessOrderEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ChangeReadinessOrderEntityData](ChangeReadinessOrderEntityData). |

## Properties

| Name          | Type                             | Description |
| ------------- | -------------------------------- | ----------- |
| pulse         | [ReadinessLevel](ReadinessLevel) |             |
| minimum       | [ReadinessLevel](ReadinessLevel) |             |
| allowDecrease | bool                             |             |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ChangeReadinessOrderEntityData](ChangeReadinessOrderEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ChangeReadinessOrderEntityData](ChangeReadinessOrderEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
