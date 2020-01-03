---
title: ColorCorrectionComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| ColorCorrectionComponentData()                                                          | Create a new instance of this container type.                                                                                                   |
| ColorCorrectionComponentData(ColorCorrectionComponentData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| ColorCorrectionComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [ColorCorrectionComponentData](ColorCorrectionComponentData).                      |
| ColorCorrectionComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [ColorCorrectionComponentData](ColorCorrectionComponentData).                    |
| ColorCorrectionComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [ColorCorrectionComponentData](ColorCorrectionComponentData).              |
| ColorCorrectionComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ColorCorrectionComponentData](ColorCorrectionComponentData). |

## Properties

| Name                | Type                              | Description |
| ------------------- | --------------------------------- | ----------- |
| contrast            | [Vec3](/vext/ref/shared/class/vec3) |             |
| saturation          | [Vec3](/vext/ref/shared/class/vec3) |             |
| brightness          | [Vec3](/vext/ref/shared/class/vec3) |             |
| realm               | [Realm](Realm)                    |             |
| hue                 | number                            |             |
| colorGradingTexture | [TextureAsset](TextureAsset)      |             |
| colorGradingEnable  | bool                              |             |
| enable              | bool                              |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [ColorCorrectionComponentData](ColorCorrectionComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ColorCorrectionComponentData](ColorCorrectionComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
