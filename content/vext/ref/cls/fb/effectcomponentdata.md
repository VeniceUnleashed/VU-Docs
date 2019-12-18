---
title: EffectComponentData (Frostbite Container)
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| EffectComponentData()                                                          | Create a new instance of this container type.                                                                                 |
| EffectComponentData(EffectComponentData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| EffectComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [EffectComponentData](EffectComponentData).                      |
| EffectComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [EffectComponentData](EffectComponentData).                    |
| EffectComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [EffectComponentData](EffectComponentData).              |
| EffectComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [EffectComponentData](EffectComponentData). |

## Properties

| Name               | Type                               | Description |
| ------------------ | ---------------------------------- | ----------- |
| effect             | [EffectBlueprint](EffectBlueprint) |             |
| emitterParameter1  | number                             |             |
| emitterParameter3  | number                             |             |
| emitterParameter2  | number                             |             |
| autoStart          | bool                               |             |
| snapToWaterSurface | bool                               |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [EffectComponentData](EffectComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [EffectComponentData](EffectComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
