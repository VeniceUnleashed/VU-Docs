---
title: TrackWheelComponentData
---
### Base Classes

[WheelComponentData](/vext/ref/fb/wheelcomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| TrackWheelComponentData()                                                          | Create a new instance of this container type.                                                                                         |
| TrackWheelComponentData(TrackWheelComponentData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| TrackWheelComponentData([WheelComponentData](/vext/ref/fb/wheelcomponentdata/) other)            | Upcast an instance of type [WheelComponentData](/vext/ref/fb/wheelcomponentdata/) to [TrackWheelComponentData](/vext/ref/fb/trackwheelcomponentdata/).            |
| TrackWheelComponentData([PartComponentData](/vext/ref/fb/partcomponentdata/) other)              | Upcast an instance of type [PartComponentData](/vext/ref/fb/partcomponentdata/) to [TrackWheelComponentData](/vext/ref/fb/trackwheelcomponentdata/).              |
| TrackWheelComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [TrackWheelComponentData](/vext/ref/fb/trackwheelcomponentdata/).                      |
| TrackWheelComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [TrackWheelComponentData](/vext/ref/fb/trackwheelcomponentdata/).                    |
| TrackWheelComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [TrackWheelComponentData](/vext/ref/fb/trackwheelcomponentdata/).              |
| TrackWheelComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TrackWheelComponentData](/vext/ref/fb/trackwheelcomponentdata/). |

## Properties

| Name     | Type   | Description |
| -------- | ------ | ----------- |
| boneName | string |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [TrackWheelComponentData](/vext/ref/fb/trackwheelcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TrackWheelComponentData](/vext/ref/fb/trackwheelcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
