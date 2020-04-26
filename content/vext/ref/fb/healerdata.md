---
title: HealerData
---

## Summary

### Constructors

|  |
| --- |
| **[HealerData](#constructor-0)**() |
| **[HealerData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "radius" >}} | float |
| {{< prop "health" >}} | float |
| {{< prop "healingTime" >}} | float |
| {{< prop "pickUpDelay" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [HealerData](/vext/ref/fb/healerdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "HealerData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### HealerData {#constructor-0}

> **HealerData**()

Creates a new [HealerData](/vext/ref/fb/healerdata) frostbite instance.

### HealerData {#constructor-1}

> **HealerData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [HealerData](/vext/ref/fb/healerdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "radius" %}}

> **float**

### {{% prop-heading "health" %}}

> **float**

### {{% prop-heading "healingTime" %}}

> **float**

### {{% prop-heading "pickUpDelay" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [HealerData](/vext/ref/fb/healerdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[HealerData](/vext/ref/fb/healerdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [HealerData](/vext/ref/fb/healerdata) type.

