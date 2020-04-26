---
title: StaticEnlightenData
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[StaticEnlightenData](#constructor-0)**() |
| **[StaticEnlightenData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[StaticEnlightenData](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[StaticEnlightenData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "staticIrradianceChromaTexture" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |
| {{< prop "staticIrradianceLumaTexture" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |
| {{< prop "staticDirectionTexture" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "StaticEnlightenData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### StaticEnlightenData {#constructor-0}

> **StaticEnlightenData**()

Creates a new [StaticEnlightenData](/vext/ref/fb/staticenlightendata) frostbite instance.

### StaticEnlightenData {#constructor-1}

> **StaticEnlightenData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [StaticEnlightenData](/vext/ref/fb/staticenlightendata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### StaticEnlightenData {#constructor-2}

> **StaticEnlightenData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [StaticEnlightenData](/vext/ref/fb/staticenlightendata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [StaticEnlightenData](/vext/ref/fb/staticenlightendata). |

### StaticEnlightenData {#constructor-3}

> **StaticEnlightenData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [StaticEnlightenData](/vext/ref/fb/staticenlightendata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [StaticEnlightenData](/vext/ref/fb/staticenlightendata). |

## Properties

### {{% prop-heading "staticIrradianceChromaTexture" %}}

> **[TextureAsset](/vext/ref/fb/textureasset)** \| **nil**

### {{% prop-heading "staticIrradianceLumaTexture" %}}

> **[TextureAsset](/vext/ref/fb/textureasset)** \| **nil**

### {{% prop-heading "staticDirectionTexture" %}}

> **[TextureAsset](/vext/ref/fb/textureasset)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [StaticEnlightenData](/vext/ref/fb/staticenlightendata) type.

