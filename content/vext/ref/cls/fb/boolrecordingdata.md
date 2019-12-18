---
title: BoolRecordingData (Frostbite Container)
---
### Base Classes

[PropertyRecordingData](PropertyRecordingData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| BoolRecordingData()                                                          | Create a new instance of this container type.                                                                             |
| BoolRecordingData(BoolRecordingData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| BoolRecordingData([PropertyRecordingData](PropertyRecordingData) other)      | Upcast an instance of type [PropertyRecordingData](PropertyRecordingData) to [BoolRecordingData](BoolRecordingData).      |
| BoolRecordingData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [BoolRecordingData](BoolRecordingData). |

## Properties

| Name   | Type     | Description |
| ------ | -------- | ----------- |
| values | bool\[\] |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [BoolRecordingData](BoolRecordingData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [BoolRecordingData](BoolRecordingData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
