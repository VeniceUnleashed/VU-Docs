---
title: BFAISystem
---
### Base Classes

[AISystemAsset](/vext/ref/fb/aisystemasset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                           | Description                                                                                                 |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| BFAISystem()                                                          | Create a new instance of this container type.                                                               |
| BFAISystem(BFAISystem other)                                          | Create a reference copy of an instance of the same type.                                                    |
| BFAISystem([AISystemAsset](/vext/ref/fb/aisystemasset/) other)                      | Upcast an instance of type [AISystemAsset](/vext/ref/fb/aisystemasset/) to [BFAISystem](/vext/ref/fb/bfaisystem/).                      |
| BFAISystem([GameAISystem](/vext/ref/fb/gameaisystem/) other)                        | Upcast an instance of type [GameAISystem](/vext/ref/fb/gameaisystem/) to [BFAISystem](/vext/ref/fb/bfaisystem/).                        |
| BFAISystem([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [BFAISystem](/vext/ref/fb/bfaisystem/).                                      |
| BFAISystem([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BFAISystem](/vext/ref/fb/bfaisystem/). |

## Methods

| Type                     | Name            | Parameters                                     |
| ------------------------ | --------------- | ---------------------------------------------- |
| [BFAISystem](/vext/ref/fb/bfaisystem/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BFAISystem](/vext/ref/fb/bfaisystem/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
