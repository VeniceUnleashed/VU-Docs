---
title: AISettingsData
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[AISettingsData](#constructor-0)**() |
| **[AISettingsData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[AISettingsData](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[AISettingsData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "soundEnvironmentConstants" >}} | [SoundEnvironmentConstantData](/vext/ref/fb/soundenvironmentconstantdata) \| nil |
| {{< prop "coverConstants" >}} | [CoverConstantData](/vext/ref/fb/coverconstantdata) \| nil |
| {{< prop "decisionConstants" >}} | [DecisionConstantData](/vext/ref/fb/decisionconstantdata) \| nil |
| {{< prop "positionEvaluationConstants" >}} | [PositionEvaluationConstantData](/vext/ref/fb/positionevaluationconstantdata) \| nil |
| {{< prop "timingConstants" >}} | [TimingConstantData](/vext/ref/fb/timingconstantdata) \| nil |
| {{< prop "debugConstants" >}} | [DebugConstantData](/vext/ref/fb/debugconstantdata) \| nil |
| {{< prop "readinessLevels" >}} | [ReadinessLevels](/vext/ref/fb/readinesslevels) |
| {{< prop "defaultBehaviourTemplate" >}} | [BehaviourTemplateData](/vext/ref/fb/behaviourtemplatedata) \| nil |
| {{< prop "defaultVehicleType" >}} | [AIVehicleBehaviourData](/vext/ref/fb/aivehiclebehaviourdata) \| nil |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AISettingsData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AISettingsData {#constructor-0}
> **AISettingsData**()

Creates a new [AISettingsData](/vext/ref/fb/aisettingsdata) frostbite instance.

### AISettingsData {#constructor-1}
> **AISettingsData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [AISettingsData](/vext/ref/fb/aisettingsdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### AISettingsData {#constructor-2}
> **AISettingsData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [AISettingsData](/vext/ref/fb/aisettingsdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [AISettingsData](/vext/ref/fb/aisettingsdata). |

### AISettingsData {#constructor-3}
> **AISettingsData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AISettingsData](/vext/ref/fb/aisettingsdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [AISettingsData](/vext/ref/fb/aisettingsdata). |

## Properties
### {{% prop-heading "soundEnvironmentConstants" %}}
> **[SoundEnvironmentConstantData](/vext/ref/fb/soundenvironmentconstantdata)** | **nil**

### {{% prop-heading "coverConstants" %}}
> **[CoverConstantData](/vext/ref/fb/coverconstantdata)** | **nil**

### {{% prop-heading "decisionConstants" %}}
> **[DecisionConstantData](/vext/ref/fb/decisionconstantdata)** | **nil**

### {{% prop-heading "positionEvaluationConstants" %}}
> **[PositionEvaluationConstantData](/vext/ref/fb/positionevaluationconstantdata)** | **nil**

### {{% prop-heading "timingConstants" %}}
> **[TimingConstantData](/vext/ref/fb/timingconstantdata)** | **nil**

### {{% prop-heading "debugConstants" %}}
> **[DebugConstantData](/vext/ref/fb/debugconstantdata)** | **nil**

### {{% prop-heading "readinessLevels" %}}
> **[ReadinessLevels](/vext/ref/fb/readinesslevels)**

### {{% prop-heading "defaultBehaviourTemplate" %}}
> **[BehaviourTemplateData](/vext/ref/fb/behaviourtemplatedata)** | **nil**

### {{% prop-heading "defaultVehicleType" %}}
> **[AIVehicleBehaviourData](/vext/ref/fb/aivehiclebehaviourdata)** | **nil**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AISettingsData](/vext/ref/fb/aisettingsdata) type.

