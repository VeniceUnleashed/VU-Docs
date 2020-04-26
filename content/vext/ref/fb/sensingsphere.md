---
title: SensingSphere
---

## Summary

### Constructors

|  |
| --- |
| **[SensingSphere](#constructor-0)**() |
| **[SensingSphere](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "position" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "radiusSqr" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [SensingSphere](/vext/ref/fb/sensingsphere) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SensingSphere" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SensingSphere {#constructor-0}

> **SensingSphere**()

Creates a new [SensingSphere](/vext/ref/fb/sensingsphere) frostbite instance.

### SensingSphere {#constructor-1}

> **SensingSphere**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SensingSphere](/vext/ref/fb/sensingsphere) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "position" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "radiusSqr" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [SensingSphere](/vext/ref/fb/sensingsphere)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SensingSphere](/vext/ref/fb/sensingsphere)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SensingSphere](/vext/ref/fb/sensingsphere) type.

