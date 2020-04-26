---
title: TextureReference
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[TextureReference](#constructor-0)**() |
| **[TextureReference](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[TextureReference](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[TextureReference](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "texture" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "TextureReference" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### TextureReference {#constructor-0}

> **TextureReference**()

Creates a new [TextureReference](/vext/ref/fb/texturereference) frostbite instance.

### TextureReference {#constructor-1}

> **TextureReference**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [TextureReference](/vext/ref/fb/texturereference) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### TextureReference {#constructor-2}

> **TextureReference**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [TextureReference](/vext/ref/fb/texturereference). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [TextureReference](/vext/ref/fb/texturereference). |

### TextureReference {#constructor-3}

> **TextureReference**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [TextureReference](/vext/ref/fb/texturereference). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [TextureReference](/vext/ref/fb/texturereference). |

## Properties

### {{% prop-heading "texture" %}}

> **[TextureAsset](/vext/ref/fb/textureasset)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [TextureReference](/vext/ref/fb/texturereference) type.

