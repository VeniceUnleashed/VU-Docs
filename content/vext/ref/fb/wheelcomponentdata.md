---
title: WheelComponentData
---
### Base Classes

[PartComponentData](/vext/ref/fb/partcomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| WheelComponentData()                                                          | Create a new instance of this container type.                                                                               |
| WheelComponentData(WheelComponentData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| WheelComponentData([PartComponentData](/vext/ref/fb/partcomponentdata/) other)              | Upcast an instance of type [PartComponentData](/vext/ref/fb/partcomponentdata/) to [WheelComponentData](/vext/ref/fb/wheelcomponentdata/).              |
| WheelComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [WheelComponentData](/vext/ref/fb/wheelcomponentdata/).                      |
| WheelComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [WheelComponentData](/vext/ref/fb/wheelcomponentdata/).                    |
| WheelComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [WheelComponentData](/vext/ref/fb/wheelcomponentdata/).              |
| WheelComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WheelComponentData](/vext/ref/fb/wheelcomponentdata/). |

## Properties

| Name                | Type                                 | Description |
| ------------------- | ------------------------------------ | ----------- |
| config              | [WheelConfigData](/vext/ref/fb/wheelconfigdata/)   |             |
| physicsType         | [WheelPhysicsType](/vext/ref/fb/wheelphysicstype/) |             |
| effectClampVelocity | number                               |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [WheelComponentData](/vext/ref/fb/wheelcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WheelComponentData](/vext/ref/fb/wheelcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
