---
title: VehicleHealthZoneData
---

## Summary

### Constructors

|  |
| --- |
| **[VehicleHealthZoneData](#constructor-0)**() |
| **[VehicleHealthZoneData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "maxHealth" >}} | float |
| {{< prop "maxShieldHealth" >}} | float |
| {{< prop "damageAngleMultiplier" >}} | float |
| {{< prop "minDamageAngle" >}} | float |
| {{< prop "useDamageAngleCalculation" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [VehicleHealthZoneData](/vext/ref/fb/vehiclehealthzonedata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VehicleHealthZoneData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VehicleHealthZoneData {#constructor-0}

> **VehicleHealthZoneData**()

Creates a new [VehicleHealthZoneData](/vext/ref/fb/vehiclehealthzonedata) frostbite instance.

### VehicleHealthZoneData {#constructor-1}

> **VehicleHealthZoneData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VehicleHealthZoneData](/vext/ref/fb/vehiclehealthzonedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "maxHealth" %}}

> **float**

### {{% prop-heading "maxShieldHealth" %}}

> **float**

### {{% prop-heading "damageAngleMultiplier" %}}

> **float**

### {{% prop-heading "minDamageAngle" %}}

> **float**

### {{% prop-heading "useDamageAngleCalculation" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [VehicleHealthZoneData](/vext/ref/fb/vehiclehealthzonedata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[VehicleHealthZoneData](/vext/ref/fb/vehiclehealthzonedata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VehicleHealthZoneData](/vext/ref/fb/vehiclehealthzonedata) type.

