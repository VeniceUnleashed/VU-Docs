---
title: VehicleEntryListenerBinding
---

## Summary

### Constructors

|  |
| --- |
| **[VehicleEntryListenerBinding](#constructor-0)**() |
| **[VehicleEntryListenerBinding](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "inVehicle" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "inOpenEntry" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "vehicleEntryFire" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "vehicleEntryYaw" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "vehicleEntryPitch" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "vehicleEntryRoll" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "vehicleEntryRotation" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "vehicleEntryForceX" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "vehicleEntryForceY" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "vehicleEntryForceZ" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "vehicleEntryIndex" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "vehicleEntryIndexUpdated" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "vehicleOpenEntryIndex" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "inVehicleRetrigger" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "vehicleEntryChooserIndex" >}} | [AntRef](/vext/ref/fb/antref) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [VehicleEntryListenerBinding](/vext/ref/fb/vehicleentrylistenerbinding) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VehicleEntryListenerBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VehicleEntryListenerBinding {#constructor-0}

> **VehicleEntryListenerBinding**()

Creates a new [VehicleEntryListenerBinding](/vext/ref/fb/vehicleentrylistenerbinding) frostbite instance.

### VehicleEntryListenerBinding {#constructor-1}

> **VehicleEntryListenerBinding**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VehicleEntryListenerBinding](/vext/ref/fb/vehicleentrylistenerbinding) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "inVehicle" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "inOpenEntry" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "vehicleEntryFire" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "vehicleEntryYaw" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "vehicleEntryPitch" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "vehicleEntryRoll" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "vehicleEntryRotation" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "vehicleEntryForceX" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "vehicleEntryForceY" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "vehicleEntryForceZ" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "vehicleEntryIndex" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "vehicleEntryIndexUpdated" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "vehicleOpenEntryIndex" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "inVehicleRetrigger" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "vehicleEntryChooserIndex" %}}

> **[AntRef](/vext/ref/fb/antref)**

## Methods

### Clone {#clone}

> **Clone**(): [VehicleEntryListenerBinding](/vext/ref/fb/vehicleentrylistenerbinding)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[VehicleEntryListenerBinding](/vext/ref/fb/vehicleentrylistenerbinding)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VehicleEntryListenerBinding](/vext/ref/fb/vehicleentrylistenerbinding) type.

