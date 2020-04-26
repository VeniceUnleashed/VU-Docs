---
title: PointEnvelope
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[PointEnvelope](#constructor-0)**() |
| **[PointEnvelope](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[PointEnvelope](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "points" >}} | [PointEnvelopePoint](/vext/ref/fb/pointenvelopepoint)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PointEnvelope" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PointEnvelope {#constructor-0}

> **PointEnvelope**()

Creates a new [PointEnvelope](/vext/ref/fb/pointenvelope) frostbite instance.

### PointEnvelope {#constructor-1}

> **PointEnvelope**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PointEnvelope](/vext/ref/fb/pointenvelope) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### PointEnvelope {#constructor-2}

> **PointEnvelope**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [PointEnvelope](/vext/ref/fb/pointenvelope). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [PointEnvelope](/vext/ref/fb/pointenvelope). |

## Properties

### {{% prop-heading "points" %}}

> **[PointEnvelopePoint](/vext/ref/fb/pointenvelopepoint)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PointEnvelope](/vext/ref/fb/pointenvelope) type.

