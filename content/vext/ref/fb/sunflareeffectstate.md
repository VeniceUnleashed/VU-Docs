---
title: SunFlareEffectState
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| SunFlareEffectState()                                                          | Create a new instance of this container type.                                                                                 |
| SunFlareEffectState(SunFlareEffectState other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| SunFlareEffectState([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SunFlareEffectState](SunFlareEffectState). |

## Properties

| Name                        | Type                                             | Description |
| --------------------------- | ------------------------------------------------ | ----------- |
| element5AlphaScreenPosCurve | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element5AlphaOccluderCurve  | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element2SizeScreenPosCurve  | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element5SizeScreenPosCurve  | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element2AlphaOccluderCurve  | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element2AlphaScreenPosCurve | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element1Size                | [Vec2](/vext/ref/shared/class/vec2)                |             |
| element1SizeOccluderCurve   | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element1SizeScreenPosCurve  | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element1AlphaOccluderCurve  | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element1AlphaScreenPosCurve | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element5SizeOccluderCurve   | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element4SizeScreenPosCurve  | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element3Size                | [Vec2](/vext/ref/shared/class/vec2)                |             |
| element2Size                | [Vec2](/vext/ref/shared/class/vec2)                |             |
| element2SizeOccluderCurve   | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element4AlphaScreenPosCurve | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element3SizeOccluderCurve   | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element4Size                | [Vec2](/vext/ref/shared/class/vec2)                |             |
| element5Size                | [Vec2](/vext/ref/shared/class/vec2)                |             |
| element3SizeScreenPosCurve  | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element3AlphaOccluderCurve  | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element4SizeOccluderCurve   | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element3AlphaScreenPosCurve | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element4AlphaOccluderCurve  | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element3Shader              | [SurfaceShaderBaseAsset](SurfaceShaderBaseAsset) |             |
| element2Shader              | [SurfaceShaderBaseAsset](SurfaceShaderBaseAsset) |             |
| occluderSize                | number                                           |             |
| element4Shader              | [SurfaceShaderBaseAsset](SurfaceShaderBaseAsset) |             |
| element4RayDistance         | number                                           |             |
| element1Shader              | [SurfaceShaderBaseAsset](SurfaceShaderBaseAsset) |             |
| element2RayDistance         | number                                           |             |
| element1RayDistance         | number                                           |             |
| element5RayDistance         | number                                           |             |
| element3RayDistance         | number                                           |             |
| element5Shader              | [SurfaceShaderBaseAsset](SurfaceShaderBaseAsset) |             |
| element5Enable              | bool                                             |             |
| element4Enable              | bool                                             |             |
| element3Enable              | bool                                             |             |
| element2Enable              | bool                                             |             |
| element1Enable              | bool                                             |             |
| debugDrawOccluder           | bool                                             |             |
| enable                      | bool                                             |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [SunFlareEffectState](SunFlareEffectState) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SunFlareEffectState](SunFlareEffectState) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
