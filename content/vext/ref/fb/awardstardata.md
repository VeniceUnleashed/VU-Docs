---
title: AwardStarData
---
### Base Classes

[AwardData](AwardData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| AwardStarData()                                                          | Create a new instance of this container type.                                                                     |
| AwardStarData(AwardStarData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| AwardStarData([AwardData](AwardData) other)                              | Upcast an instance of type [AwardData](AwardData) to [AwardStarData](AwardStarData).                              |
| AwardStarData([AbstractAwardData](AbstractAwardData) other)              | Upcast an instance of type [AbstractAwardData](AbstractAwardData) to [AwardStarData](AwardStarData).              |
| AwardStarData([TreeNodeBase](TreeNodeBase) other)                        | Upcast an instance of type [TreeNodeBase](TreeNodeBase) to [AwardStarData](AwardStarData).                        |
| AwardStarData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AwardStarData](AwardStarData). |

## Properties

| Name         | Type                                   | Description |
| ------------ | -------------------------------------- | ----------- |
| starTemplate | [AwardStarNameData](AwardStarNameData) |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [AwardStarData](AwardStarData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AwardStarData](AwardStarData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
