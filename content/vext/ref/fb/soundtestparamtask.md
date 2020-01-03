---
title: SoundTestParamTask
---
### Base Classes

[SoundTestTaskSpec](SoundTestTaskSpec)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| SoundTestParamTask()                                                          | Create a new instance of this container type.                                                                               |
| SoundTestParamTask(SoundTestParamTask other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| SoundTestParamTask([SoundTestTaskSpec](SoundTestTaskSpec) other)              | Upcast an instance of type [SoundTestTaskSpec](SoundTestTaskSpec) to [SoundTestParamTask](SoundTestParamTask).              |
| SoundTestParamTask([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundTestParamTask](SoundTestParamTask). |

## Properties

| Name         | Type                                             | Description |
| ------------ | ------------------------------------------------ | ----------- |
| paramName    | string                                           |             |
| behavior     | [SoundTestParamBehavior](SoundTestParamBehavior) |             |
| rangeMin     | number                                           |             |
| rangeMax     | number                                           |             |
| initialValue | number                                           |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [SoundTestParamTask](SoundTestParamTask) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoundTestParamTask](SoundTestParamTask) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
