---
title: EmitterEntityData
---
### Base Classes

[EffectEntityData](/vext/ref/fb/effectentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| EmitterEntityData()                                                          | Create a new instance of this container type.                                                                             |
| EmitterEntityData(EmitterEntityData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| EmitterEntityData([EffectEntityData](/vext/ref/fb/effectentitydata/) other)                | Upcast an instance of type [EffectEntityData](/vext/ref/fb/effectentitydata/) to [EmitterEntityData](/vext/ref/fb/emitterentitydata/).                |
| EmitterEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [EmitterEntityData](/vext/ref/fb/emitterentitydata/).              |
| EmitterEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [EmitterEntityData](/vext/ref/fb/emitterentitydata/).                            |
| EmitterEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [EmitterEntityData](/vext/ref/fb/emitterentitydata/).                    |
| EmitterEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [EmitterEntityData](/vext/ref/fb/emitterentitydata/).              |
| EmitterEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EmitterEntityData](/vext/ref/fb/emitterentitydata/). |

## Properties

| Name             | Type                         | Description |
| ---------------- | ---------------------------- | ----------- |
| emitter          | [EmitterAsset](/vext/ref/fb/emitterasset/) |             |
| spawnProbability | number                       |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [EmitterEntityData](/vext/ref/fb/emitterentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EmitterEntityData](/vext/ref/fb/emitterentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
