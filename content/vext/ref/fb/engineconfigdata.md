---
title: EngineConfigData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[EngineConfigData](#constructor-0)**() |
| **[EngineConfigData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[EngineConfigData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "position" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "rpmCurvePoints" >}} | float[] |
| {{< prop "torqueCurvePoints" >}} | float[] |
| {{< prop "rpmMin" >}} | float |
| {{< prop "rpmMax" >}} | float |
| {{< prop "rpmCut" >}} | float |
| {{< prop "enginePowerMultiplier" >}} | float |
| {{< prop "internalAccelerationFactor" >}} | float |
| {{< prop "internalDeaccelerationFactor" >}} | float |
| {{< prop "boost" >}} | [Boost](/vext/ref/fb/boost) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EngineConfigData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EngineConfigData {#constructor-0}
> **EngineConfigData**()

Creates a new [EngineConfigData](/vext/ref/fb/engineconfigdata) frostbite instance.

### EngineConfigData {#constructor-1}
> **EngineConfigData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [EngineConfigData](/vext/ref/fb/engineconfigdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### EngineConfigData {#constructor-2}
> **EngineConfigData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EngineConfigData](/vext/ref/fb/engineconfigdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [EngineConfigData](/vext/ref/fb/engineconfigdata). |

## Properties
### {{% prop-heading "position" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "rpmCurvePoints" %}}
> **float**[]

### {{% prop-heading "torqueCurvePoints" %}}
> **float**[]

### {{% prop-heading "rpmMin" %}}
> **float**

### {{% prop-heading "rpmMax" %}}
> **float**

### {{% prop-heading "rpmCut" %}}
> **float**

### {{% prop-heading "enginePowerMultiplier" %}}
> **float**

### {{% prop-heading "internalAccelerationFactor" %}}
> **float**

### {{% prop-heading "internalDeaccelerationFactor" %}}
> **float**

### {{% prop-heading "boost" %}}
> **[Boost](/vext/ref/fb/boost)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EngineConfigData](/vext/ref/fb/engineconfigdata) type.

