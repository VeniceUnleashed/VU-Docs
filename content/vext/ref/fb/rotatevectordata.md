---
title: RotateVectorData
---

Inherits from 
[EvaluatorData](/vext/ref/fb/evaluatordata)

## Summary
### Constructors
| |
| ----------- |
| **[RotateVectorData](#constructor-0)**() |
| **[RotateVectorData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[RotateVectorData](#constructor-2)**(other: [EvaluatorData](/vext/ref/fb/evaluatordata)) |
| **[RotateVectorData](#constructor-3)**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata)) |
| **[RotateVectorData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "angle" >}} | float |
| {{< prop "rotateWithinPlane" >}} | bool |
| {{< prop "inputAffectsPhi" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "RotateVectorData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### RotateVectorData {#constructor-0}
> **RotateVectorData**()

Creates a new [RotateVectorData](/vext/ref/fb/rotatevectordata) frostbite instance.

### RotateVectorData {#constructor-1}
> **RotateVectorData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [RotateVectorData](/vext/ref/fb/rotatevectordata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### RotateVectorData {#constructor-2}
> **RotateVectorData**(other: [EvaluatorData](/vext/ref/fb/evaluatordata))

Casts an instance of type [EvaluatorData](/vext/ref/fb/evaluatordata) to [RotateVectorData](/vext/ref/fb/rotatevectordata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EvaluatorData](/vext/ref/fb/evaluatordata) | The instance to cast to [RotateVectorData](/vext/ref/fb/rotatevectordata). |

### RotateVectorData {#constructor-3}
> **RotateVectorData**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata))

Casts an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata) to [RotateVectorData](/vext/ref/fb/rotatevectordata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EmitterComponentData](/vext/ref/fb/emittercomponentdata) | The instance to cast to [RotateVectorData](/vext/ref/fb/rotatevectordata). |

### RotateVectorData {#constructor-4}
> **RotateVectorData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RotateVectorData](/vext/ref/fb/rotatevectordata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [RotateVectorData](/vext/ref/fb/rotatevectordata). |

## Properties
### {{% prop-heading "angle" %}}
> **float**

### {{% prop-heading "rotateWithinPlane" %}}
> **bool**

### {{% prop-heading "inputAffectsPhi" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [RotateVectorData](/vext/ref/fb/rotatevectordata) type.

