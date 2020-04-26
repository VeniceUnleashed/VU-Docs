---
title: ShaderTextureUnlockPartCollection
---

Inherits from [ShaderCustomizationUnlockPartCollection](/vext/ref/fb/shadercustomizationunlockpartcollection)

## Summary

### Constructors

|  |
| --- |
| **[ShaderTextureUnlockPartCollection](#constructor-0)**() |
| **[ShaderTextureUnlockPartCollection](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[ShaderTextureUnlockPartCollection](#constructor-2)**(other: [ShaderCustomizationUnlockPartCollection](/vext/ref/fb/shadercustomizationunlockpartcollection)) |
| **[ShaderTextureUnlockPartCollection](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "defaultTextureReference" >}} | [TextureReference](/vext/ref/fb/texturereference) \| nil |
| {{< prop "unlockParts" >}} | [TextureUnlockPartData](/vext/ref/fb/textureunlockpartdata)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ShaderTextureUnlockPartCollection" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ShaderTextureUnlockPartCollection {#constructor-0}

> **ShaderTextureUnlockPartCollection**()

Creates a new [ShaderTextureUnlockPartCollection](/vext/ref/fb/shadertextureunlockpartcollection) frostbite instance.

### ShaderTextureUnlockPartCollection {#constructor-1}

> **ShaderTextureUnlockPartCollection**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ShaderTextureUnlockPartCollection](/vext/ref/fb/shadertextureunlockpartcollection) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### ShaderTextureUnlockPartCollection {#constructor-2}

> **ShaderTextureUnlockPartCollection**(other: [ShaderCustomizationUnlockPartCollection](/vext/ref/fb/shadercustomizationunlockpartcollection))

Casts an instance of type [ShaderCustomizationUnlockPartCollection](/vext/ref/fb/shadercustomizationunlockpartcollection) to [ShaderTextureUnlockPartCollection](/vext/ref/fb/shadertextureunlockpartcollection). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ShaderCustomizationUnlockPartCollection](/vext/ref/fb/shadercustomizationunlockpartcollection) | The instance to cast to [ShaderTextureUnlockPartCollection](/vext/ref/fb/shadertextureunlockpartcollection). |

### ShaderTextureUnlockPartCollection {#constructor-3}

> **ShaderTextureUnlockPartCollection**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [ShaderTextureUnlockPartCollection](/vext/ref/fb/shadertextureunlockpartcollection). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [ShaderTextureUnlockPartCollection](/vext/ref/fb/shadertextureunlockpartcollection). |

## Properties

### {{% prop-heading "defaultTextureReference" %}}

> **[TextureReference](/vext/ref/fb/texturereference)** \| **nil**

### {{% prop-heading "unlockParts" %}}

> **[TextureUnlockPartData](/vext/ref/fb/textureunlockpartdata)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ShaderTextureUnlockPartCollection](/vext/ref/fb/shadertextureunlockpartcollection) type.

