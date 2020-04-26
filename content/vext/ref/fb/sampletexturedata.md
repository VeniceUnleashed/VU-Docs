---
title: SampleTextureData
---

Inherits from [EvaluatorData](/vext/ref/fb/evaluatordata)

## Summary

### Constructors

|  |
| --- |
| **[SampleTextureData](#constructor-0)**() |
| **[SampleTextureData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SampleTextureData](#constructor-2)**(other: [EvaluatorData](/vext/ref/fb/evaluatordata)) |
| **[SampleTextureData](#constructor-3)**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata)) |
| **[SampleTextureData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "textureDimensions" >}} | [Vec2](/vext/ref/shared/type/vec2) |
| {{< prop "colorIntensityMax" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "colorIntensityMin" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "gradientData" >}} | [Vec4](/vext/ref/shared/type/vec4)[] |
| {{< prop "textureOriginU" >}} | float |
| {{< prop "textureOriginV" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SampleTextureData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SampleTextureData {#constructor-0}

> **SampleTextureData**()

Creates a new [SampleTextureData](/vext/ref/fb/sampletexturedata) frostbite instance.

### SampleTextureData {#constructor-1}

> **SampleTextureData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SampleTextureData](/vext/ref/fb/sampletexturedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SampleTextureData {#constructor-2}

> **SampleTextureData**(other: [EvaluatorData](/vext/ref/fb/evaluatordata))

Casts an instance of type [EvaluatorData](/vext/ref/fb/evaluatordata) to [SampleTextureData](/vext/ref/fb/sampletexturedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EvaluatorData](/vext/ref/fb/evaluatordata) | The instance to cast to [SampleTextureData](/vext/ref/fb/sampletexturedata). |

### SampleTextureData {#constructor-3}

> **SampleTextureData**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata))

Casts an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata) to [SampleTextureData](/vext/ref/fb/sampletexturedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EmitterComponentData](/vext/ref/fb/emittercomponentdata) | The instance to cast to [SampleTextureData](/vext/ref/fb/sampletexturedata). |

### SampleTextureData {#constructor-4}

> **SampleTextureData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SampleTextureData](/vext/ref/fb/sampletexturedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SampleTextureData](/vext/ref/fb/sampletexturedata). |

## Properties

### {{% prop-heading "textureDimensions" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**

### {{% prop-heading "colorIntensityMax" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "colorIntensityMin" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "gradientData" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**[]

### {{% prop-heading "textureOriginU" %}}

> **float**

### {{% prop-heading "textureOriginV" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SampleTextureData](/vext/ref/fb/sampletexturedata) type.

