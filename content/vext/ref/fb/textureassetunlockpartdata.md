---
title: TextureAssetUnlockPartData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[TextureAssetUnlockPartData](#constructor-0)**() |
| **[TextureAssetUnlockPartData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[TextureAssetUnlockPartData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "texture" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "TextureAssetUnlockPartData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### TextureAssetUnlockPartData {#constructor-0}

> **TextureAssetUnlockPartData**()

Creates a new [TextureAssetUnlockPartData](/vext/ref/fb/textureassetunlockpartdata) frostbite instance.

### TextureAssetUnlockPartData {#constructor-1}

> **TextureAssetUnlockPartData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [TextureAssetUnlockPartData](/vext/ref/fb/textureassetunlockpartdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### TextureAssetUnlockPartData {#constructor-2}

> **TextureAssetUnlockPartData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [TextureAssetUnlockPartData](/vext/ref/fb/textureassetunlockpartdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [TextureAssetUnlockPartData](/vext/ref/fb/textureassetunlockpartdata). |

## Properties

### {{% prop-heading "texture" %}}

> **[TextureAsset](/vext/ref/fb/textureasset)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [TextureAssetUnlockPartData](/vext/ref/fb/textureassetunlockpartdata) type.

