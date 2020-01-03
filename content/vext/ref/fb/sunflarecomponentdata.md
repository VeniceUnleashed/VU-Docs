---
title: SunFlareComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| SunFlareComponentData()                                                          | Create a new instance of this container type.                                                                                     |
| SunFlareComponentData(SunFlareComponentData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| SunFlareComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [SunFlareComponentData](/vext/ref/fb/sunflarecomponentdata/).                      |
| SunFlareComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SunFlareComponentData](/vext/ref/fb/sunflarecomponentdata/).                    |
| SunFlareComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SunFlareComponentData](/vext/ref/fb/sunflarecomponentdata/).              |
| SunFlareComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SunFlareComponentData](/vext/ref/fb/sunflarecomponentdata/). |

## Properties

| Name                        | Type                                             | Description |
| --------------------------- | ------------------------------------------------ | ----------- |
| element5AlphaScreenPosCurve | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element5AlphaOccluderCurve  | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element5SizeScreenPosCurve  | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element2SizeOccluderCurve   | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element5SizeOccluderCurve   | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element2AlphaOccluderCurve  | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element2AlphaScreenPosCurve | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element1Size                | [Vec2](/vext/ref/shared/class/vec2)                |             |
| element1SizeOccluderCurve   | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element1SizeScreenPosCurve  | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element1AlphaOccluderCurve  | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element1AlphaScreenPosCurve | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element5Size                | [Vec2](/vext/ref/shared/class/vec2)                |             |
| element4SizeOccluderCurve   | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element3Size                | [Vec2](/vext/ref/shared/class/vec2)                |             |
| element2Size                | [Vec2](/vext/ref/shared/class/vec2)                |             |
| element4AlphaScreenPosCurve | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element2SizeScreenPosCurve  | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element4SizeScreenPosCurve  | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element4Size                | [Vec2](/vext/ref/shared/class/vec2)                |             |
| element3AlphaScreenPosCurve | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element4AlphaOccluderCurve  | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element3SizeOccluderCurve   | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element3SizeScreenPosCurve  | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element3AlphaOccluderCurve  | [Vec4](/vext/ref/shared/class/vec4)                |             |
| element1Shader              | [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset/) |             |
| occluderSize                | number                                           |             |
| element2Shader              | [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset/) |             |
| element3RayDistance         | number                                           |             |
| element4Shader              | [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset/) |             |
| element4RayDistance         | number                                           |             |
| element2RayDistance         | number                                           |             |
| element1RayDistance         | number                                           |             |
| element5RayDistance         | number                                           |             |
| element3Shader              | [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset/) |             |
| realm                       | [Realm](/vext/ref/fb/realm/)                                   |             |
| element5Shader              | [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset/) |             |
| element5Enable              | bool                                             |             |
| element3Enable              | bool                                             |             |
| element2Enable              | bool                                             |             |
| element1Enable              | bool                                             |             |
| debugDrawOccluder           | bool                                             |             |
| enable                      | bool                                             |             |
| element4Enable              | bool                                             |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [SunFlareComponentData](/vext/ref/fb/sunflarecomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SunFlareComponentData](/vext/ref/fb/sunflarecomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
