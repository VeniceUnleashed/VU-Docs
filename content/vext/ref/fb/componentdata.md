---
title: ComponentData
---
### Base Classes

[GameObjectData](/vext/ref/fb/gameobjectdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| ComponentData()                                                          | Create a new instance of this container type.                                                                     |
| ComponentData(ComponentData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| ComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [ComponentData](/vext/ref/fb/componentdata/).                    |
| ComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [ComponentData](/vext/ref/fb/componentdata/).              |
| ComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ComponentData](/vext/ref/fb/componentdata/). |

## Properties

| Name       | Type                                                    | Description |
| ---------- | ------------------------------------------------------- | ----------- |
| transform  | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| components | [GameObjectData](/vext/ref/fb/gameobjectdata/)\[\]                    |             |
| excluded   | bool                                                    |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [ComponentData](/vext/ref/fb/componentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ComponentData](/vext/ref/fb/componentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
