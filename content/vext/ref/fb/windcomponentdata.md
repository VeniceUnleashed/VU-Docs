---
title: WindComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| WindComponentData()                                                          | Create a new instance of this container type.                                                                             |
| WindComponentData(WindComponentData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| WindComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [WindComponentData](/vext/ref/fb/windcomponentdata/).                      |
| WindComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [WindComponentData](/vext/ref/fb/windcomponentdata/).                    |
| WindComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [WindComponentData](/vext/ref/fb/windcomponentdata/).              |
| WindComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WindComponentData](/vext/ref/fb/windcomponentdata/). |

## Properties

| Name          | Type           | Description |
| ------------- | -------------- | ----------- |
| realm         | [Realm](/vext/ref/fb/realm/) |             |
| windDirection | number         |             |
| windStrength  | number         |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [WindComponentData](/vext/ref/fb/windcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WindComponentData](/vext/ref/fb/windcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
