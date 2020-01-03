---
title: VisualEnvironmentEffectEntityData
---
### Base Classes

[EffectEntityData](/vext/ref/fb/effectentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                  | Description                                                                                                                                               |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| VisualEnvironmentEffectEntityData()                                                          | Create a new instance of this container type.                                                                                                             |
| VisualEnvironmentEffectEntityData(VisualEnvironmentEffectEntityData other)                   | Create a reference copy of an instance of the same type.                                                                                                  |
| VisualEnvironmentEffectEntityData([EffectEntityData](/vext/ref/fb/effectentitydata/) other)                | Upcast an instance of type [EffectEntityData](/vext/ref/fb/effectentitydata/) to [VisualEnvironmentEffectEntityData](/vext/ref/fb/visualenvironmenteffectentitydata/).                |
| VisualEnvironmentEffectEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [VisualEnvironmentEffectEntityData](/vext/ref/fb/visualenvironmenteffectentitydata/).              |
| VisualEnvironmentEffectEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [VisualEnvironmentEffectEntityData](/vext/ref/fb/visualenvironmenteffectentitydata/).                            |
| VisualEnvironmentEffectEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [VisualEnvironmentEffectEntityData](/vext/ref/fb/visualenvironmenteffectentitydata/).                    |
| VisualEnvironmentEffectEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [VisualEnvironmentEffectEntityData](/vext/ref/fb/visualenvironmenteffectentitydata/).              |
| VisualEnvironmentEffectEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VisualEnvironmentEffectEntityData](/vext/ref/fb/visualenvironmenteffectentitydata/). |

## Properties

| Name              | Type                                                     | Description |
| ----------------- | -------------------------------------------------------- | ----------- |
| lifetimeCurve     | [Vec4](/vext/ref/shared/class/vec4)                        |             |
| cullDistanceCurve | [Vec4](/vext/ref/shared/class/vec4)                        |             |
| cullAngleCurve    | [Vec4](/vext/ref/shared/class/vec4)                        |             |
| lifetime          | number                                                   |             |
| visualEnvironment | [VisualEnvironmentBlueprint](/vext/ref/fb/visualenvironmentblueprint/) |             |
| sampleOnStartOnly | bool                                                     |             |

## Methods

| Type                                                                   | Name            | Parameters                                     |
| ---------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VisualEnvironmentEffectEntityData](/vext/ref/fb/visualenvironmenteffectentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VisualEnvironmentEffectEntityData](/vext/ref/fb/visualenvironmenteffectentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
