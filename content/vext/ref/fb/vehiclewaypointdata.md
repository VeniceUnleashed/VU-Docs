---
title: VehicleWaypointData
---

Inherits from [WaypointData](/vext/ref/fb/waypointdata)

## Summary

### Constructors

|  |
| --- |
| **[VehicleWaypointData](#constructor-0)**() |
| **[VehicleWaypointData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VehicleWaypointData](#constructor-2)**(other: [WaypointData](/vext/ref/fb/waypointdata)) |
| **[VehicleWaypointData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "speed" >}} | float |
| {{< prop "speedOverrideMovingTowards" >}} | float |
| {{< prop "angleoffset" >}} | float |
| {{< prop "stopHereRadius" >}} | float |
| {{< prop "stoppingDeceleration" >}} | float |
| {{< prop "minSlowdownSpeed" >}} | float |
| {{< prop "stopHere" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VehicleWaypointData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VehicleWaypointData {#constructor-0}

> **VehicleWaypointData**()

Creates a new [VehicleWaypointData](/vext/ref/fb/vehiclewaypointdata) frostbite instance.

### VehicleWaypointData {#constructor-1}

> **VehicleWaypointData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VehicleWaypointData](/vext/ref/fb/vehiclewaypointdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VehicleWaypointData {#constructor-2}

> **VehicleWaypointData**(other: [WaypointData](/vext/ref/fb/waypointdata))

Casts an instance of type [WaypointData](/vext/ref/fb/waypointdata) to [VehicleWaypointData](/vext/ref/fb/vehiclewaypointdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [WaypointData](/vext/ref/fb/waypointdata) | The instance to cast to [VehicleWaypointData](/vext/ref/fb/vehiclewaypointdata). |

### VehicleWaypointData {#constructor-3}

> **VehicleWaypointData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VehicleWaypointData](/vext/ref/fb/vehiclewaypointdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VehicleWaypointData](/vext/ref/fb/vehiclewaypointdata). |

## Properties

### {{% prop-heading "speed" %}}

> **float**

### {{% prop-heading "speedOverrideMovingTowards" %}}

> **float**

### {{% prop-heading "angleoffset" %}}

> **float**

### {{% prop-heading "stopHereRadius" %}}

> **float**

### {{% prop-heading "stoppingDeceleration" %}}

> **float**

### {{% prop-heading "minSlowdownSpeed" %}}

> **float**

### {{% prop-heading "stopHere" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VehicleWaypointData](/vext/ref/fb/vehiclewaypointdata) type.

