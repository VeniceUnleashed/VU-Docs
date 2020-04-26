---
title: PropellerEngineConfigData
---

Inherits from 
[EngineConfigData](/vext/ref/fb/engineconfigdata)

## Summary
### Constructors
| |
| ----------- |
| **[PropellerEngineConfigData](#constructor-0)**() |
| **[PropellerEngineConfigData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[PropellerEngineConfigData](#constructor-2)**(other: [EngineConfigData](/vext/ref/fb/engineconfigdata)) |
| **[PropellerEngineConfigData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "horisontalForceOffset" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "propellerType" >}} | [PropellerType](/vext/ref/fb/propellertype) |
| {{< prop "rotorConfig" >}} | [RotorParameters](/vext/ref/fb/rotorparameters) \| nil |
| {{< prop "forceMagnitudeInputType" >}} | [ForceMagnitudeInputType](/vext/ref/fb/forcemagnitudeinputtype) |
| {{< prop "directionVectorIndex" >}} | int |
| {{< prop "forceMagnitudeMultiplier" >}} | float |
| {{< prop "liftForceSpringConstant" >}} | float |
| {{< prop "liftForceDampingConstant" >}} | float |
| {{< prop "cyclicInputScaleRoll" >}} | float |
| {{< prop "cyclicRollLiftMod" >}} | float |
| {{< prop "cyclicRollStrafeMod" >}} | float |
| {{< prop "cyclicInputScalePitch" >}} | float |
| {{< prop "cyclicPitchLiftMod" >}} | float |
| {{< prop "cyclicPitchStrafeMod" >}} | float |
| {{< prop "cyclicPitchStrafeBrakeMod" >}} | float |
| {{< prop "collectiveInputIdle" >}} | float |
| {{< prop "collectiveThrottleInputScale" >}} | float |
| {{< prop "collectiveBrakeInputScale" >}} | float |
| {{< prop "defaultAngleOfAttack" >}} | float |
| {{< prop "attackAngleMod" >}} | float |
| {{< prop "stabilizerMod" >}} | float |
| {{< prop "horisontalMinEffectVelocity" >}} | float |
| {{< prop "horisontalMinEffectMod" >}} | float |
| {{< prop "pitchStrength" >}} | float |
| {{< prop "pitchFromVel" >}} | float |
| {{< prop "gravityMod" >}} | float |
| {{< prop "spForwardStrength" >}} | float |
| {{< prop "spSidewaysStrength" >}} | float |
| {{< prop "spVerticalStrength" >}} | float |
| {{< prop "velocityFromPitch" >}} | float |
| {{< prop "pitchLimit" >}} | float |
| {{< prop "bankingStrength" >}} | float |
| {{< prop "bankingLimit" >}} | float |
| {{< prop "rollStrength" >}} | float |
| {{< prop "pitchUpWhenBankStrength" >}} | float |
| {{< prop "pitchUpWhenBankLimit" >}} | float |
| {{< prop "spDefault" >}} | bool |
| {{< prop "enableNewHelicopter" >}} | bool |
| {{< prop "spAllowed" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PropellerEngineConfigData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PropellerEngineConfigData {#constructor-0}
> **PropellerEngineConfigData**()

Creates a new [PropellerEngineConfigData](/vext/ref/fb/propellerengineconfigdata) frostbite instance.

### PropellerEngineConfigData {#constructor-1}
> **PropellerEngineConfigData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [PropellerEngineConfigData](/vext/ref/fb/propellerengineconfigdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### PropellerEngineConfigData {#constructor-2}
> **PropellerEngineConfigData**(other: [EngineConfigData](/vext/ref/fb/engineconfigdata))

Casts an instance of type [EngineConfigData](/vext/ref/fb/engineconfigdata) to [PropellerEngineConfigData](/vext/ref/fb/propellerengineconfigdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EngineConfigData](/vext/ref/fb/engineconfigdata) | The instance to cast to [PropellerEngineConfigData](/vext/ref/fb/propellerengineconfigdata). |

### PropellerEngineConfigData {#constructor-3}
> **PropellerEngineConfigData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PropellerEngineConfigData](/vext/ref/fb/propellerengineconfigdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [PropellerEngineConfigData](/vext/ref/fb/propellerengineconfigdata). |

## Properties
### {{% prop-heading "horisontalForceOffset" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "propellerType" %}}
> **[PropellerType](/vext/ref/fb/propellertype)**

### {{% prop-heading "rotorConfig" %}}
> **[RotorParameters](/vext/ref/fb/rotorparameters)** | **nil**

### {{% prop-heading "forceMagnitudeInputType" %}}
> **[ForceMagnitudeInputType](/vext/ref/fb/forcemagnitudeinputtype)**

### {{% prop-heading "directionVectorIndex" %}}
> **int**

### {{% prop-heading "forceMagnitudeMultiplier" %}}
> **float**

### {{% prop-heading "liftForceSpringConstant" %}}
> **float**

### {{% prop-heading "liftForceDampingConstant" %}}
> **float**

### {{% prop-heading "cyclicInputScaleRoll" %}}
> **float**

### {{% prop-heading "cyclicRollLiftMod" %}}
> **float**

### {{% prop-heading "cyclicRollStrafeMod" %}}
> **float**

### {{% prop-heading "cyclicInputScalePitch" %}}
> **float**

### {{% prop-heading "cyclicPitchLiftMod" %}}
> **float**

### {{% prop-heading "cyclicPitchStrafeMod" %}}
> **float**

### {{% prop-heading "cyclicPitchStrafeBrakeMod" %}}
> **float**

### {{% prop-heading "collectiveInputIdle" %}}
> **float**

### {{% prop-heading "collectiveThrottleInputScale" %}}
> **float**

### {{% prop-heading "collectiveBrakeInputScale" %}}
> **float**

### {{% prop-heading "defaultAngleOfAttack" %}}
> **float**

### {{% prop-heading "attackAngleMod" %}}
> **float**

### {{% prop-heading "stabilizerMod" %}}
> **float**

### {{% prop-heading "horisontalMinEffectVelocity" %}}
> **float**

### {{% prop-heading "horisontalMinEffectMod" %}}
> **float**

### {{% prop-heading "pitchStrength" %}}
> **float**

### {{% prop-heading "pitchFromVel" %}}
> **float**

### {{% prop-heading "gravityMod" %}}
> **float**

### {{% prop-heading "spForwardStrength" %}}
> **float**

### {{% prop-heading "spSidewaysStrength" %}}
> **float**

### {{% prop-heading "spVerticalStrength" %}}
> **float**

### {{% prop-heading "velocityFromPitch" %}}
> **float**

### {{% prop-heading "pitchLimit" %}}
> **float**

### {{% prop-heading "bankingStrength" %}}
> **float**

### {{% prop-heading "bankingLimit" %}}
> **float**

### {{% prop-heading "rollStrength" %}}
> **float**

### {{% prop-heading "pitchUpWhenBankStrength" %}}
> **float**

### {{% prop-heading "pitchUpWhenBankLimit" %}}
> **float**

### {{% prop-heading "spDefault" %}}
> **bool**

### {{% prop-heading "enableNewHelicopter" %}}
> **bool**

### {{% prop-heading "spAllowed" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PropellerEngineConfigData](/vext/ref/fb/propellerengineconfigdata) type.

