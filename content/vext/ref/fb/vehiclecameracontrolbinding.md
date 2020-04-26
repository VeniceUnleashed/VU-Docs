---
title: VehicleCameraControlBinding
---

## Summary

### Constructors

|  |
| --- |
| **[VehicleCameraControlBinding](#constructor-0)**() |
| **[VehicleCameraControlBinding](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "enableAnimatedVehicleCamera" >}} | [AntRef](/vext/ref/fb/antref) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [VehicleCameraControlBinding](/vext/ref/fb/vehiclecameracontrolbinding) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VehicleCameraControlBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VehicleCameraControlBinding {#constructor-0}

> **VehicleCameraControlBinding**()

Creates a new [VehicleCameraControlBinding](/vext/ref/fb/vehiclecameracontrolbinding) frostbite instance.

### VehicleCameraControlBinding {#constructor-1}

> **VehicleCameraControlBinding**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VehicleCameraControlBinding](/vext/ref/fb/vehiclecameracontrolbinding) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "enableAnimatedVehicleCamera" %}}

> **[AntRef](/vext/ref/fb/antref)**

## Methods

### Clone {#clone}

> **Clone**(): [VehicleCameraControlBinding](/vext/ref/fb/vehiclecameracontrolbinding)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[VehicleCameraControlBinding](/vext/ref/fb/vehiclecameracontrolbinding)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VehicleCameraControlBinding](/vext/ref/fb/vehiclecameracontrolbinding) type.

