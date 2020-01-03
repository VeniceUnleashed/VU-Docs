---
title: ColorCorrectionComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| ColorCorrectionComponentData()                                                          | Create a new instance of this container type.                                                                                                   |
| ColorCorrectionComponentData(ColorCorrectionComponentData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| ColorCorrectionComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [ColorCorrectionComponentData](/vext/ref/fb/colorcorrectioncomponentdata/).                      |
| ColorCorrectionComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [ColorCorrectionComponentData](/vext/ref/fb/colorcorrectioncomponentdata/).                    |
| ColorCorrectionComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [ColorCorrectionComponentData](/vext/ref/fb/colorcorrectioncomponentdata/).              |
| ColorCorrectionComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ColorCorrectionComponentData](/vext/ref/fb/colorcorrectioncomponentdata/). |

## Properties

| Name                | Type                              | Description |
| ------------------- | --------------------------------- | ----------- |
| contrast            | [Vec3](/vext/ref/shared/class/vec3) |             |
| saturation          | [Vec3](/vext/ref/shared/class/vec3) |             |
| brightness          | [Vec3](/vext/ref/shared/class/vec3) |             |
| realm               | [Realm](/vext/ref/fb/realm/)                    |             |
| hue                 | number                            |             |
| colorGradingTexture | [TextureAsset](/vext/ref/fb/textureasset/)      |             |
| colorGradingEnable  | bool                              |             |
| enable              | bool                              |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [ColorCorrectionComponentData](/vext/ref/fb/colorcorrectioncomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ColorCorrectionComponentData](/vext/ref/fb/colorcorrectioncomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
