---
title: JetEngineConfigData
---

Inherits from 
[EngineConfigData](/vext/ref/fb/engineconfigdata)

## Summary
### Constructors
| |
| ----------- |
| **[JetEngineConfigData](#constructor-0)**() |
| **[JetEngineConfigData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[JetEngineConfigData](#constructor-2)**(other: [EngineConfigData](/vext/ref/fb/engineconfigdata)) |
| **[JetEngineConfigData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "powerFadeOutRange" >}} | [Vec2](/vext/ref/shared/class/vec2) |
| {{< prop "forceMagnitudeMultiplier" >}} | float |
| {{< prop "angleInputYMultiplier" >}} | float |
| {{< prop "angleInputPitchMultiplier" >}} | float |
| {{< prop "maxVelocity" >}} | float |
| {{< prop "directionVectorIndex" >}} | int |
| {{< prop "isWaterJetEngine" >}} | bool |
| {{< prop "isTurnable" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "JetEngineConfigData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### JetEngineConfigData {#constructor-0}
> **JetEngineConfigData**()

Creates a new [JetEngineConfigData](/vext/ref/fb/jetengineconfigdata) frostbite instance.

### JetEngineConfigData {#constructor-1}
> **JetEngineConfigData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [JetEngineConfigData](/vext/ref/fb/jetengineconfigdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### JetEngineConfigData {#constructor-2}
> **JetEngineConfigData**(other: [EngineConfigData](/vext/ref/fb/engineconfigdata))

Casts an instance of type [EngineConfigData](/vext/ref/fb/engineconfigdata) to [JetEngineConfigData](/vext/ref/fb/jetengineconfigdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EngineConfigData](/vext/ref/fb/engineconfigdata) | The instance to cast to [JetEngineConfigData](/vext/ref/fb/jetengineconfigdata). |

### JetEngineConfigData {#constructor-3}
> **JetEngineConfigData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [JetEngineConfigData](/vext/ref/fb/jetengineconfigdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [JetEngineConfigData](/vext/ref/fb/jetengineconfigdata). |

## Properties
### {{% prop-heading "powerFadeOutRange" %}}
> **[Vec2](/vext/ref/shared/class/vec2)**

### {{% prop-heading "forceMagnitudeMultiplier" %}}
> **float**

### {{% prop-heading "angleInputYMultiplier" %}}
> **float**

### {{% prop-heading "angleInputPitchMultiplier" %}}
> **float**

### {{% prop-heading "maxVelocity" %}}
> **float**

### {{% prop-heading "directionVectorIndex" %}}
> **int**

### {{% prop-heading "isWaterJetEngine" %}}
> **bool**

### {{% prop-heading "isTurnable" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [JetEngineConfigData](/vext/ref/fb/jetengineconfigdata) type.

