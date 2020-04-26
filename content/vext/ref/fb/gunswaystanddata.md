---
title: GunSwayStandData
---

## Summary

### Constructors

|  |
| --- |
| **[GunSwayStandData](#constructor-0)**() |
| **[GunSwayStandData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "noZoom" >}} | [GunSwayBaseMoveJumpData](/vext/ref/fb/gunswaybasemovejumpdata) |
| {{< prop "zoom" >}} | [GunSwayBaseMoveJumpData](/vext/ref/fb/gunswaybasemovejumpdata) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [GunSwayStandData](/vext/ref/fb/gunswaystanddata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "GunSwayStandData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### GunSwayStandData {#constructor-0}

> **GunSwayStandData**()

Creates a new [GunSwayStandData](/vext/ref/fb/gunswaystanddata) frostbite instance.

### GunSwayStandData {#constructor-1}

> **GunSwayStandData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [GunSwayStandData](/vext/ref/fb/gunswaystanddata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "noZoom" %}}

> **[GunSwayBaseMoveJumpData](/vext/ref/fb/gunswaybasemovejumpdata)**

### {{% prop-heading "zoom" %}}

> **[GunSwayBaseMoveJumpData](/vext/ref/fb/gunswaybasemovejumpdata)**

## Methods

### Clone {#clone}

> **Clone**(): [GunSwayStandData](/vext/ref/fb/gunswaystanddata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[GunSwayStandData](/vext/ref/fb/gunswaystanddata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [GunSwayStandData](/vext/ref/fb/gunswaystanddata) type.

