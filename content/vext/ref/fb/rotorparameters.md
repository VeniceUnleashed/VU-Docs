---
title: RotorParameters
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[RotorParameters](#constructor-0)**() |
| **[RotorParameters](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[RotorParameters](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "cyclicInputScaleRoll" >}} | float |
| {{< prop "cyclicInputScalePitch" >}} | float |
| {{< prop "collectiveThrottleInputScale" >}} | float |
| {{< prop "collectiveBrakeInputScale" >}} | float |
| {{< prop "collectiveInputIdle" >}} | float |
| {{< prop "horizontalForceModifier" >}} | float |
| {{< prop "angleOfAttack" >}} | [Vec2](/vext/ref/shared/class/vec2)[] |
| {{< prop "cyclicFadeOutOffset" >}} | float |
| {{< prop "additionalGravityModifier" >}} | float |
| {{< prop "horisontalMinEffectMod" >}} | float |
| {{< prop "horisontalMinEffectVelocity" >}} | float |
| {{< prop "enableHorisontalMinEffect" >}} | bool |
| {{< prop "reverseThrottle" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "RotorParameters" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### RotorParameters {#constructor-0}
> **RotorParameters**()

Creates a new [RotorParameters](/vext/ref/fb/rotorparameters) frostbite instance.

### RotorParameters {#constructor-1}
> **RotorParameters**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [RotorParameters](/vext/ref/fb/rotorparameters) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### RotorParameters {#constructor-2}
> **RotorParameters**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RotorParameters](/vext/ref/fb/rotorparameters). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [RotorParameters](/vext/ref/fb/rotorparameters). |

## Properties
### {{% prop-heading "cyclicInputScaleRoll" %}}
> **float**

### {{% prop-heading "cyclicInputScalePitch" %}}
> **float**

### {{% prop-heading "collectiveThrottleInputScale" %}}
> **float**

### {{% prop-heading "collectiveBrakeInputScale" %}}
> **float**

### {{% prop-heading "collectiveInputIdle" %}}
> **float**

### {{% prop-heading "horizontalForceModifier" %}}
> **float**

### {{% prop-heading "angleOfAttack" %}}
> **[Vec2](/vext/ref/shared/class/vec2)**[]

### {{% prop-heading "cyclicFadeOutOffset" %}}
> **float**

### {{% prop-heading "additionalGravityModifier" %}}
> **float**

### {{% prop-heading "horisontalMinEffectMod" %}}
> **float**

### {{% prop-heading "horisontalMinEffectVelocity" %}}
> **float**

### {{% prop-heading "enableHorisontalMinEffect" %}}
> **bool**

### {{% prop-heading "reverseThrottle" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [RotorParameters](/vext/ref/fb/rotorparameters) type.

