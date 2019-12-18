---
title: RotorParameters (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| RotorParameters()                                                          | Create a new instance of this container type.                                                                         |
| RotorParameters(RotorParameters other)                                     | Create a reference copy of an instance of the same type.                                                              |
| RotorParameters([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [RotorParameters](RotorParameters). |

## Properties

| Name                         | Type                                  | Description |
| ---------------------------- | ------------------------------------- | ----------- |
| cyclicInputScaleRoll         | number                                |             |
| cyclicInputScalePitch        | number                                |             |
| collectiveThrottleInputScale | number                                |             |
| collectiveBrakeInputScale    | number                                |             |
| collectiveInputIdle          | number                                |             |
| horizontalForceModifier      | number                                |             |
| angleOfAttack                | [Vec2](/vext/ref/cls/shr/Vec2)\[\] |             |
| cyclicFadeOutOffset          | number                                |             |
| additionalGravityModifier    | number                                |             |
| horisontalMinEffectMod       | number                                |             |
| horisontalMinEffectVelocity  | number                                |             |
| enableHorisontalMinEffect    | bool                                  |             |
| reverseThrottle              | bool                                  |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [RotorParameters](RotorParameters) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [RotorParameters](RotorParameters) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
