---
title: InteractionEntityData
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| InteractionEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| InteractionEntityData(InteractionEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| InteractionEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [InteractionEntityData](InteractionEntityData).                    |
| InteractionEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [InteractionEntityData](InteractionEntityData).              |
| InteractionEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [InteractionEntityData](InteractionEntityData).                            |
| InteractionEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [InteractionEntityData](InteractionEntityData).                    |
| InteractionEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [InteractionEntityData](InteractionEntityData).              |
| InteractionEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [InteractionEntityData](InteractionEntityData). |

## Properties

| Name                           | Type                     | Description |
| ------------------------------ | ------------------------ | ----------- |
| useWithinRadius                | number                   |             |
| useWithinAngle                 | number                   |             |
| preInteractionSoundEffect      | [SoundAsset](SoundAsset) |             |
| maxUses                        | number                   |             |
| allowInteractionViaRemoteEntry | bool                     |             |
| testIfOccluded                 | bool                     |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [InteractionEntityData](InteractionEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [InteractionEntityData](InteractionEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
