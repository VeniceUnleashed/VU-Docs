---
title: SubWorldReferenceObjectData (Frostbite Container)
---
### Base Classes

[ReferenceObjectData](ReferenceObjectData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| SubWorldReferenceObjectData()                                                          | Create a new instance of this container type.                                                                                                 |
| SubWorldReferenceObjectData(SubWorldReferenceObjectData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| SubWorldReferenceObjectData([ReferenceObjectData](ReferenceObjectData) other)          | Upcast an instance of type [ReferenceObjectData](ReferenceObjectData) to [SubWorldReferenceObjectData](SubWorldReferenceObjectData).          |
| SubWorldReferenceObjectData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SubWorldReferenceObjectData](SubWorldReferenceObjectData).                    |
| SubWorldReferenceObjectData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SubWorldReferenceObjectData](SubWorldReferenceObjectData).              |
| SubWorldReferenceObjectData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SubWorldReferenceObjectData](SubWorldReferenceObjectData). |

## Properties

| Name              | Type                                                   | Description |
| ----------------- | ------------------------------------------------------ | ----------- |
| bundleName        | string                                                 |             |
| inclusionSettings | [SubWorldInclusionSettings](SubWorldInclusionSettings) |             |
| autoLoad          | bool                                                   |             |
| isWin32SubLevel   | bool                                                   |             |
| isXenonSubLevel   | bool                                                   |             |
| isPs3SubLevel     | bool                                                   |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SubWorldReferenceObjectData](SubWorldReferenceObjectData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SubWorldReferenceObjectData](SubWorldReferenceObjectData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
