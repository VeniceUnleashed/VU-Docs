---
title: AirRadarData
---

Inherits from [UIPartData](/vext/ref/fb/uipartdata)

## Summary

### Constructors

|  |
| --- |
| **[AirRadarData](#constructor-0)**() |
| **[AirRadarData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[AirRadarData](#constructor-2)**(other: [UIPartData](/vext/ref/fb/uipartdata)) |
| **[AirRadarData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "radarRange" >}} | float |
| {{< prop "radarSensitivity" >}} | float |
| {{< prop "heatSensitivity" >}} | float |
| {{< prop "missileIcon" >}} | [UIHudIcon](/vext/ref/fb/uihudicon) |
| {{< prop "centerIcon" >}} | [UIHudIcon](/vext/ref/fb/uihudicon) |
| {{< prop "friendlyIcon" >}} | [UIHudIcon](/vext/ref/fb/uihudicon) |
| {{< prop "enemyIcon" >}} | [UIHudIcon](/vext/ref/fb/uihudicon) |
| {{< prop "laserPaintedIcon" >}} | [UIHudIcon](/vext/ref/fb/uihudicon) |
| {{< prop "northIcon" >}} | [UIHudIcon](/vext/ref/fb/uihudicon) |
| {{< prop "subScreen" >}} | [SubScreenData](/vext/ref/fb/subscreendata) |
| {{< prop "westIcon" >}} | [UIHudIcon](/vext/ref/fb/uihudicon) |
| {{< prop "southIcon" >}} | [UIHudIcon](/vext/ref/fb/uihudicon) |
| {{< prop "eastIcon" >}} | [UIHudIcon](/vext/ref/fb/uihudicon) |
| {{< prop "trackLaserPaintedObjects" >}} | bool |
| {{< prop "trackOnlyUsedVehicles" >}} | bool |
| {{< prop "useCameraComponentTransform" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AirRadarData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AirRadarData {#constructor-0}

> **AirRadarData**()

Creates a new [AirRadarData](/vext/ref/fb/airradardata) frostbite instance.

### AirRadarData {#constructor-1}

> **AirRadarData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AirRadarData](/vext/ref/fb/airradardata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### AirRadarData {#constructor-2}

> **AirRadarData**(other: [UIPartData](/vext/ref/fb/uipartdata))

Casts an instance of type [UIPartData](/vext/ref/fb/uipartdata) to [AirRadarData](/vext/ref/fb/airradardata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UIPartData](/vext/ref/fb/uipartdata) | The instance to cast to [AirRadarData](/vext/ref/fb/airradardata). |

### AirRadarData {#constructor-3}

> **AirRadarData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [AirRadarData](/vext/ref/fb/airradardata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [AirRadarData](/vext/ref/fb/airradardata). |

## Properties

### {{% prop-heading "radarRange" %}}

> **float**

### {{% prop-heading "radarSensitivity" %}}

> **float**

### {{% prop-heading "heatSensitivity" %}}

> **float**

### {{% prop-heading "missileIcon" %}}

> **[UIHudIcon](/vext/ref/fb/uihudicon)**

### {{% prop-heading "centerIcon" %}}

> **[UIHudIcon](/vext/ref/fb/uihudicon)**

### {{% prop-heading "friendlyIcon" %}}

> **[UIHudIcon](/vext/ref/fb/uihudicon)**

### {{% prop-heading "enemyIcon" %}}

> **[UIHudIcon](/vext/ref/fb/uihudicon)**

### {{% prop-heading "laserPaintedIcon" %}}

> **[UIHudIcon](/vext/ref/fb/uihudicon)**

### {{% prop-heading "northIcon" %}}

> **[UIHudIcon](/vext/ref/fb/uihudicon)**

### {{% prop-heading "subScreen" %}}

> **[SubScreenData](/vext/ref/fb/subscreendata)**

### {{% prop-heading "westIcon" %}}

> **[UIHudIcon](/vext/ref/fb/uihudicon)**

### {{% prop-heading "southIcon" %}}

> **[UIHudIcon](/vext/ref/fb/uihudicon)**

### {{% prop-heading "eastIcon" %}}

> **[UIHudIcon](/vext/ref/fb/uihudicon)**

### {{% prop-heading "trackLaserPaintedObjects" %}}

> **bool**

### {{% prop-heading "trackOnlyUsedVehicles" %}}

> **bool**

### {{% prop-heading "useCameraComponentTransform" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AirRadarData](/vext/ref/fb/airradardata) type.

