---
title: EffectEntityData
---
### Base Classes

[SpatialEntityData](/vext/ref/fb/spatialentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| EffectEntityData()                                                          | Create a new instance of this container type.                                                                           |
| EffectEntityData(EffectEntityData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| EffectEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [EffectEntityData](/vext/ref/fb/effectentitydata/).              |
| EffectEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [EffectEntityData](/vext/ref/fb/effectentitydata/).                            |
| EffectEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [EffectEntityData](/vext/ref/fb/effectentitydata/).                    |
| EffectEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [EffectEntityData](/vext/ref/fb/effectentitydata/).              |
| EffectEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EffectEntityData](/vext/ref/fb/effectentitydata/). |

## Properties

| Name                     | Type                                 | Description |
| ------------------------ | ------------------------------------ | ----------- |
| components               | [GameObjectData](/vext/ref/fb/gameobjectdata/)\[\] |             |
| maxInstanceCount         | number                               |             |
| cullDistance             | number                               |             |
| startDelay               | number                               |             |
| highEndPc                | bool                                 |             |
| mediumPc                 | bool                                 |             |
| lowEndPc                 | bool                                 |             |
| resetInstanceWhenStarted | bool                                 |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [EffectEntityData](/vext/ref/fb/effectentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EffectEntityData](/vext/ref/fb/effectentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
