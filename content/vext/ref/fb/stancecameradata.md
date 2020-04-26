---
title: StanceCameraData
---

## Summary

### Constructors

|  |
| --- |
| **[StanceCameraData](#constructor-0)**() |
| **[StanceCameraData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "validStances" >}} | int[] |
| {{< prop "defaultCameraForStances" >}} | int[] |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [StanceCameraData](/vext/ref/fb/stancecameradata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "StanceCameraData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### StanceCameraData {#constructor-0}

> **StanceCameraData**()

Creates a new [StanceCameraData](/vext/ref/fb/stancecameradata) frostbite instance.

### StanceCameraData {#constructor-1}

> **StanceCameraData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [StanceCameraData](/vext/ref/fb/stancecameradata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "validStances" %}}

> **int**[]

### {{% prop-heading "defaultCameraForStances" %}}

> **int**[]

## Methods

### Clone {#clone}

> **Clone**(): [StanceCameraData](/vext/ref/fb/stancecameradata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[StanceCameraData](/vext/ref/fb/stancecameradata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [StanceCameraData](/vext/ref/fb/stancecameradata) type.

