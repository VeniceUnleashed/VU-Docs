---
title: HealingSphereData
---

## Summary

### Constructors

|  |
| --- |
| **[HealingSphereData](#constructor-0)**() |
| **[HealingSphereData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "radius" >}} | float |
| {{< prop "healthIncSpeed" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [HealingSphereData](/vext/ref/fb/healingspheredata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "HealingSphereData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### HealingSphereData {#constructor-0}

> **HealingSphereData**()

Creates a new [HealingSphereData](/vext/ref/fb/healingspheredata) frostbite instance.

### HealingSphereData {#constructor-1}

> **HealingSphereData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [HealingSphereData](/vext/ref/fb/healingspheredata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "radius" %}}

> **float**

### {{% prop-heading "healthIncSpeed" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [HealingSphereData](/vext/ref/fb/healingspheredata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[HealingSphereData](/vext/ref/fb/healingspheredata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [HealingSphereData](/vext/ref/fb/healingspheredata) type.

