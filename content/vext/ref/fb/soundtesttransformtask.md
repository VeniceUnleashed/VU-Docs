---
title: SoundTestTransformTask
---
### Base Classes

[SoundTestTaskSpec](/vext/ref/fb/soundtesttaskspec/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| SoundTestTransformTask()                                                          | Create a new instance of this container type.                                                                                       |
| SoundTestTransformTask(SoundTestTransformTask other)                              | Create a reference copy of an instance of the same type.                                                                            |
| SoundTestTransformTask([SoundTestTaskSpec](/vext/ref/fb/soundtesttaskspec/) other)              | Upcast an instance of type [SoundTestTaskSpec](/vext/ref/fb/soundtesttaskspec/) to [SoundTestTransformTask](/vext/ref/fb/soundtesttransformtask/).              |
| SoundTestTransformTask([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundTestTransformTask](/vext/ref/fb/soundtesttransformtask/). |

## Properties

| Name             | Type                                                     | Description |
| ---------------- | -------------------------------------------------------- | ----------- |
| initialPosition  | [Vec3](/vext/ref/shared/class/vec3)                        |             |
| behavior         | [SoundTestTransformBehavior](/vext/ref/fb/soundtesttransformbehavior/) |             |
| relativeListener | bool                                                     |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SoundTestTransformTask](/vext/ref/fb/soundtesttransformtask/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoundTestTransformTask](/vext/ref/fb/soundtesttransformtask/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
