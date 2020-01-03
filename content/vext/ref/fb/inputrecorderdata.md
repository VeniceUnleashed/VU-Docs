---
title: InputRecorderData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| InputRecorderData()                                                          | Create a new instance of this container type.                                                                             |
| InputRecorderData(InputRecorderData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| InputRecorderData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [InputRecorderData](InputRecorderData). |

## Properties

| Name                  | Type                                         | Description |
| --------------------- | -------------------------------------------- | ----------- |
| fileNamePrefix        | string                                       |             |
| fileName              | string                                       |             |
| toggleRecordAction    | [EntryInputActionEnum](EntryInputActionEnum) |             |
| autoIncrementFileName | bool                                         |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [InputRecorderData](InputRecorderData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [InputRecorderData](InputRecorderData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
