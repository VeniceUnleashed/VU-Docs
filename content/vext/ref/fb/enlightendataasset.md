---
title: EnlightenDataAsset
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[EnlightenDataAsset](#constructor-0)**() |
| **[EnlightenDataAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[EnlightenDataAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[EnlightenDataAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "debugBackFaceTexture" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |
| {{< prop "maxResolutionY" >}} | int |
| {{< prop "debugChartTexture" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |
| {{< prop "skyVisibilityTexture" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |
| {{< prop "visibilityThreshold" >}} | float |
| {{< prop "maxResolutionX" >}} | int |
| {{< prop "loadDebugData" >}} | bool |
| {{< prop "dynamicEnable" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "EnlightenDataAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### EnlightenDataAsset {#constructor-0}

> **EnlightenDataAsset**()

Creates a new [EnlightenDataAsset](/vext/ref/fb/enlightendataasset) frostbite instance.

### EnlightenDataAsset {#constructor-1}

> **EnlightenDataAsset**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [EnlightenDataAsset](/vext/ref/fb/enlightendataasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### EnlightenDataAsset {#constructor-2}

> **EnlightenDataAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [EnlightenDataAsset](/vext/ref/fb/enlightendataasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [EnlightenDataAsset](/vext/ref/fb/enlightendataasset). |

### EnlightenDataAsset {#constructor-3}

> **EnlightenDataAsset**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [EnlightenDataAsset](/vext/ref/fb/enlightendataasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [EnlightenDataAsset](/vext/ref/fb/enlightendataasset). |

## Properties

### {{% prop-heading "debugBackFaceTexture" %}}

> **[TextureAsset](/vext/ref/fb/textureasset)** \| **nil**

### {{% prop-heading "maxResolutionY" %}}

> **int**

### {{% prop-heading "debugChartTexture" %}}

> **[TextureAsset](/vext/ref/fb/textureasset)** \| **nil**

### {{% prop-heading "skyVisibilityTexture" %}}

> **[TextureAsset](/vext/ref/fb/textureasset)** \| **nil**

### {{% prop-heading "visibilityThreshold" %}}

> **float**

### {{% prop-heading "maxResolutionX" %}}

> **int**

### {{% prop-heading "loadDebugData" %}}

> **bool**

### {{% prop-heading "dynamicEnable" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [EnlightenDataAsset](/vext/ref/fb/enlightendataasset) type.

