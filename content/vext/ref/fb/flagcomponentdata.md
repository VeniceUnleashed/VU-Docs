---
title: FlagComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| FlagComponentData()                                                          | Create a new instance of this container type.                                                                             |
| FlagComponentData(FlagComponentData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| FlagComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [FlagComponentData](/vext/ref/fb/flagcomponentdata/).                      |
| FlagComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [FlagComponentData](/vext/ref/fb/flagcomponentdata/).                    |
| FlagComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [FlagComponentData](/vext/ref/fb/flagcomponentdata/).              |
| FlagComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FlagComponentData](/vext/ref/fb/flagcomponentdata/). |

## Properties

| Name        | Type                               | Description |
| ----------- | ---------------------------------- | ----------- |
| realm       | [Realm](/vext/ref/fb/realm/)                     |             |
| flag\_Team1 | [ObjectBlueprint](/vext/ref/fb/objectblueprint/) |             |
| flag\_Team2 | [ObjectBlueprint](/vext/ref/fb/objectblueprint/) |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [FlagComponentData](/vext/ref/fb/flagcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FlagComponentData](/vext/ref/fb/flagcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
