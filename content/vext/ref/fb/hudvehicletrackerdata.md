---
title: HudVehicleTrackerData
---

Inherits from 
[UIPartData](/vext/ref/fb/uipartdata)

## Summary
### Constructors
| |
| ----------- |
| **[HudVehicleTrackerData](#constructor-0)**() |
| **[HudVehicleTrackerData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[HudVehicleTrackerData](#constructor-2)**(other: [UIPartData](/vext/ref/fb/uipartdata)) |
| **[HudVehicleTrackerData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "edgePointer" >}} | [EdgePointerData](/vext/ref/fb/edgepointerdata) |
| {{< prop "enemyTrackerIcon" >}} | [UIHudIcon](/vext/ref/fb/uihudicon) |
| {{< prop "outsideScreenTrackerIcon" >}} | [UIHudIcon](/vext/ref/fb/uihudicon) |
| {{< prop "renderTargetData" >}} | [VehicleTrackerRenderTargetData](/vext/ref/fb/vehicletrackerrendertargetdata) |
| {{< prop "missileTrackerIcon" >}} | [UIHudIcon](/vext/ref/fb/uihudicon) |
| {{< prop "iconSize" >}} | float |
| {{< prop "radarSensitivity" >}} | float |
| {{< prop "heatSensitivity" >}} | float |
| {{< prop "friendlyTrackerIcon" >}} | [UIHudIcon](/vext/ref/fb/uihudicon) |
| {{< prop "laserPaintedVehicleTrackerIcon" >}} | [UIHudIcon](/vext/ref/fb/uihudicon) |
| {{< prop "maxDistance" >}} | float |
| {{< prop "distanceIconShrinkFactor" >}} | float |
| {{< prop "missileLockTrackerIcon" >}} | [UIHudIcon](/vext/ref/fb/uihudicon) |
| {{< prop "trackOnlyUsedVehicles" >}} | bool |
| {{< prop "useTrackerSignatures" >}} | bool |
| {{< prop "enableEdgePointers" >}} | bool |
| {{< prop "trackLaserPaintedObjects" >}} | bool |
| {{< prop "useCameraComponentTransform" >}} | bool |
| {{< prop "showTracker" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "HudVehicleTrackerData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### HudVehicleTrackerData {#constructor-0}
> **HudVehicleTrackerData**()

Creates a new [HudVehicleTrackerData](/vext/ref/fb/hudvehicletrackerdata) frostbite instance.

### HudVehicleTrackerData {#constructor-1}
> **HudVehicleTrackerData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [HudVehicleTrackerData](/vext/ref/fb/hudvehicletrackerdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### HudVehicleTrackerData {#constructor-2}
> **HudVehicleTrackerData**(other: [UIPartData](/vext/ref/fb/uipartdata))

Casts an instance of type [UIPartData](/vext/ref/fb/uipartdata) to [HudVehicleTrackerData](/vext/ref/fb/hudvehicletrackerdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UIPartData](/vext/ref/fb/uipartdata) | The instance to cast to [HudVehicleTrackerData](/vext/ref/fb/hudvehicletrackerdata). |

### HudVehicleTrackerData {#constructor-3}
> **HudVehicleTrackerData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [HudVehicleTrackerData](/vext/ref/fb/hudvehicletrackerdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [HudVehicleTrackerData](/vext/ref/fb/hudvehicletrackerdata). |

## Properties
### {{% prop-heading "edgePointer" %}}
> **[EdgePointerData](/vext/ref/fb/edgepointerdata)**

### {{% prop-heading "enemyTrackerIcon" %}}
> **[UIHudIcon](/vext/ref/fb/uihudicon)**

### {{% prop-heading "outsideScreenTrackerIcon" %}}
> **[UIHudIcon](/vext/ref/fb/uihudicon)**

### {{% prop-heading "renderTargetData" %}}
> **[VehicleTrackerRenderTargetData](/vext/ref/fb/vehicletrackerrendertargetdata)**

### {{% prop-heading "missileTrackerIcon" %}}
> **[UIHudIcon](/vext/ref/fb/uihudicon)**

### {{% prop-heading "iconSize" %}}
> **float**

### {{% prop-heading "radarSensitivity" %}}
> **float**

### {{% prop-heading "heatSensitivity" %}}
> **float**

### {{% prop-heading "friendlyTrackerIcon" %}}
> **[UIHudIcon](/vext/ref/fb/uihudicon)**

### {{% prop-heading "laserPaintedVehicleTrackerIcon" %}}
> **[UIHudIcon](/vext/ref/fb/uihudicon)**

### {{% prop-heading "maxDistance" %}}
> **float**

### {{% prop-heading "distanceIconShrinkFactor" %}}
> **float**

### {{% prop-heading "missileLockTrackerIcon" %}}
> **[UIHudIcon](/vext/ref/fb/uihudicon)**

### {{% prop-heading "trackOnlyUsedVehicles" %}}
> **bool**

### {{% prop-heading "useTrackerSignatures" %}}
> **bool**

### {{% prop-heading "enableEdgePointers" %}}
> **bool**

### {{% prop-heading "trackLaserPaintedObjects" %}}
> **bool**

### {{% prop-heading "useCameraComponentTransform" %}}
> **bool**

### {{% prop-heading "showTracker" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [HudVehicleTrackerData](/vext/ref/fb/hudvehicletrackerdata) type.

