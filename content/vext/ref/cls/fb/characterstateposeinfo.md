---
title: CharacterStatePoseInfo (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| CharacterStatePoseInfo()                                                          | Create a new instance of this container type.                                                                                       |
| CharacterStatePoseInfo(CharacterStatePoseInfo other)                              | Create a reference copy of an instance of the same type.                                                                            |
| CharacterStatePoseInfo([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [CharacterStatePoseInfo](CharacterStatePoseInfo). |

## Properties

| Name             | Type                                   | Description |
| ---------------- | -------------------------------------- | ----------- |
| poseType         | [CharacterPoseType](CharacterPoseType) |             |
| velocity         | number                                 |             |
| accelerationGain | number                                 |             |
| decelerationGain | number                                 |             |
| sprintGain       | number                                 |             |
| sprintMultiplier | number                                 |             |
| speedModifier    | [SpeedModifierData](SpeedModifierData) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [CharacterStatePoseInfo](CharacterStatePoseInfo) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [CharacterStatePoseInfo](CharacterStatePoseInfo) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
