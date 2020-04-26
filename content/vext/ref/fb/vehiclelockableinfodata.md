---
title: VehicleLockableInfoData
---

## Summary

### Constructors

|  |
| --- |
| **[VehicleLockableInfoData](#constructor-0)**() |
| **[VehicleLockableInfoData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "heatSignature" >}} | float |
| {{< prop "radarSignature" >}} | float |
| {{< prop "lowAltitudeHeight" >}} | float |
| {{< prop "lowAltitudeHeatSignature" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [VehicleLockableInfoData](/vext/ref/fb/vehiclelockableinfodata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VehicleLockableInfoData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VehicleLockableInfoData {#constructor-0}

> **VehicleLockableInfoData**()

Creates a new [VehicleLockableInfoData](/vext/ref/fb/vehiclelockableinfodata) frostbite instance.

### VehicleLockableInfoData {#constructor-1}

> **VehicleLockableInfoData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VehicleLockableInfoData](/vext/ref/fb/vehiclelockableinfodata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "heatSignature" %}}

> **float**

### {{% prop-heading "radarSignature" %}}

> **float**

### {{% prop-heading "lowAltitudeHeight" %}}

> **float**

### {{% prop-heading "lowAltitudeHeatSignature" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [VehicleLockableInfoData](/vext/ref/fb/vehiclelockableinfodata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[VehicleLockableInfoData](/vext/ref/fb/vehiclelockableinfodata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VehicleLockableInfoData](/vext/ref/fb/vehiclelockableinfodata) type.

