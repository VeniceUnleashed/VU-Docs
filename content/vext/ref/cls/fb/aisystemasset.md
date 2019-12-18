---
title: AISystemAsset (Frostbite Container)
---
### Base Classes

[GameAISystem](GameAISystem)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| AISystemAsset()                                                          | Create a new instance of this container type.                                                                     |
| AISystemAsset(AISystemAsset other)                                       | Create a reference copy of an instance of the same type.                                                          |
| AISystemAsset([GameAISystem](GameAISystem) other)                        | Upcast an instance of type [GameAISystem](GameAISystem) to [AISystemAsset](AISystemAsset).                        |
| AISystemAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [AISystemAsset](AISystemAsset).                                      |
| AISystemAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AISystemAsset](AISystemAsset). |

## Properties

| Name       | Type                             | Description |
| ---------- | -------------------------------- | ----------- |
| behaviours | [AIVehicleTypes](AIVehicleTypes) |             |
| orders     | [OrderSettings](OrderSettings)   |             |
| settings   | [AISettingsData](AISettingsData) |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [AISystemAsset](AISystemAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AISystemAsset](AISystemAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
