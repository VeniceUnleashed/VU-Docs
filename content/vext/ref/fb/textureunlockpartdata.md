---
title: TextureUnlockPartData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[TextureUnlockPartData](#constructor-0)**() |
| **[TextureUnlockPartData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[TextureUnlockPartData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "textureReference" >}} | [TextureReference](/vext/ref/fb/texturereference) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "TextureUnlockPartData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### TextureUnlockPartData {#constructor-0}

> **TextureUnlockPartData**()

Creates a new [TextureUnlockPartData](/vext/ref/fb/textureunlockpartdata) frostbite instance.

### TextureUnlockPartData {#constructor-1}

> **TextureUnlockPartData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [TextureUnlockPartData](/vext/ref/fb/textureunlockpartdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### TextureUnlockPartData {#constructor-2}

> **TextureUnlockPartData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [TextureUnlockPartData](/vext/ref/fb/textureunlockpartdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [TextureUnlockPartData](/vext/ref/fb/textureunlockpartdata). |

## Properties

### {{% prop-heading "textureReference" %}}

> **[TextureReference](/vext/ref/fb/texturereference)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [TextureUnlockPartData](/vext/ref/fb/textureunlockpartdata) type.

