---
title: CharacterStatePoseInfo
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| CharacterStatePoseInfo()                                                          | Create a new instance of this container type.                                                                                       |
| CharacterStatePoseInfo(CharacterStatePoseInfo other)                              | Create a reference copy of an instance of the same type.                                                                            |
| CharacterStatePoseInfo([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CharacterStatePoseInfo](/vext/ref/fb/characterstateposeinfo/). |

## Properties

| Name             | Type                                   | Description |
| ---------------- | -------------------------------------- | ----------- |
| poseType         | [CharacterPoseType](/vext/ref/fb/characterposetype/) |             |
| velocity         | number                                 |             |
| accelerationGain | number                                 |             |
| decelerationGain | number                                 |             |
| sprintGain       | number                                 |             |
| sprintMultiplier | number                                 |             |
| speedModifier    | [SpeedModifierData](/vext/ref/fb/speedmodifierdata/) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [CharacterStatePoseInfo](/vext/ref/fb/characterstateposeinfo/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CharacterStatePoseInfo](/vext/ref/fb/characterstateposeinfo/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
