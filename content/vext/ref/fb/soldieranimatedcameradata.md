---
title: SoldierAnimatedCameraData
---

## Summary

### Constructors

|  |
| --- |
| **[SoldierAnimatedCameraData](#constructor-0)**() |
| **[SoldierAnimatedCameraData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "cameraTransitionTime" >}} | float |
| {{< prop "enableFeature" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [SoldierAnimatedCameraData](/vext/ref/fb/soldieranimatedcameradata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoldierAnimatedCameraData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoldierAnimatedCameraData {#constructor-0}

> **SoldierAnimatedCameraData**()

Creates a new [SoldierAnimatedCameraData](/vext/ref/fb/soldieranimatedcameradata) frostbite instance.

### SoldierAnimatedCameraData {#constructor-1}

> **SoldierAnimatedCameraData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoldierAnimatedCameraData](/vext/ref/fb/soldieranimatedcameradata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "cameraTransitionTime" %}}

> **float**

### {{% prop-heading "enableFeature" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [SoldierAnimatedCameraData](/vext/ref/fb/soldieranimatedcameradata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SoldierAnimatedCameraData](/vext/ref/fb/soldieranimatedcameradata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoldierAnimatedCameraData](/vext/ref/fb/soldieranimatedcameradata) type.

