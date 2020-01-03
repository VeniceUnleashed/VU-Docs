---
title: SampleTextureData
---
### Base Classes

[EvaluatorData](/vext/ref/fb/evaluatordata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| SampleTextureData()                                                          | Create a new instance of this container type.                                                                             |
| SampleTextureData(SampleTextureData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| SampleTextureData([EvaluatorData](/vext/ref/fb/evaluatordata/) other)                      | Upcast an instance of type [EvaluatorData](/vext/ref/fb/evaluatordata/) to [SampleTextureData](/vext/ref/fb/sampletexturedata/).                      |
| SampleTextureData([EmitterComponentData](/vext/ref/fb/emittercomponentdata/) other)        | Upcast an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata/) to [SampleTextureData](/vext/ref/fb/sampletexturedata/).        |
| SampleTextureData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SampleTextureData](/vext/ref/fb/sampletexturedata/). |

## Properties

| Name              | Type                                  | Description |
| ----------------- | ------------------------------------- | ----------- |
| textureDimensions | [Vec2](/vext/ref/shared/class/vec2)     |             |
| colorIntensityMax | [Vec3](/vext/ref/shared/class/vec3)     |             |
| colorIntensityMin | [Vec3](/vext/ref/shared/class/vec3)     |             |
| gradientData      | [Vec4](/vext/ref/shared/class/vec4)\[\] |             |
| textureOriginU    | number                                |             |
| textureOriginV    | number                                |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [SampleTextureData](/vext/ref/fb/sampletexturedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SampleTextureData](/vext/ref/fb/sampletexturedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
