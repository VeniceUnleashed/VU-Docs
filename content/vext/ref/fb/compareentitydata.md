---
title: CompareEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| CompareEntityData()                                                          | Create a new instance of this container type.                                                                             |
| CompareEntityData(CompareEntityData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| CompareEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [CompareEntityData](CompareEntityData).                            |
| CompareEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [CompareEntityData](CompareEntityData).                    |
| CompareEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [CompareEntityData](CompareEntityData).              |
| CompareEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CompareEntityData](CompareEntityData). |

## Properties

| Name     | Type                   | Description |
| -------- | ---------------------- | ----------- |
| realm    | [Realm](Realm)         |             |
| operator | [CompareOp](CompareOp) |             |
| floatIn0 | number                 |             |
| floatIn1 | number                 |             |
| intIn0   | number                 |             |
| intIn1   | number                 |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [CompareEntityData](CompareEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CompareEntityData](CompareEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
