---
title: IntRecordingData (Frostbite Container)
---
### Base Classes

[PropertyRecordingData](PropertyRecordingData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| IntRecordingData()                                                          | Create a new instance of this container type.                                                                           |
| IntRecordingData(IntRecordingData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| IntRecordingData([PropertyRecordingData](PropertyRecordingData) other)      | Upcast an instance of type [PropertyRecordingData](PropertyRecordingData) to [IntRecordingData](IntRecordingData).      |
| IntRecordingData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [IntRecordingData](IntRecordingData). |

## Properties

| Name   | Type       | Description |
| ------ | ---------- | ----------- |
| values | number\[\] |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [IntRecordingData](IntRecordingData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [IntRecordingData](IntRecordingData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
