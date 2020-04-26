---
title: NormalizeSettings
---

## Summary

### Constructors

|  |
| --- |
| **[NormalizeSettings](#constructor-0)**() |
| **[NormalizeSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "maximum" >}} | float |
| {{< prop "minimum" >}} | float |
| {{< prop "velocity" >}} | float |
| {{< prop "lower" >}} | float |
| {{< prop "upper" >}} | float |
| {{< prop "normalize" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [NormalizeSettings](/vext/ref/fb/normalizesettings) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "NormalizeSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### NormalizeSettings {#constructor-0}

> **NormalizeSettings**()

Creates a new [NormalizeSettings](/vext/ref/fb/normalizesettings) frostbite instance.

### NormalizeSettings {#constructor-1}

> **NormalizeSettings**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [NormalizeSettings](/vext/ref/fb/normalizesettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "maximum" %}}

> **float**

### {{% prop-heading "minimum" %}}

> **float**

### {{% prop-heading "velocity" %}}

> **float**

### {{% prop-heading "lower" %}}

> **float**

### {{% prop-heading "upper" %}}

> **float**

### {{% prop-heading "normalize" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [NormalizeSettings](/vext/ref/fb/normalizesettings)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[NormalizeSettings](/vext/ref/fb/normalizesettings)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [NormalizeSettings](/vext/ref/fb/normalizesettings) type.

