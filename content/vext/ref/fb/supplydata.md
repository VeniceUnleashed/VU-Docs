---
title: SupplyData
---

## Summary

### Constructors

|  |
| --- |
| **[SupplyData](#constructor-0)**() |
| **[SupplyData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "healing" >}} | [SupplyUnitSphereData](/vext/ref/fb/supplyunitspheredata) |
| {{< prop "ammo" >}} | [SupplyUnitSphereData](/vext/ref/fb/supplyunitspheredata) |
| {{< prop "supplyVehicles" >}} | bool |
| {{< prop "supplySoldiers" >}} | bool |
| {{< prop "teamSpecific" >}} | bool |
| {{< prop "excludeSelf" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [SupplyData](/vext/ref/fb/supplydata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SupplyData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SupplyData {#constructor-0}

> **SupplyData**()

Creates a new [SupplyData](/vext/ref/fb/supplydata) frostbite instance.

### SupplyData {#constructor-1}

> **SupplyData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SupplyData](/vext/ref/fb/supplydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "healing" %}}

> **[SupplyUnitSphereData](/vext/ref/fb/supplyunitspheredata)**

### {{% prop-heading "ammo" %}}

> **[SupplyUnitSphereData](/vext/ref/fb/supplyunitspheredata)**

### {{% prop-heading "supplyVehicles" %}}

> **bool**

### {{% prop-heading "supplySoldiers" %}}

> **bool**

### {{% prop-heading "teamSpecific" %}}

> **bool**

### {{% prop-heading "excludeSelf" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [SupplyData](/vext/ref/fb/supplydata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SupplyData](/vext/ref/fb/supplydata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SupplyData](/vext/ref/fb/supplydata) type.

