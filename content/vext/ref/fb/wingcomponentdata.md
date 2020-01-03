---
title: WingComponentData
---
### Base Classes

[PartComponentData](/vext/ref/fb/partcomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| WingComponentData()                                                          | Create a new instance of this container type.                                                                             |
| WingComponentData(WingComponentData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| WingComponentData([PartComponentData](/vext/ref/fb/partcomponentdata/) other)              | Upcast an instance of type [PartComponentData](/vext/ref/fb/partcomponentdata/) to [WingComponentData](/vext/ref/fb/wingcomponentdata/).              |
| WingComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [WingComponentData](/vext/ref/fb/wingcomponentdata/).                      |
| WingComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [WingComponentData](/vext/ref/fb/wingcomponentdata/).                    |
| WingComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [WingComponentData](/vext/ref/fb/wingcomponentdata/).              |
| WingComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WingComponentData](/vext/ref/fb/wingcomponentdata/). |

## Properties

| Name   | Type                               | Description |
| ------ | ---------------------------------- | ----------- |
| config | [WingPhysicsData](/vext/ref/fb/wingphysicsdata/) |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [WingComponentData](/vext/ref/fb/wingcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WingComponentData](/vext/ref/fb/wingcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
