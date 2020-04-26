---
title: SuppressionScoringHandlerData
---

Inherits from 
[ScoringHandlerData](/vext/ref/fb/scoringhandlerdata)

## Summary
### Constructors
| |
| ----------- |
| **[SuppressionScoringHandlerData](#constructor-0)**() |
| **[SuppressionScoringHandlerData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SuppressionScoringHandlerData](#constructor-2)**(other: [ScoringHandlerData](/vext/ref/fb/scoringhandlerdata)) |
| **[SuppressionScoringHandlerData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "suppressionAmountLimit" >}} | float |
| {{< prop "timeSinceSuppressionLimit" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SuppressionScoringHandlerData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SuppressionScoringHandlerData {#constructor-0}
> **SuppressionScoringHandlerData**()

Creates a new [SuppressionScoringHandlerData](/vext/ref/fb/suppressionscoringhandlerdata) frostbite instance.

### SuppressionScoringHandlerData {#constructor-1}
> **SuppressionScoringHandlerData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SuppressionScoringHandlerData](/vext/ref/fb/suppressionscoringhandlerdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SuppressionScoringHandlerData {#constructor-2}
> **SuppressionScoringHandlerData**(other: [ScoringHandlerData](/vext/ref/fb/scoringhandlerdata))

Casts an instance of type [ScoringHandlerData](/vext/ref/fb/scoringhandlerdata) to [SuppressionScoringHandlerData](/vext/ref/fb/suppressionscoringhandlerdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ScoringHandlerData](/vext/ref/fb/scoringhandlerdata) | The instance to cast to [SuppressionScoringHandlerData](/vext/ref/fb/suppressionscoringhandlerdata). |

### SuppressionScoringHandlerData {#constructor-3}
> **SuppressionScoringHandlerData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SuppressionScoringHandlerData](/vext/ref/fb/suppressionscoringhandlerdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SuppressionScoringHandlerData](/vext/ref/fb/suppressionscoringhandlerdata). |

## Properties
### {{% prop-heading "suppressionAmountLimit" %}}
> **float**

### {{% prop-heading "timeSinceSuppressionLimit" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SuppressionScoringHandlerData](/vext/ref/fb/suppressionscoringhandlerdata) type.

