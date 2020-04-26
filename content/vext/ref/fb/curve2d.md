---
title: Curve2D
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[Curve2D](#constructor-0)**() |
| **[Curve2D](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[Curve2D](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "curve" >}} | [Vec2](/vext/ref/shared/type/vec2)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "Curve2D" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### Curve2D {#constructor-0}

> **Curve2D**()

Creates a new [Curve2D](/vext/ref/fb/curve2d) frostbite instance.

### Curve2D {#constructor-1}

> **Curve2D**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [Curve2D](/vext/ref/fb/curve2d) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### Curve2D {#constructor-2}

> **Curve2D**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [Curve2D](/vext/ref/fb/curve2d). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [Curve2D](/vext/ref/fb/curve2d). |

## Properties

### {{% prop-heading "curve" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [Curve2D](/vext/ref/fb/curve2d) type.

