---
title: EffectAsset (Frostbite Container)
---
### Base Classes

[EffectBlueprint](EffectBlueprint)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                            | Description                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| EffectAsset()                                                          | Create a new instance of this container type.                                                                 |
| EffectAsset(EffectAsset other)                                         | Create a reference copy of an instance of the same type.                                                      |
| EffectAsset([EffectBlueprint](EffectBlueprint) other)                  | Upcast an instance of type [EffectBlueprint](EffectBlueprint) to [EffectAsset](EffectAsset).                  |
| EffectAsset([ObjectBlueprint](ObjectBlueprint) other)                  | Upcast an instance of type [ObjectBlueprint](ObjectBlueprint) to [EffectAsset](EffectAsset).                  |
| EffectAsset([Blueprint](Blueprint) other)                              | Upcast an instance of type [Blueprint](Blueprint) to [EffectAsset](EffectAsset).                              |
| EffectAsset([EntityBusData](EntityBusData) other)                      | Upcast an instance of type [EntityBusData](EntityBusData) to [EffectAsset](EffectAsset).                      |
| EffectAsset([DataBusData](DataBusData) other)                          | Upcast an instance of type [DataBusData](DataBusData) to [EffectAsset](EffectAsset).                          |
| EffectAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [EffectAsset](EffectAsset).                                      |
| EffectAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [EffectAsset](EffectAsset). |

## Methods

| Type                       | Name            | Parameters                                     |
| -------------------------- | --------------- | ---------------------------------------------- |
| [EffectAsset](EffectAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [EffectAsset](EffectAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
