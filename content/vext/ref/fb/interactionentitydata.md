---
title: InteractionEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| InteractionEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| InteractionEntityData(InteractionEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| InteractionEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [InteractionEntityData](/vext/ref/fb/interactionentitydata/).                    |
| InteractionEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [InteractionEntityData](/vext/ref/fb/interactionentitydata/).              |
| InteractionEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [InteractionEntityData](/vext/ref/fb/interactionentitydata/).                            |
| InteractionEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [InteractionEntityData](/vext/ref/fb/interactionentitydata/).                    |
| InteractionEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [InteractionEntityData](/vext/ref/fb/interactionentitydata/).              |
| InteractionEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [InteractionEntityData](/vext/ref/fb/interactionentitydata/). |

## Properties

| Name                           | Type                     | Description |
| ------------------------------ | ------------------------ | ----------- |
| useWithinRadius                | number                   |             |
| useWithinAngle                 | number                   |             |
| preInteractionSoundEffect      | [SoundAsset](/vext/ref/fb/soundasset/) |             |
| maxUses                        | number                   |             |
| allowInteractionViaRemoteEntry | bool                     |             |
| testIfOccluded                 | bool                     |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [InteractionEntityData](/vext/ref/fb/interactionentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [InteractionEntityData](/vext/ref/fb/interactionentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
