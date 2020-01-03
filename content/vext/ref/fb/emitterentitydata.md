---
title: EmitterEntityData
---
### Base Classes

[EffectEntityData](EffectEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| EmitterEntityData()                                                          | Create a new instance of this container type.                                                                             |
| EmitterEntityData(EmitterEntityData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| EmitterEntityData([EffectEntityData](EffectEntityData) other)                | Upcast an instance of type [EffectEntityData](EffectEntityData) to [EmitterEntityData](EmitterEntityData).                |
| EmitterEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [EmitterEntityData](EmitterEntityData).              |
| EmitterEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [EmitterEntityData](EmitterEntityData).                            |
| EmitterEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [EmitterEntityData](EmitterEntityData).                    |
| EmitterEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [EmitterEntityData](EmitterEntityData).              |
| EmitterEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EmitterEntityData](EmitterEntityData). |

## Properties

| Name             | Type                         | Description |
| ---------------- | ---------------------------- | ----------- |
| emitter          | [EmitterAsset](EmitterAsset) |             |
| spawnProbability | number                       |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [EmitterEntityData](EmitterEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EmitterEntityData](EmitterEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
