---
title: PartComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| PartComponentData()                                                          | Create a new instance of this container type.                                                                             |
| PartComponentData(PartComponentData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| PartComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [PartComponentData](/vext/ref/fb/partcomponentdata/).                      |
| PartComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [PartComponentData](/vext/ref/fb/partcomponentdata/).                    |
| PartComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [PartComponentData](/vext/ref/fb/partcomponentdata/).              |
| PartComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PartComponentData](/vext/ref/fb/partcomponentdata/). |

## Properties

| Name           | Type                                   | Description |
| -------------- | -------------------------------------- | ----------- |
| healthStates   | [HealthStateData](/vext/ref/fb/healthstatedata/)\[\] |             |
| partLinks      | [PartLinkData](/vext/ref/fb/partlinkdata/)\[\]       |             |
| isSupported    | bool                                   |             |
| isFragile      | bool                                   |             |
| isNetworkable  | bool                                   |             |
| isWindow       | bool                                   |             |
| animatePhysics | bool                                   |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [PartComponentData](/vext/ref/fb/partcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PartComponentData](/vext/ref/fb/partcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
