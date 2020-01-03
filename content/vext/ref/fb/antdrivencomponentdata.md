---
title: AntDrivenComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| AntDrivenComponentData()                                                          | Create a new instance of this container type.                                                                                       |
| AntDrivenComponentData(AntDrivenComponentData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| AntDrivenComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [AntDrivenComponentData](/vext/ref/fb/antdrivencomponentdata/).                      |
| AntDrivenComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [AntDrivenComponentData](/vext/ref/fb/antdrivencomponentdata/).                    |
| AntDrivenComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [AntDrivenComponentData](/vext/ref/fb/antdrivencomponentdata/).              |
| AntDrivenComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AntDrivenComponentData](/vext/ref/fb/antdrivencomponentdata/). |

## Properties

| Name               | Type                                             | Description |
| ------------------ | ------------------------------------------------ | ----------- |
| characterGameState | [AnimationDrivenBinding](/vext/ref/fb/animationdrivenbinding/) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [AntDrivenComponentData](/vext/ref/fb/antdrivencomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AntDrivenComponentData](/vext/ref/fb/antdrivencomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
