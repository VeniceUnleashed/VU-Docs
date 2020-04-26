---
title: BoxEvaluatorData
---

Inherits from [EvaluatorData](/vext/ref/fb/evaluatordata)

## Summary

### Constructors

|  |
| --- |
| **[BoxEvaluatorData](#constructor-0)**() |
| **[BoxEvaluatorData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[BoxEvaluatorData](#constructor-2)**(other: [EvaluatorData](/vext/ref/fb/evaluatordata)) |
| **[BoxEvaluatorData](#constructor-3)**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata)) |
| **[BoxEvaluatorData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "dimensions" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "pivot" >}} | [Vec3](/vext/ref/shared/type/vec3) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "BoxEvaluatorData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### BoxEvaluatorData {#constructor-0}

> **BoxEvaluatorData**()

Creates a new [BoxEvaluatorData](/vext/ref/fb/boxevaluatordata) frostbite instance.

### BoxEvaluatorData {#constructor-1}

> **BoxEvaluatorData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [BoxEvaluatorData](/vext/ref/fb/boxevaluatordata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### BoxEvaluatorData {#constructor-2}

> **BoxEvaluatorData**(other: [EvaluatorData](/vext/ref/fb/evaluatordata))

Casts an instance of type [EvaluatorData](/vext/ref/fb/evaluatordata) to [BoxEvaluatorData](/vext/ref/fb/boxevaluatordata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EvaluatorData](/vext/ref/fb/evaluatordata) | The instance to cast to [BoxEvaluatorData](/vext/ref/fb/boxevaluatordata). |

### BoxEvaluatorData {#constructor-3}

> **BoxEvaluatorData**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata))

Casts an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata) to [BoxEvaluatorData](/vext/ref/fb/boxevaluatordata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EmitterComponentData](/vext/ref/fb/emittercomponentdata) | The instance to cast to [BoxEvaluatorData](/vext/ref/fb/boxevaluatordata). |

### BoxEvaluatorData {#constructor-4}

> **BoxEvaluatorData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [BoxEvaluatorData](/vext/ref/fb/boxevaluatordata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [BoxEvaluatorData](/vext/ref/fb/boxevaluatordata). |

## Properties

### {{% prop-heading "dimensions" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "pivot" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [BoxEvaluatorData](/vext/ref/fb/boxevaluatordata) type.

