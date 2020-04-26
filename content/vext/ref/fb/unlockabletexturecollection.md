---
title: UnlockableTextureCollection
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[UnlockableTextureCollection](#constructor-0)**() |
| **[UnlockableTextureCollection](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UnlockableTextureCollection](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "defaultValue" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UnlockableTextureCollection" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UnlockableTextureCollection {#constructor-0}

> **UnlockableTextureCollection**()

Creates a new [UnlockableTextureCollection](/vext/ref/fb/unlockabletexturecollection) frostbite instance.

### UnlockableTextureCollection {#constructor-1}

> **UnlockableTextureCollection**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UnlockableTextureCollection](/vext/ref/fb/unlockabletexturecollection) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UnlockableTextureCollection {#constructor-2}

> **UnlockableTextureCollection**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UnlockableTextureCollection](/vext/ref/fb/unlockabletexturecollection). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UnlockableTextureCollection](/vext/ref/fb/unlockabletexturecollection). |

## Properties

### {{% prop-heading "defaultValue" %}}

> **[TextureAsset](/vext/ref/fb/textureasset)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UnlockableTextureCollection](/vext/ref/fb/unlockabletexturecollection) type.

