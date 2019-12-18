---
title: RecordedInputData (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| RecordedInputData()                                                          | Create a new instance of this container type.                                                                             |
| RecordedInputData(RecordedInputData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| RecordedInputData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [RecordedInputData](RecordedInputData).                                      |
| RecordedInputData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [RecordedInputData](RecordedInputData). |

## Properties

| Name      | Type                                                 | Description |
| --------- | ---------------------------------------------------- | ----------- |
| trackData | [InputRecorderTrackData](InputRecorderTrackData)\[\] |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [RecordedInputData](RecordedInputData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [RecordedInputData](RecordedInputData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
