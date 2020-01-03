---
title: SequenceData
---
### Base Classes

[SequenceEntityData](SequenceEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| SequenceData()                                                          | Create a new instance of this container type.                                                                   |
| SequenceData(SequenceData other)                                        | Create a reference copy of an instance of the same type.                                                        |
| SequenceData([SequenceEntityData](SequenceEntityData) other)            | Upcast an instance of type [SequenceEntityData](SequenceEntityData) to [SequenceData](SequenceData).            |
| SequenceData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [SequenceData](SequenceData).                            |
| SequenceData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SequenceData](SequenceData).                    |
| SequenceData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SequenceData](SequenceData).              |
| SequenceData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SequenceData](SequenceData). |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [SequenceData](SequenceData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SequenceData](SequenceData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
