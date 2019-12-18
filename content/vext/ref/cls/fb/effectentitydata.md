---
title: EffectEntityData (Frostbite Container)
---
### Base Classes

[SpatialEntityData](SpatialEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| EffectEntityData()                                                          | Create a new instance of this container type.                                                                           |
| EffectEntityData(EffectEntityData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| EffectEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [EffectEntityData](EffectEntityData).              |
| EffectEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [EffectEntityData](EffectEntityData).                            |
| EffectEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [EffectEntityData](EffectEntityData).                    |
| EffectEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [EffectEntityData](EffectEntityData).              |
| EffectEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [EffectEntityData](EffectEntityData). |

## Properties

| Name                     | Type                                 | Description |
| ------------------------ | ------------------------------------ | ----------- |
| components               | [GameObjectData](GameObjectData)\[\] |             |
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
| [EffectEntityData](EffectEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [EffectEntityData](EffectEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
