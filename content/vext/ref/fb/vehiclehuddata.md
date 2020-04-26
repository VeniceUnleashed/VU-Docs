---
title: VehicleHudData
---

## Summary

### Constructors

|  |
| --- |
| **[VehicleHudData](#constructor-0)**() |
| **[VehicleHudData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "customizationOffset" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "customization" >}} | [VehicleCustomizationAsset](/vext/ref/fb/vehiclecustomizationasset) \| nil |
| {{< prop "minimapIcon" >}} | [UIHudIcon](/vext/ref/fb/uihudicon) |
| {{< prop "texture" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |
| {{< prop "vehicleItemHash" >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [VehicleHudData](/vext/ref/fb/vehiclehuddata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VehicleHudData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VehicleHudData {#constructor-0}

> **VehicleHudData**()

Creates a new [VehicleHudData](/vext/ref/fb/vehiclehuddata) frostbite instance.

### VehicleHudData {#constructor-1}

> **VehicleHudData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VehicleHudData](/vext/ref/fb/vehiclehuddata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "customizationOffset" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "customization" %}}

> **[VehicleCustomizationAsset](/vext/ref/fb/vehiclecustomizationasset)** \| **nil**

### {{% prop-heading "minimapIcon" %}}

> **[UIHudIcon](/vext/ref/fb/uihudicon)**

### {{% prop-heading "texture" %}}

> **[TextureAsset](/vext/ref/fb/textureasset)** \| **nil**

### {{% prop-heading "vehicleItemHash" %}}

> **int**

## Methods

### Clone {#clone}

> **Clone**(): [VehicleHudData](/vext/ref/fb/vehiclehuddata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[VehicleHudData](/vext/ref/fb/vehiclehuddata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VehicleHudData](/vext/ref/fb/vehiclehuddata) type.

