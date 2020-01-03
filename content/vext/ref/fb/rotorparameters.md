---
title: RotorParameters
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| RotorParameters()                                                          | Create a new instance of this container type.                                                                         |
| RotorParameters(RotorParameters other)                                     | Create a reference copy of an instance of the same type.                                                              |
| RotorParameters([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RotorParameters](/vext/ref/fb/rotorparameters/). |

## Properties

| Name                         | Type                                  | Description |
| ---------------------------- | ------------------------------------- | ----------- |
| cyclicInputScaleRoll         | number                                |             |
| cyclicInputScalePitch        | number                                |             |
| collectiveThrottleInputScale | number                                |             |
| collectiveBrakeInputScale    | number                                |             |
| collectiveInputIdle          | number                                |             |
| horizontalForceModifier      | number                                |             |
| angleOfAttack                | [Vec2](/vext/ref/shared/class/vec2)\[\] |             |
| cyclicFadeOutOffset          | number                                |             |
| additionalGravityModifier    | number                                |             |
| horisontalMinEffectMod       | number                                |             |
| horisontalMinEffectVelocity  | number                                |             |
| enableHorisontalMinEffect    | bool                                  |             |
| reverseThrottle              | bool                                  |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [RotorParameters](/vext/ref/fb/rotorparameters/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RotorParameters](/vext/ref/fb/rotorparameters/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
