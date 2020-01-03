---
title: TrackComponentData
---
### Base Classes

[MeshComponentData](/vext/ref/fb/meshcomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| TrackComponentData()                                                          | Create a new instance of this container type.                                                                               |
| TrackComponentData(TrackComponentData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| TrackComponentData([MeshComponentData](/vext/ref/fb/meshcomponentdata/) other)              | Upcast an instance of type [MeshComponentData](/vext/ref/fb/meshcomponentdata/) to [TrackComponentData](/vext/ref/fb/trackcomponentdata/).              |
| TrackComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [TrackComponentData](/vext/ref/fb/trackcomponentdata/).                      |
| TrackComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [TrackComponentData](/vext/ref/fb/trackcomponentdata/).                    |
| TrackComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [TrackComponentData](/vext/ref/fb/trackcomponentdata/).              |
| TrackComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TrackComponentData](/vext/ref/fb/trackcomponentdata/). |

## Properties

| Name         | Type   | Description |
| ------------ | ------ | ----------- |
| scrollFactor | number |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [TrackComponentData](/vext/ref/fb/trackcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TrackComponentData](/vext/ref/fb/trackcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
