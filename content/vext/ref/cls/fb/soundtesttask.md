---
title: SoundTestTask (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| SoundTestTask()                                                          | Create a new instance of this container type.                                                                     |
| SoundTestTask(SoundTestTask other)                                       | Create a reference copy of an instance of the same type.                                                          |
| SoundTestTask([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SoundTestTask](SoundTestTask). |

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
| [SoundTestTask](SoundTestTask) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SoundTestTask](SoundTestTask) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
