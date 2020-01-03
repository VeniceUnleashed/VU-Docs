---
title: AISystemAsset
---
### Base Classes

[GameAISystem](/vext/ref/fb/gameaisystem/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| AISystemAsset()                                                          | Create a new instance of this container type.                                                                     |
| AISystemAsset(AISystemAsset other)                                       | Create a reference copy of an instance of the same type.                                                          |
| AISystemAsset([GameAISystem](/vext/ref/fb/gameaisystem/) other)                        | Upcast an instance of type [GameAISystem](/vext/ref/fb/gameaisystem/) to [AISystemAsset](/vext/ref/fb/aisystemasset/).                        |
| AISystemAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [AISystemAsset](/vext/ref/fb/aisystemasset/).                                      |
| AISystemAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AISystemAsset](/vext/ref/fb/aisystemasset/). |

## Properties

| Name       | Type                             | Description |
| ---------- | -------------------------------- | ----------- |
| behaviours | [AIVehicleTypes](/vext/ref/fb/aivehicletypes/) |             |
| orders     | [OrderSettings](/vext/ref/fb/ordersettings/)   |             |
| settings   | [AISettingsData](/vext/ref/fb/aisettingsdata/) |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [AISystemAsset](/vext/ref/fb/aisystemasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AISystemAsset](/vext/ref/fb/aisystemasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
