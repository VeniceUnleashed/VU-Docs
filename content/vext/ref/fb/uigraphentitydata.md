---
title: UIGraphEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| UIGraphEntityData()                                                          | Create a new instance of this container type.                                                                             |
| UIGraphEntityData(UIGraphEntityData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| UIGraphEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [UIGraphEntityData](/vext/ref/fb/uigraphentitydata/).                            |
| UIGraphEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [UIGraphEntityData](/vext/ref/fb/uigraphentitydata/).                    |
| UIGraphEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [UIGraphEntityData](/vext/ref/fb/uigraphentitydata/).              |
| UIGraphEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIGraphEntityData](/vext/ref/fb/uigraphentitydata/). |

## Properties

| Name             | Type                               | Description |
| ---------------- | ---------------------------------- | ----------- |
| events           | [EventSpec](/vext/ref/fb/eventspec/)\[\]         |             |
| graphAsset       | [UIGraphAsset](/vext/ref/fb/uigraphasset/)       |             |
| graphPriority    | [UIGraphPriority](/vext/ref/fb/uigraphpriority/) |             |
| state            | [UIState](/vext/ref/fb/uistate/)                 |             |
| popPreviousGraph | bool                               |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [UIGraphEntityData](/vext/ref/fb/uigraphentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIGraphEntityData](/vext/ref/fb/uigraphentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
