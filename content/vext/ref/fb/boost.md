---
title: Boost
---

## Summary

### Constructors

|  |
| --- |
| **[Boost](#constructor-0)**() |
| **[Boost](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "forwardStrength" >}} | float |
| {{< prop "reverseStrength" >}} | float |
| {{< prop "dissipationTime" >}} | float |
| {{< prop "recoveryTime" >}} | float |
| {{< prop "crawlStrength" >}} | float |
| {{< prop "accelerationScale" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [Boost](/vext/ref/fb/boost) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "Boost" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### Boost {#constructor-0}

> **Boost**()

Creates a new [Boost](/vext/ref/fb/boost) frostbite instance.

### Boost {#constructor-1}

> **Boost**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [Boost](/vext/ref/fb/boost) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "forwardStrength" %}}

> **float**

### {{% prop-heading "reverseStrength" %}}

> **float**

### {{% prop-heading "dissipationTime" %}}

> **float**

### {{% prop-heading "recoveryTime" %}}

> **float**

### {{% prop-heading "crawlStrength" %}}

> **float**

### {{% prop-heading "accelerationScale" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [Boost](/vext/ref/fb/boost)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Boost](/vext/ref/fb/boost)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [Boost](/vext/ref/fb/boost) type.

