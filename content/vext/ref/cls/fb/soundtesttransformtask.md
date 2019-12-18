---
title: SoundTestTransformTask (Frostbite Container)
---
### Base Classes

[SoundTestTaskSpec](SoundTestTaskSpec)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| SoundTestTransformTask()                                                          | Create a new instance of this container type.                                                                                       |
| SoundTestTransformTask(SoundTestTransformTask other)                              | Create a reference copy of an instance of the same type.                                                                            |
| SoundTestTransformTask([SoundTestTaskSpec](SoundTestTaskSpec) other)              | Upcast an instance of type [SoundTestTaskSpec](SoundTestTaskSpec) to [SoundTestTransformTask](SoundTestTransformTask).              |
| SoundTestTransformTask([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SoundTestTransformTask](SoundTestTransformTask). |

## Properties

| Name             | Type                                                     | Description |
| ---------------- | -------------------------------------------------------- | ----------- |
| initialPosition  | [Vec3](/vext/ref/cls/shr/Vec3)                        |             |
| behavior         | [SoundTestTransformBehavior](SoundTestTransformBehavior) |             |
| relativeListener | bool                                                     |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SoundTestTransformTask](SoundTestTransformTask) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SoundTestTransformTask](SoundTestTransformTask) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
