---
title: AntTrackItemData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| AntTrackItemData()                                                          | Create a new instance of this container type.                                                                           |
| AntTrackItemData(AntTrackItemData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| AntTrackItemData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AntTrackItemData](AntTrackItemData). |

## Properties

| Name               | Type             | Description |
| ------------------ | ---------------- | ----------- |
| controller         | [AntRef](AntRef) |             |
| sequenceTrackIndex | number           |             |
| startTime          | number           |             |
| numTicks           | number           |             |
| resumeAtEnd        | bool             |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [AntTrackItemData](AntTrackItemData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AntTrackItemData](AntTrackItemData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
