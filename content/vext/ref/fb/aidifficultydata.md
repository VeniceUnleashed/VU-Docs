---
title: AIDifficultyData
---

Inherits from 
[GameAIDifficultyData](/vext/ref/fb/gameaidifficultydata)

## Summary
### Constructors
| |
| ----------- |
| **[AIDifficultyData](#constructor-0)**() |
| **[AIDifficultyData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[AIDifficultyData](#constructor-2)**(other: [GameAIDifficultyData](/vext/ref/fb/gameaidifficultydata)) |
| **[AIDifficultyData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "accuracyIncreaseTimeModifier" >}} | float |
| {{< prop "startAccuracyModifierStanding" >}} | float |
| {{< prop "startAccuracyModifierCrouching" >}} | float |
| {{< prop "finalAccuracyModifierStanding" >}} | float |
| {{< prop "finalAccuracyModifierCrouching" >}} | float |
| {{< prop "readinessReactionTimeMultiplier" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AIDifficultyData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AIDifficultyData {#constructor-0}
> **AIDifficultyData**()

Creates a new [AIDifficultyData](/vext/ref/fb/aidifficultydata) frostbite instance.

### AIDifficultyData {#constructor-1}
> **AIDifficultyData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [AIDifficultyData](/vext/ref/fb/aidifficultydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### AIDifficultyData {#constructor-2}
> **AIDifficultyData**(other: [GameAIDifficultyData](/vext/ref/fb/gameaidifficultydata))

Casts an instance of type [GameAIDifficultyData](/vext/ref/fb/gameaidifficultydata) to [AIDifficultyData](/vext/ref/fb/aidifficultydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameAIDifficultyData](/vext/ref/fb/gameaidifficultydata) | The instance to cast to [AIDifficultyData](/vext/ref/fb/aidifficultydata). |

### AIDifficultyData {#constructor-3}
> **AIDifficultyData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AIDifficultyData](/vext/ref/fb/aidifficultydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [AIDifficultyData](/vext/ref/fb/aidifficultydata). |

## Properties
### {{% prop-heading "name" %}}
> **string**

### {{% prop-heading "accuracyIncreaseTimeModifier" %}}
> **float**

### {{% prop-heading "startAccuracyModifierStanding" %}}
> **float**

### {{% prop-heading "startAccuracyModifierCrouching" %}}
> **float**

### {{% prop-heading "finalAccuracyModifierStanding" %}}
> **float**

### {{% prop-heading "finalAccuracyModifierCrouching" %}}
> **float**

### {{% prop-heading "readinessReactionTimeMultiplier" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AIDifficultyData](/vext/ref/fb/aidifficultydata) type.

