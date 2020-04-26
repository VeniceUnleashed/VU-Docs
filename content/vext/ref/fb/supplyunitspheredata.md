---
title: SupplyUnitSphereData
---

## Summary

### Constructors

|  |
| --- |
| **[SupplyUnitSphereData](#constructor-0)**() |
| **[SupplyUnitSphereData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "radius" >}} | float |
| {{< prop "supplyIncSpeed" >}} | float |
| {{< prop "supplyPointsCapacity" >}} | float |
| {{< prop "supplyPointsRefillSpeed" >}} | float |
| {{< prop "infiniteCapacity" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [SupplyUnitSphereData](/vext/ref/fb/supplyunitspheredata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SupplyUnitSphereData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SupplyUnitSphereData {#constructor-0}

> **SupplyUnitSphereData**()

Creates a new [SupplyUnitSphereData](/vext/ref/fb/supplyunitspheredata) frostbite instance.

### SupplyUnitSphereData {#constructor-1}

> **SupplyUnitSphereData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SupplyUnitSphereData](/vext/ref/fb/supplyunitspheredata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "radius" %}}

> **float**

### {{% prop-heading "supplyIncSpeed" %}}

> **float**

### {{% prop-heading "supplyPointsCapacity" %}}

> **float**

### {{% prop-heading "supplyPointsRefillSpeed" %}}

> **float**

### {{% prop-heading "infiniteCapacity" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [SupplyUnitSphereData](/vext/ref/fb/supplyunitspheredata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SupplyUnitSphereData](/vext/ref/fb/supplyunitspheredata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SupplyUnitSphereData](/vext/ref/fb/supplyunitspheredata) type.

