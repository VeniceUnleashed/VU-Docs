---
title: SoundTestParamTask
---
### Base Classes

[SoundTestTaskSpec](/vext/ref/fb/soundtesttaskspec/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| SoundTestParamTask()                                                          | Create a new instance of this container type.                                                                               |
| SoundTestParamTask(SoundTestParamTask other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| SoundTestParamTask([SoundTestTaskSpec](/vext/ref/fb/soundtesttaskspec/) other)              | Upcast an instance of type [SoundTestTaskSpec](/vext/ref/fb/soundtesttaskspec/) to [SoundTestParamTask](/vext/ref/fb/soundtestparamtask/).              |
| SoundTestParamTask([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundTestParamTask](/vext/ref/fb/soundtestparamtask/). |

## Properties

| Name         | Type                                             | Description |
| ------------ | ------------------------------------------------ | ----------- |
| paramName    | string                                           |             |
| behavior     | [SoundTestParamBehavior](/vext/ref/fb/soundtestparambehavior/) |             |
| rangeMin     | number                                           |             |
| rangeMax     | number                                           |             |
| initialValue | number                                           |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [SoundTestParamTask](/vext/ref/fb/soundtestparamtask/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoundTestParamTask](/vext/ref/fb/soundtestparamtask/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
