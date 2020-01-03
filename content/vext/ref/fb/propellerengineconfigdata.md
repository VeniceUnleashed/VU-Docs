---
title: PropellerEngineConfigData
---
### Base Classes

[EngineConfigData](/vext/ref/fb/engineconfigdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| PropellerEngineConfigData()                                                          | Create a new instance of this container type.                                                                                             |
| PropellerEngineConfigData(PropellerEngineConfigData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| PropellerEngineConfigData([EngineConfigData](/vext/ref/fb/engineconfigdata/) other)                | Upcast an instance of type [EngineConfigData](/vext/ref/fb/engineconfigdata/) to [PropellerEngineConfigData](/vext/ref/fb/propellerengineconfigdata/).                |
| PropellerEngineConfigData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PropellerEngineConfigData](/vext/ref/fb/propellerengineconfigdata/). |

## Properties

| Name                         | Type                                               | Description |
| ---------------------------- | -------------------------------------------------- | ----------- |
| horisontalForceOffset        | [Vec3](/vext/ref/shared/class/vec3)                  |             |
| propellerType                | [PropellerType](/vext/ref/fb/propellertype/)                     |             |
| rotorConfig                  | [RotorParameters](/vext/ref/fb/rotorparameters/)                 |             |
| forceMagnitudeInputType      | [ForceMagnitudeInputType](/vext/ref/fb/forcemagnitudeinputtype/) |             |
| directionVectorIndex         | number                                             |             |
| forceMagnitudeMultiplier     | number                                             |             |
| liftForceSpringConstant      | number                                             |             |
| liftForceDampingConstant     | number                                             |             |
| cyclicInputScaleRoll         | number                                             |             |
| cyclicRollLiftMod            | number                                             |             |
| cyclicRollStrafeMod          | number                                             |             |
| cyclicInputScalePitch        | number                                             |             |
| cyclicPitchLiftMod           | number                                             |             |
| cyclicPitchStrafeMod         | number                                             |             |
| cyclicPitchStrafeBrakeMod    | number                                             |             |
| collectiveInputIdle          | number                                             |             |
| collectiveThrottleInputScale | number                                             |             |
| collectiveBrakeInputScale    | number                                             |             |
| defaultAngleOfAttack         | number                                             |             |
| attackAngleMod               | number                                             |             |
| stabilizerMod                | number                                             |             |
| horisontalMinEffectVelocity  | number                                             |             |
| horisontalMinEffectMod       | number                                             |             |
| pitchStrength                | number                                             |             |
| pitchFromVel                 | number                                             |             |
| gravityMod                   | number                                             |             |
| spForwardStrength            | number                                             |             |
| spSidewaysStrength           | number                                             |             |
| spVerticalStrength           | number                                             |             |
| velocityFromPitch            | number                                             |             |
| pitchLimit                   | number                                             |             |
| bankingStrength              | number                                             |             |
| bankingLimit                 | number                                             |             |
| rollStrength                 | number                                             |             |
| pitchUpWhenBankStrength      | number                                             |             |
| pitchUpWhenBankLimit         | number                                             |             |
| spDefault                    | bool                                               |             |
| enableNewHelicopter          | bool                                               |             |
| spAllowed                    | bool                                               |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [PropellerEngineConfigData](/vext/ref/fb/propellerengineconfigdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PropellerEngineConfigData](/vext/ref/fb/propellerengineconfigdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
