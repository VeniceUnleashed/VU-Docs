---
title: Strengths
---

## Summary

### Constructors

|  |
| --- |
| **[Strengths](#constructor-0)**() |
| **[Strengths](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "infantry" >}} | float |
| {{< prop "lightArmour" >}} | float |
| {{< prop "heavyArmour" >}} | float |
| {{< prop "helicopter" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [Strengths](/vext/ref/fb/strengths) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "Strengths" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### Strengths {#constructor-0}

> **Strengths**()

Creates a new [Strengths](/vext/ref/fb/strengths) frostbite instance.

### Strengths {#constructor-1}

> **Strengths**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [Strengths](/vext/ref/fb/strengths) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "infantry" %}}

> **float**

### {{% prop-heading "lightArmour" %}}

> **float**

### {{% prop-heading "heavyArmour" %}}

> **float**

### {{% prop-heading "helicopter" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [Strengths](/vext/ref/fb/strengths)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Strengths](/vext/ref/fb/strengths)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [Strengths](/vext/ref/fb/strengths) type.

