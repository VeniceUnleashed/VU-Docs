---
title: EmitterTextureInfo
---

## Summary

### Constructors

|  |
| --- |
| **[EmitterTextureInfo](#constructor-0)**() |
| **[EmitterTextureInfo](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "textureName" >}} | string |
| {{< prop "normalmapName" >}} | string |
| {{< prop "animationFrameCount" >}} | float |
| {{< prop "animationFrameColumnCount" >}} | float |
| {{< prop "enableAnimation" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [EmitterTextureInfo](/vext/ref/fb/emittertextureinfo) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "EmitterTextureInfo" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### EmitterTextureInfo {#constructor-0}

> **EmitterTextureInfo**()

Creates a new [EmitterTextureInfo](/vext/ref/fb/emittertextureinfo) frostbite instance.

### EmitterTextureInfo {#constructor-1}

> **EmitterTextureInfo**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [EmitterTextureInfo](/vext/ref/fb/emittertextureinfo) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "textureName" %}}

> **string**

### {{% prop-heading "normalmapName" %}}

> **string**

### {{% prop-heading "animationFrameCount" %}}

> **float**

### {{% prop-heading "animationFrameColumnCount" %}}

> **float**

### {{% prop-heading "enableAnimation" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [EmitterTextureInfo](/vext/ref/fb/emittertextureinfo)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[EmitterTextureInfo](/vext/ref/fb/emittertextureinfo)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [EmitterTextureInfo](/vext/ref/fb/emittertextureinfo) type.

