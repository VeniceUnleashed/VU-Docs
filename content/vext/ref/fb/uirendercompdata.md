---
title: UIRenderCompData
---

Inherits from [UIComponentData](/vext/ref/fb/uicomponentdata)

## Summary

### Constructors

|  |
| --- |
| **[UIRenderCompData](#constructor-0)**() |
| **[UIRenderCompData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UIRenderCompData](#constructor-2)**(other: [UIComponentData](/vext/ref/fb/uicomponentdata)) |
| **[UIRenderCompData](#constructor-3)**(other: [Asset](/vext/ref/fb/asset)) |
| **[UIRenderCompData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "backgroundRect1" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "backgroundRect0" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "bgTexture2" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |
| {{< prop "bgTexture1" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |
| {{< prop "alphaMin" >}} | float |
| {{< prop "alphaAnimationSpeed" >}} | float |
| {{< prop "alphaOffset" >}} | float |
| {{< prop "alphaMax" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UIRenderCompData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UIRenderCompData {#constructor-0}

> **UIRenderCompData**()

Creates a new [UIRenderCompData](/vext/ref/fb/uirendercompdata) frostbite instance.

### UIRenderCompData {#constructor-1}

> **UIRenderCompData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UIRenderCompData](/vext/ref/fb/uirendercompdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UIRenderCompData {#constructor-2}

> **UIRenderCompData**(other: [UIComponentData](/vext/ref/fb/uicomponentdata))

Casts an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata) to [UIRenderCompData](/vext/ref/fb/uirendercompdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UIComponentData](/vext/ref/fb/uicomponentdata) | The instance to cast to [UIRenderCompData](/vext/ref/fb/uirendercompdata). |

### UIRenderCompData {#constructor-3}

> **UIRenderCompData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [UIRenderCompData](/vext/ref/fb/uirendercompdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [UIRenderCompData](/vext/ref/fb/uirendercompdata). |

### UIRenderCompData {#constructor-4}

> **UIRenderCompData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UIRenderCompData](/vext/ref/fb/uirendercompdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UIRenderCompData](/vext/ref/fb/uirendercompdata). |

## Properties

### {{% prop-heading "backgroundRect1" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "backgroundRect0" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "bgTexture2" %}}

> **[TextureAsset](/vext/ref/fb/textureasset)** \| **nil**

### {{% prop-heading "bgTexture1" %}}

> **[TextureAsset](/vext/ref/fb/textureasset)** \| **nil**

### {{% prop-heading "alphaMin" %}}

> **float**

### {{% prop-heading "alphaAnimationSpeed" %}}

> **float**

### {{% prop-heading "alphaOffset" %}}

> **float**

### {{% prop-heading "alphaMax" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UIRenderCompData](/vext/ref/fb/uirendercompdata) type.

