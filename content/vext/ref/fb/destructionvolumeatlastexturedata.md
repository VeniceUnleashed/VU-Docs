---
title: DestructionVolumeAtlasTextureData
---

## Summary

### Constructors

|  |
| --- |
| **[DestructionVolumeAtlasTextureData](#constructor-0)**() |
| **[DestructionVolumeAtlasTextureData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "atlasAlphaInfluence" >}} | float |
| {{< prop "maskEdgeThickness" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [DestructionVolumeAtlasTextureData](/vext/ref/fb/destructionvolumeatlastexturedata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DestructionVolumeAtlasTextureData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DestructionVolumeAtlasTextureData {#constructor-0}

> **DestructionVolumeAtlasTextureData**()

Creates a new [DestructionVolumeAtlasTextureData](/vext/ref/fb/destructionvolumeatlastexturedata) frostbite instance.

### DestructionVolumeAtlasTextureData {#constructor-1}

> **DestructionVolumeAtlasTextureData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DestructionVolumeAtlasTextureData](/vext/ref/fb/destructionvolumeatlastexturedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "atlasAlphaInfluence" %}}

> **float**

### {{% prop-heading "maskEdgeThickness" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [DestructionVolumeAtlasTextureData](/vext/ref/fb/destructionvolumeatlastexturedata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[DestructionVolumeAtlasTextureData](/vext/ref/fb/destructionvolumeatlastexturedata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DestructionVolumeAtlasTextureData](/vext/ref/fb/destructionvolumeatlastexturedata) type.

