---
title: MinimapCameraOffsetData
---

## Summary

### Constructors

|  |
| --- |
| **[MinimapCameraOffsetData](#constructor-0)**() |
| **[MinimapCameraOffsetData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "position" >}} | [Vec2](/vext/ref/shared/type/vec2) |
| {{< prop "cameraFov" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [MinimapCameraOffsetData](/vext/ref/fb/minimapcameraoffsetdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MinimapCameraOffsetData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MinimapCameraOffsetData {#constructor-0}

> **MinimapCameraOffsetData**()

Creates a new [MinimapCameraOffsetData](/vext/ref/fb/minimapcameraoffsetdata) frostbite instance.

### MinimapCameraOffsetData {#constructor-1}

> **MinimapCameraOffsetData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MinimapCameraOffsetData](/vext/ref/fb/minimapcameraoffsetdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "position" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**

### {{% prop-heading "cameraFov" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [MinimapCameraOffsetData](/vext/ref/fb/minimapcameraoffsetdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[MinimapCameraOffsetData](/vext/ref/fb/minimapcameraoffsetdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MinimapCameraOffsetData](/vext/ref/fb/minimapcameraoffsetdata) type.

