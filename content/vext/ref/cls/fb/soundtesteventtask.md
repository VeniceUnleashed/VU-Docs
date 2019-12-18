---
title: SoundTestEventTask (Frostbite Container)
---
### Base Classes

[SoundTestTaskSpec](SoundTestTaskSpec)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| SoundTestEventTask()                                                          | Create a new instance of this container type.                                                                               |
| SoundTestEventTask(SoundTestEventTask other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| SoundTestEventTask([SoundTestTaskSpec](SoundTestTaskSpec) other)              | Upcast an instance of type [SoundTestTaskSpec](SoundTestTaskSpec) to [SoundTestEventTask](SoundTestEventTask).              |
| SoundTestEventTask([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SoundTestEventTask](SoundTestEventTask). |

## Properties

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| eventName | string |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [SoundTestEventTask](SoundTestEventTask) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SoundTestEventTask](SoundTestEventTask) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
