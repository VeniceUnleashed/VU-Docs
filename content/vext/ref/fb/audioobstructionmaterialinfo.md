---
title: AudioObstructionMaterialInfo
---

## Summary

### Constructors

|  |
| --- |
| **[AudioObstructionMaterialInfo](#constructor-0)**() |
| **[AudioObstructionMaterialInfo](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "material" >}} | [MaterialContainerPair](/vext/ref/fb/materialcontainerpair) \| nil |
| {{< prop "obstructionFrequency" >}} | float |
| {{< prop "gainReduction" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [AudioObstructionMaterialInfo](/vext/ref/fb/audioobstructionmaterialinfo) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AudioObstructionMaterialInfo" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AudioObstructionMaterialInfo {#constructor-0}

> **AudioObstructionMaterialInfo**()

Creates a new [AudioObstructionMaterialInfo](/vext/ref/fb/audioobstructionmaterialinfo) frostbite instance.

### AudioObstructionMaterialInfo {#constructor-1}

> **AudioObstructionMaterialInfo**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AudioObstructionMaterialInfo](/vext/ref/fb/audioobstructionmaterialinfo) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "material" %}}

> **[MaterialContainerPair](/vext/ref/fb/materialcontainerpair)** \| **nil**

### {{% prop-heading "obstructionFrequency" %}}

> **float**

### {{% prop-heading "gainReduction" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [AudioObstructionMaterialInfo](/vext/ref/fb/audioobstructionmaterialinfo)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[AudioObstructionMaterialInfo](/vext/ref/fb/audioobstructionmaterialinfo)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AudioObstructionMaterialInfo](/vext/ref/fb/audioobstructionmaterialinfo) type.

