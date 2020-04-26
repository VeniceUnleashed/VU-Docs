---
title: DestructionVolumeAsset
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[DestructionVolumeAsset](#constructor-0)**() |
| **[DestructionVolumeAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[DestructionVolumeAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[DestructionVolumeAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "diffuseAtlas" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |
| {{< prop "normalmapAtlas" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |
| {{< prop "atlasTextureScale" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DestructionVolumeAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DestructionVolumeAsset {#constructor-0}

> **DestructionVolumeAsset**()

Creates a new [DestructionVolumeAsset](/vext/ref/fb/destructionvolumeasset) frostbite instance.

### DestructionVolumeAsset {#constructor-1}

> **DestructionVolumeAsset**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DestructionVolumeAsset](/vext/ref/fb/destructionvolumeasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### DestructionVolumeAsset {#constructor-2}

> **DestructionVolumeAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [DestructionVolumeAsset](/vext/ref/fb/destructionvolumeasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [DestructionVolumeAsset](/vext/ref/fb/destructionvolumeasset). |

### DestructionVolumeAsset {#constructor-3}

> **DestructionVolumeAsset**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [DestructionVolumeAsset](/vext/ref/fb/destructionvolumeasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [DestructionVolumeAsset](/vext/ref/fb/destructionvolumeasset). |

## Properties

### {{% prop-heading "diffuseAtlas" %}}

> **[TextureAsset](/vext/ref/fb/textureasset)** \| **nil**

### {{% prop-heading "normalmapAtlas" %}}

> **[TextureAsset](/vext/ref/fb/textureasset)** \| **nil**

### {{% prop-heading "atlasTextureScale" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DestructionVolumeAsset](/vext/ref/fb/destructionvolumeasset) type.

