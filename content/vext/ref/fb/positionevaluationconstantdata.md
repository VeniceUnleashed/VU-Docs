---
title: PositionEvaluationConstantData
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[PositionEvaluationConstantData](#constructor-0)**() |
| **[PositionEvaluationConstantData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[PositionEvaluationConstantData](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[PositionEvaluationConstantData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "ownRandomPositionsRadius" >}} | float |
| {{< prop "leaderRandomPositionsRadius" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PositionEvaluationConstantData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PositionEvaluationConstantData {#constructor-0}
> **PositionEvaluationConstantData**()

Creates a new [PositionEvaluationConstantData](/vext/ref/fb/positionevaluationconstantdata) frostbite instance.

### PositionEvaluationConstantData {#constructor-1}
> **PositionEvaluationConstantData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [PositionEvaluationConstantData](/vext/ref/fb/positionevaluationconstantdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### PositionEvaluationConstantData {#constructor-2}
> **PositionEvaluationConstantData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [PositionEvaluationConstantData](/vext/ref/fb/positionevaluationconstantdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [PositionEvaluationConstantData](/vext/ref/fb/positionevaluationconstantdata). |

### PositionEvaluationConstantData {#constructor-3}
> **PositionEvaluationConstantData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PositionEvaluationConstantData](/vext/ref/fb/positionevaluationconstantdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [PositionEvaluationConstantData](/vext/ref/fb/positionevaluationconstantdata). |

## Properties
### {{% prop-heading "ownRandomPositionsRadius" %}}
> **float**

### {{% prop-heading "leaderRandomPositionsRadius" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PositionEvaluationConstantData](/vext/ref/fb/positionevaluationconstantdata) type.

