---
title: SphereEvaluatorData
---

Inherits from 
[EvaluatorData](/vext/ref/fb/evaluatordata)

## Summary
### Constructors
| |
| ----------- |
| **[SphereEvaluatorData](#constructor-0)**() |
| **[SphereEvaluatorData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SphereEvaluatorData](#constructor-2)**(other: [EvaluatorData](/vext/ref/fb/evaluatordata)) |
| **[SphereEvaluatorData](#constructor-3)**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata)) |
| **[SphereEvaluatorData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "scale" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "pivot" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "radius" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SphereEvaluatorData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SphereEvaluatorData {#constructor-0}
> **SphereEvaluatorData**()

Creates a new [SphereEvaluatorData](/vext/ref/fb/sphereevaluatordata) frostbite instance.

### SphereEvaluatorData {#constructor-1}
> **SphereEvaluatorData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SphereEvaluatorData](/vext/ref/fb/sphereevaluatordata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SphereEvaluatorData {#constructor-2}
> **SphereEvaluatorData**(other: [EvaluatorData](/vext/ref/fb/evaluatordata))

Casts an instance of type [EvaluatorData](/vext/ref/fb/evaluatordata) to [SphereEvaluatorData](/vext/ref/fb/sphereevaluatordata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EvaluatorData](/vext/ref/fb/evaluatordata) | The instance to cast to [SphereEvaluatorData](/vext/ref/fb/sphereevaluatordata). |

### SphereEvaluatorData {#constructor-3}
> **SphereEvaluatorData**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata))

Casts an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata) to [SphereEvaluatorData](/vext/ref/fb/sphereevaluatordata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EmitterComponentData](/vext/ref/fb/emittercomponentdata) | The instance to cast to [SphereEvaluatorData](/vext/ref/fb/sphereevaluatordata). |

### SphereEvaluatorData {#constructor-4}
> **SphereEvaluatorData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SphereEvaluatorData](/vext/ref/fb/sphereevaluatordata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SphereEvaluatorData](/vext/ref/fb/sphereevaluatordata). |

## Properties
### {{% prop-heading "scale" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "pivot" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "radius" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SphereEvaluatorData](/vext/ref/fb/sphereevaluatordata) type.

