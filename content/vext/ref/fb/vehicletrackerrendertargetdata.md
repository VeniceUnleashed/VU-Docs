---
title: VehicleTrackerRenderTargetData
---

## Summary

### Constructors

|  |
| --- |
| **[VehicleTrackerRenderTargetData](#constructor-0)**() |
| **[VehicleTrackerRenderTargetData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "positionOffset" >}} | [Vec2](/vext/ref/shared/type/vec2) |
| {{< prop "renderTargetIndex" >}} | int |
| {{< prop "renderTargetApectRatio" >}} | float |
| {{< prop "scaleSize" >}} | float |
| {{< prop "useRenderTarget" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [VehicleTrackerRenderTargetData](/vext/ref/fb/vehicletrackerrendertargetdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VehicleTrackerRenderTargetData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VehicleTrackerRenderTargetData {#constructor-0}

> **VehicleTrackerRenderTargetData**()

Creates a new [VehicleTrackerRenderTargetData](/vext/ref/fb/vehicletrackerrendertargetdata) frostbite instance.

### VehicleTrackerRenderTargetData {#constructor-1}

> **VehicleTrackerRenderTargetData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VehicleTrackerRenderTargetData](/vext/ref/fb/vehicletrackerrendertargetdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "positionOffset" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**

### {{% prop-heading "renderTargetIndex" %}}

> **int**

### {{% prop-heading "renderTargetApectRatio" %}}

> **float**

### {{% prop-heading "scaleSize" %}}

> **float**

### {{% prop-heading "useRenderTarget" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [VehicleTrackerRenderTargetData](/vext/ref/fb/vehicletrackerrendertargetdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[VehicleTrackerRenderTargetData](/vext/ref/fb/vehicletrackerrendertargetdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VehicleTrackerRenderTargetData](/vext/ref/fb/vehicletrackerrendertargetdata) type.

