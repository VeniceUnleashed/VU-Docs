---
title: SoundTestTask
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| SoundTestTask()                                                          | Create a new instance of this container type.                                                                     |
| SoundTestTask(SoundTestTask other)                                       | Create a reference copy of an instance of the same type.                                                          |
| SoundTestTask([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundTestTask](SoundTestTask). |

## Properties

| Name        | Type                                     | Description |
| ----------- | ---------------------------------------- | ----------- |
| spec        | [SoundTestTaskSpec](SoundTestTaskSpec)   |             |
| param       | [SoundTestTaskParam](SoundTestTaskParam) |             |
| startTime   | number                                   |             |
| repetitions | number                                   |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [SoundTestTask](SoundTestTask) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoundTestTask](SoundTestTask) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
