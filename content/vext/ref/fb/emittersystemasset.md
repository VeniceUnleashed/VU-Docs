---
title: EmitterSystemAsset
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[EmitterSystemAsset](#constructor-0)**() |
| **[EmitterSystemAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[EmitterSystemAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[EmitterSystemAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "textureInfos" >}} | [EmitterTextureAtlasInfo](/vext/ref/fb/emittertextureatlasinfo)[] |
| {{< prop "baseAtlasTexture" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |
| {{< prop "normalAtlasTexture" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "EmitterSystemAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### EmitterSystemAsset {#constructor-0}

> **EmitterSystemAsset**()

Creates a new [EmitterSystemAsset](/vext/ref/fb/emittersystemasset) frostbite instance.

### EmitterSystemAsset {#constructor-1}

> **EmitterSystemAsset**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [EmitterSystemAsset](/vext/ref/fb/emittersystemasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### EmitterSystemAsset {#constructor-2}

> **EmitterSystemAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [EmitterSystemAsset](/vext/ref/fb/emittersystemasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [EmitterSystemAsset](/vext/ref/fb/emittersystemasset). |

### EmitterSystemAsset {#constructor-3}

> **EmitterSystemAsset**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [EmitterSystemAsset](/vext/ref/fb/emittersystemasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [EmitterSystemAsset](/vext/ref/fb/emittersystemasset). |

## Properties

### {{% prop-heading "textureInfos" %}}

> **[EmitterTextureAtlasInfo](/vext/ref/fb/emittertextureatlasinfo)**[]

### {{% prop-heading "baseAtlasTexture" %}}

> **[TextureAsset](/vext/ref/fb/textureasset)** \| **nil**

### {{% prop-heading "normalAtlasTexture" %}}

> **[TextureAsset](/vext/ref/fb/textureasset)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [EmitterSystemAsset](/vext/ref/fb/emittersystemasset) type.

