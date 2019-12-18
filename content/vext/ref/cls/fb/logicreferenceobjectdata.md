---
title: LogicReferenceObjectData (Frostbite Container)
---
### Base Classes

[ReferenceObjectData](ReferenceObjectData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| LogicReferenceObjectData()                                                          | Create a new instance of this container type.                                                                                           |
| LogicReferenceObjectData(LogicReferenceObjectData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| LogicReferenceObjectData([ReferenceObjectData](ReferenceObjectData) other)          | Upcast an instance of type [ReferenceObjectData](ReferenceObjectData) to [LogicReferenceObjectData](LogicReferenceObjectData).          |
| LogicReferenceObjectData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [LogicReferenceObjectData](LogicReferenceObjectData).                    |
| LogicReferenceObjectData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [LogicReferenceObjectData](LogicReferenceObjectData).              |
| LogicReferenceObjectData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [LogicReferenceObjectData](LogicReferenceObjectData). |

## Properties

| Name     | Type                 | Description |
| -------- | -------------------- | ----------- |
| subRealm | [SubRealm](SubRealm) |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [LogicReferenceObjectData](LogicReferenceObjectData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [LogicReferenceObjectData](LogicReferenceObjectData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
