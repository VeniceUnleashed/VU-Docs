---
title: AILocoComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| AILocoComponentData()                                                          | Create a new instance of this container type.                                                                                 |
| AILocoComponentData(AILocoComponentData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| AILocoComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [AILocoComponentData](/vext/ref/fb/ailococomponentdata/).                      |
| AILocoComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [AILocoComponentData](/vext/ref/fb/ailococomponentdata/).                    |
| AILocoComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [AILocoComponentData](/vext/ref/fb/ailococomponentdata/).              |
| AILocoComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AILocoComponentData](/vext/ref/fb/ailococomponentdata/). |

## Properties

| Name                         | Type                                     | Description |
| ---------------------------- | ---------------------------------------- | ----------- |
| binding                      | [AILocoBinding](/vext/ref/fb/ailocobinding/)           |             |
| vaultBinding                 | [AILocoVaultBinding](/vext/ref/fb/ailocovaultbinding/) |             |
| coverBinding                 | [AILocoCoverBinding](/vext/ref/fb/ailococoverbinding/) |             |
| wantedYaw                    | number                                   |             |
| animationEntitySpacePriority | number                                   |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [AILocoComponentData](/vext/ref/fb/ailococomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AILocoComponentData](/vext/ref/fb/ailococomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
