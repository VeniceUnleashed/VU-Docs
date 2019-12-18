---
title: WorldPartReferenceObjectData (Frostbite Container)
---
### Base Classes

[ReferenceObjectData](ReferenceObjectData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| WorldPartReferenceObjectData()                                                          | Create a new instance of this container type.                                                                                                   |
| WorldPartReferenceObjectData(WorldPartReferenceObjectData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| WorldPartReferenceObjectData([ReferenceObjectData](ReferenceObjectData) other)          | Upcast an instance of type [ReferenceObjectData](ReferenceObjectData) to [WorldPartReferenceObjectData](WorldPartReferenceObjectData).          |
| WorldPartReferenceObjectData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [WorldPartReferenceObjectData](WorldPartReferenceObjectData).                    |
| WorldPartReferenceObjectData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [WorldPartReferenceObjectData](WorldPartReferenceObjectData).              |
| WorldPartReferenceObjectData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [WorldPartReferenceObjectData](WorldPartReferenceObjectData). |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [WorldPartReferenceObjectData](WorldPartReferenceObjectData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [WorldPartReferenceObjectData](WorldPartReferenceObjectData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
