---
title: AmmoConfigData
---

## Summary

### Constructors

|  |
| --- |
| **[AmmoConfigData](#constructor-0)**() |
| **[AmmoConfigData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "magazineCapacity" >}} | int |
| {{< prop "numberOfMagazines" >}} | int |
| {{< prop "traceFrequency" >}} | int |
| {{< prop "ammoPickupMinAmount" >}} | int |
| {{< prop "ammoPickupMaxAmount" >}} | int |
| {{< prop "autoReplenishDelay" >}} | float |
| {{< prop "ammoBagPickupAmount" >}} | int |
| {{< prop "ammoBagPickupDelayMultiplier" >}} | float |
| {{< prop "autoReplenishMagazine" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [AmmoConfigData](/vext/ref/fb/ammoconfigdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AmmoConfigData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AmmoConfigData {#constructor-0}

> **AmmoConfigData**()

Creates a new [AmmoConfigData](/vext/ref/fb/ammoconfigdata) frostbite instance.

### AmmoConfigData {#constructor-1}

> **AmmoConfigData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AmmoConfigData](/vext/ref/fb/ammoconfigdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "magazineCapacity" %}}

> **int**

### {{% prop-heading "numberOfMagazines" %}}

> **int**

### {{% prop-heading "traceFrequency" %}}

> **int**

### {{% prop-heading "ammoPickupMinAmount" %}}

> **int**

### {{% prop-heading "ammoPickupMaxAmount" %}}

> **int**

### {{% prop-heading "autoReplenishDelay" %}}

> **float**

### {{% prop-heading "ammoBagPickupAmount" %}}

> **int**

### {{% prop-heading "ammoBagPickupDelayMultiplier" %}}

> **float**

### {{% prop-heading "autoReplenishMagazine" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [AmmoConfigData](/vext/ref/fb/ammoconfigdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[AmmoConfigData](/vext/ref/fb/ammoconfigdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AmmoConfigData](/vext/ref/fb/ammoconfigdata) type.

