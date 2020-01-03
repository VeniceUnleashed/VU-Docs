---
title: LightComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| LightComponentData()                                                          | Create a new instance of this container type.                                                                               |
| LightComponentData(LightComponentData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| LightComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [LightComponentData](/vext/ref/fb/lightcomponentdata/).                      |
| LightComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [LightComponentData](/vext/ref/fb/lightcomponentdata/).                    |
| LightComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [LightComponentData](/vext/ref/fb/lightcomponentdata/).              |
| LightComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LightComponentData](/vext/ref/fb/lightcomponentdata/). |

## Properties

| Name  | Type                                         | Description |
| ----- | -------------------------------------------- | ----------- |
| light | [LocalLightEntityData](/vext/ref/fb/locallightentitydata/) |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [LightComponentData](/vext/ref/fb/lightcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LightComponentData](/vext/ref/fb/lightcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
