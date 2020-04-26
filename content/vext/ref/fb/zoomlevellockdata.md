---
title: ZoomLevelLockData
---

## Summary

### Constructors

|  |
| --- |
| **[ZoomLevelLockData](#constructor-0)**() |
| **[ZoomLevelLockData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "outlineTaggedDistance" >}} | float |
| {{< prop "lockType" >}} | [LockType](/vext/ref/fb/locktype) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [ZoomLevelLockData](/vext/ref/fb/zoomlevellockdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ZoomLevelLockData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ZoomLevelLockData {#constructor-0}

> **ZoomLevelLockData**()

Creates a new [ZoomLevelLockData](/vext/ref/fb/zoomlevellockdata) frostbite instance.

### ZoomLevelLockData {#constructor-1}

> **ZoomLevelLockData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ZoomLevelLockData](/vext/ref/fb/zoomlevellockdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "outlineTaggedDistance" %}}

> **float**

### {{% prop-heading "lockType" %}}

> **[LockType](/vext/ref/fb/locktype)**

## Methods

### Clone {#clone}

> **Clone**(): [ZoomLevelLockData](/vext/ref/fb/zoomlevellockdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[ZoomLevelLockData](/vext/ref/fb/zoomlevellockdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ZoomLevelLockData](/vext/ref/fb/zoomlevellockdata) type.

