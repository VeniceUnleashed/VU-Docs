---
title: HudImpactData
---

## Summary

### Constructors

|  |
| --- |
| **[HudImpactData](#constructor-0)**() |
| **[HudImpactData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "maxHealth" >}} | float |
| {{< prop "minHealth" >}} | float |
| {{< prop "maxTimeVisible" >}} | float |
| {{< prop "minTimeVisible" >}} | float |
| {{< prop "enable" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [HudImpactData](/vext/ref/fb/hudimpactdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "HudImpactData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### HudImpactData {#constructor-0}

> **HudImpactData**()

Creates a new [HudImpactData](/vext/ref/fb/hudimpactdata) frostbite instance.

### HudImpactData {#constructor-1}

> **HudImpactData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [HudImpactData](/vext/ref/fb/hudimpactdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "maxHealth" %}}

> **float**

### {{% prop-heading "minHealth" %}}

> **float**

### {{% prop-heading "maxTimeVisible" %}}

> **float**

### {{% prop-heading "minTimeVisible" %}}

> **float**

### {{% prop-heading "enable" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [HudImpactData](/vext/ref/fb/hudimpactdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[HudImpactData](/vext/ref/fb/hudimpactdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [HudImpactData](/vext/ref/fb/hudimpactdata) type.

