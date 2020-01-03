---
title: SoundTestEventTask
---
### Base Classes

[SoundTestTaskSpec](/vext/ref/fb/soundtesttaskspec/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| SoundTestEventTask()                                                          | Create a new instance of this container type.                                                                               |
| SoundTestEventTask(SoundTestEventTask other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| SoundTestEventTask([SoundTestTaskSpec](/vext/ref/fb/soundtesttaskspec/) other)              | Upcast an instance of type [SoundTestTaskSpec](/vext/ref/fb/soundtesttaskspec/) to [SoundTestEventTask](/vext/ref/fb/soundtesteventtask/).              |
| SoundTestEventTask([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundTestEventTask](/vext/ref/fb/soundtesteventtask/). |

## Properties

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| eventName | string |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [SoundTestEventTask](/vext/ref/fb/soundtesteventtask/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoundTestEventTask](/vext/ref/fb/soundtesteventtask/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
