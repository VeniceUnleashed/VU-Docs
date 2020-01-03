---
title: PlayerData
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                           | Description                                                                                                 |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| PlayerData()                                                          | Create a new instance of this container type.                                                               |
| PlayerData(PlayerData other)                                          | Create a reference copy of an instance of the same type.                                                    |
| PlayerData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [PlayerData](/vext/ref/fb/playerdata/).                                      |
| PlayerData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PlayerData](/vext/ref/fb/playerdata/). |

## Properties

| Name                   | Type                                                 | Description |
| ---------------------- | ---------------------------------------------------- | ----------- |
| playerView             | [PlayerViewData](/vext/ref/fb/playerviewdata/)                     |             |
| inputConceptDefinition | [EntryInputActionMapsData](/vext/ref/fb/entryinputactionmapsdata/) |             |
| inputMapping           | [InputActionMappingsData](/vext/ref/fb/inputactionmappingsdata/)   |             |

## Methods

| Type                     | Name            | Parameters                                     |
| ------------------------ | --------------- | ---------------------------------------------- |
| [PlayerData](/vext/ref/fb/playerdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PlayerData](/vext/ref/fb/playerdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
