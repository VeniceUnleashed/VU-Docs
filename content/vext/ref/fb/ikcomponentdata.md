---
title: IKComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| IKComponentData()                                                          | Create a new instance of this container type.                                                                         |
| IKComponentData(IKComponentData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| IKComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [IKComponentData](/vext/ref/fb/ikcomponentdata/).                      |
| IKComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [IKComponentData](/vext/ref/fb/ikcomponentdata/).                    |
| IKComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [IKComponentData](/vext/ref/fb/ikcomponentdata/).              |
| IKComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [IKComponentData](/vext/ref/fb/ikcomponentdata/). |

## Properties

| Name       | Type                             | Description |
| ---------- | -------------------------------- | ----------- |
| ikEffector | [IKEffectorEnum](/vext/ref/fb/ikeffectorenum/) |             |
| ikData     | [HIKData](/vext/ref/fb/hikdata/)               |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [IKComponentData](/vext/ref/fb/ikcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [IKComponentData](/vext/ref/fb/ikcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
