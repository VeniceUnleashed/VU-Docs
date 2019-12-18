---
title: SampleTextureData (Frostbite Container)
---
### Base Classes

[EvaluatorData](EvaluatorData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| SampleTextureData()                                                          | Create a new instance of this container type.                                                                             |
| SampleTextureData(SampleTextureData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| SampleTextureData([EvaluatorData](EvaluatorData) other)                      | Upcast an instance of type [EvaluatorData](EvaluatorData) to [SampleTextureData](SampleTextureData).                      |
| SampleTextureData([EmitterComponentData](EmitterComponentData) other)        | Upcast an instance of type [EmitterComponentData](EmitterComponentData) to [SampleTextureData](SampleTextureData).        |
| SampleTextureData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SampleTextureData](SampleTextureData). |

## Properties

| Name              | Type                                  | Description |
| ----------------- | ------------------------------------- | ----------- |
| textureDimensions | [Vec2](/vext/ref/cls/shr/Vec2)     |             |
| colorIntensityMax | [Vec3](/vext/ref/cls/shr/Vec3)     |             |
| colorIntensityMin | [Vec3](/vext/ref/cls/shr/Vec3)     |             |
| gradientData      | [Vec4](/vext/ref/cls/shr/Vec4)\[\] |             |
| textureOriginU    | number                                |             |
| textureOriginV    | number                                |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [SampleTextureData](SampleTextureData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SampleTextureData](SampleTextureData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
