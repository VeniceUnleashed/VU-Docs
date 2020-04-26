---
title: FloatOption
---

## Summary

### Constructors

|  |
| --- |
| **[FloatOption](#constructor-0)**() |
| **[FloatOption](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "value" >}} | float |
| {{< prop "min" >}} | float |
| {{< prop "max" >}} | float |
| {{< prop "step" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [FloatOption](/vext/ref/fb/floatoption) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "FloatOption" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### FloatOption {#constructor-0}

> **FloatOption**()

Creates a new [FloatOption](/vext/ref/fb/floatoption) frostbite instance.

### FloatOption {#constructor-1}

> **FloatOption**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [FloatOption](/vext/ref/fb/floatoption) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "name" %}}

> **string**

### {{% prop-heading "value" %}}

> **float**

### {{% prop-heading "min" %}}

> **float**

### {{% prop-heading "max" %}}

> **float**

### {{% prop-heading "step" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [FloatOption](/vext/ref/fb/floatoption)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[FloatOption](/vext/ref/fb/floatoption)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [FloatOption](/vext/ref/fb/floatoption) type.

