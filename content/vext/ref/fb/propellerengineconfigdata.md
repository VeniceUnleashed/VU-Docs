---
title: PropellerEngineConfigData
---
### Base Classes

[EngineConfigData](EngineConfigData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| PropellerEngineConfigData()                                                          | Create a new instance of this container type.                                                                                             |
| PropellerEngineConfigData(PropellerEngineConfigData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| PropellerEngineConfigData([EngineConfigData](EngineConfigData) other)                | Upcast an instance of type [EngineConfigData](EngineConfigData) to [PropellerEngineConfigData](PropellerEngineConfigData).                |
| PropellerEngineConfigData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PropellerEngineConfigData](PropellerEngineConfigData). |

## Properties

| Name                         | Type                                               | Description |
| ---------------------------- | -------------------------------------------------- | ----------- |
| horisontalForceOffset        | [Vec3](/vext/ref/shared/class/vec3)                  |             |
| propellerType                | [PropellerType](PropellerType)                     |             |
| rotorConfig                  | [RotorParameters](RotorParameters)                 |             |
| forceMagnitudeInputType      | [ForceMagnitudeInputType](ForceMagnitudeInputType) |             |
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
| [PropellerEngineConfigData](PropellerEngineConfigData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PropellerEngineConfigData](PropellerEngineConfigData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
