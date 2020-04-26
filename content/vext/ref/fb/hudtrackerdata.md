---
title: HudTrackerData
---

Inherits from [UIPartData](/vext/ref/fb/uipartdata)

## Summary

### Constructors

|  |
| --- |
| **[HudTrackerData](#constructor-0)**() |
| **[HudTrackerData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[HudTrackerData](#constructor-2)**(other: [UIPartData](/vext/ref/fb/uipartdata)) |
| **[HudTrackerData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "maxDistance" >}} | float |
| {{< prop "startFadeDistance" >}} | float |
| {{< prop "secondFadeDistance" >}} | float |
| {{< prop "fadeMinAlpha" >}} | float |
| {{< prop "iconSize" >}} | float |
| {{< prop "trackerHudRadiusX" >}} | float |
| {{< prop "trackerHudRadiusY" >}} | float |
| {{< prop "distanceTextOffsetY" >}} | float |
| {{< prop "showDistance" >}} | bool |
| {{< prop "displayExtraInfo" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "HudTrackerData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### HudTrackerData {#constructor-0}

> **HudTrackerData**()

Creates a new [HudTrackerData](/vext/ref/fb/hudtrackerdata) frostbite instance.

### HudTrackerData {#constructor-1}

> **HudTrackerData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [HudTrackerData](/vext/ref/fb/hudtrackerdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### HudTrackerData {#constructor-2}

> **HudTrackerData**(other: [UIPartData](/vext/ref/fb/uipartdata))

Casts an instance of type [UIPartData](/vext/ref/fb/uipartdata) to [HudTrackerData](/vext/ref/fb/hudtrackerdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UIPartData](/vext/ref/fb/uipartdata) | The instance to cast to [HudTrackerData](/vext/ref/fb/hudtrackerdata). |

### HudTrackerData {#constructor-3}

> **HudTrackerData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [HudTrackerData](/vext/ref/fb/hudtrackerdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [HudTrackerData](/vext/ref/fb/hudtrackerdata). |

## Properties

### {{% prop-heading "maxDistance" %}}

> **float**

### {{% prop-heading "startFadeDistance" %}}

> **float**

### {{% prop-heading "secondFadeDistance" %}}

> **float**

### {{% prop-heading "fadeMinAlpha" %}}

> **float**

### {{% prop-heading "iconSize" %}}

> **float**

### {{% prop-heading "trackerHudRadiusX" %}}

> **float**

### {{% prop-heading "trackerHudRadiusY" %}}

> **float**

### {{% prop-heading "distanceTextOffsetY" %}}

> **float**

### {{% prop-heading "showDistance" %}}

> **bool**

### {{% prop-heading "displayExtraInfo" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [HudTrackerData](/vext/ref/fb/hudtrackerdata) type.

