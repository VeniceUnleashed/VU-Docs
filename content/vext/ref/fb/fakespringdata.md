---
title: FakeSpringData
---

Inherits from [FakePhysicsData](/vext/ref/fb/fakephysicsdata)

## Summary

### Constructors

|  |
| --- |
| **[FakeSpringData](#constructor-0)**() |
| **[FakeSpringData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[FakeSpringData](#constructor-2)**(other: [FakePhysicsData](/vext/ref/fb/fakephysicsdata)) |
| **[FakeSpringData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "direction" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "length" >}} | float |
| {{< prop "acceleration" >}} | float |
| {{< prop "progressiveExponent" >}} | float |
| {{< prop "damping" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "FakeSpringData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### FakeSpringData {#constructor-0}

> **FakeSpringData**()

Creates a new [FakeSpringData](/vext/ref/fb/fakespringdata) frostbite instance.

### FakeSpringData {#constructor-1}

> **FakeSpringData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [FakeSpringData](/vext/ref/fb/fakespringdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### FakeSpringData {#constructor-2}

> **FakeSpringData**(other: [FakePhysicsData](/vext/ref/fb/fakephysicsdata))

Casts an instance of type [FakePhysicsData](/vext/ref/fb/fakephysicsdata) to [FakeSpringData](/vext/ref/fb/fakespringdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [FakePhysicsData](/vext/ref/fb/fakephysicsdata) | The instance to cast to [FakeSpringData](/vext/ref/fb/fakespringdata). |

### FakeSpringData {#constructor-3}

> **FakeSpringData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [FakeSpringData](/vext/ref/fb/fakespringdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [FakeSpringData](/vext/ref/fb/fakespringdata). |

## Properties

### {{% prop-heading "direction" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "length" %}}

> **float**

### {{% prop-heading "acceleration" %}}

> **float**

### {{% prop-heading "progressiveExponent" %}}

> **float**

### {{% prop-heading "damping" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [FakeSpringData](/vext/ref/fb/fakespringdata) type.

