---
title: EvaluatorData
---

Inherits from 
[EmitterComponentData](/vext/ref/fb/emittercomponentdata)

## Summary
### Constructors
| |
| ----------- |
| **[EvaluatorData](#constructor-0)**() |
| **[EvaluatorData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[EvaluatorData](#constructor-2)**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata)) |
| **[EvaluatorData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "emitterParameter" >}} | [EmitterParameter](/vext/ref/fb/emitterparameter) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EvaluatorData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EvaluatorData {#constructor-0}
> **EvaluatorData**()

Creates a new [EvaluatorData](/vext/ref/fb/evaluatordata) frostbite instance.

### EvaluatorData {#constructor-1}
> **EvaluatorData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [EvaluatorData](/vext/ref/fb/evaluatordata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### EvaluatorData {#constructor-2}
> **EvaluatorData**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata))

Casts an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata) to [EvaluatorData](/vext/ref/fb/evaluatordata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EmitterComponentData](/vext/ref/fb/emittercomponentdata) | The instance to cast to [EvaluatorData](/vext/ref/fb/evaluatordata). |

### EvaluatorData {#constructor-3}
> **EvaluatorData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EvaluatorData](/vext/ref/fb/evaluatordata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [EvaluatorData](/vext/ref/fb/evaluatordata). |

## Properties
### {{% prop-heading "emitterParameter" %}}
> **[EmitterParameter](/vext/ref/fb/emitterparameter)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EvaluatorData](/vext/ref/fb/evaluatordata) type.

