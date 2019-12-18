---
title: EntityRecordingData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| EntityRecordingData()                                                          | Create a new instance of this container type.                                                                                 |
| EntityRecordingData(EntityRecordingData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| EntityRecordingData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [EntityRecordingData](EntityRecordingData). |

## Properties

| Name       | Type                                               | Description |
| ---------- | -------------------------------------------------- | ----------- |
| entityGuid | [Guid](/vext/ref/cls/shr/Guid)                  |             |
| data       | [PropertyRecordingData](PropertyRecordingData)\[\] |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [EntityRecordingData](EntityRecordingData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [EntityRecordingData](EntityRecordingData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
