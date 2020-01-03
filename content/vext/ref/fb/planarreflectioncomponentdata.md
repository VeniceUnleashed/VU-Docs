---
title: PlanarReflectionComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| PlanarReflectionComponentData()                                                          | Create a new instance of this container type.                                                                                                     |
| PlanarReflectionComponentData(PlanarReflectionComponentData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| PlanarReflectionComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [PlanarReflectionComponentData](/vext/ref/fb/planarreflectioncomponentdata/).                      |
| PlanarReflectionComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [PlanarReflectionComponentData](/vext/ref/fb/planarreflectioncomponentdata/).                    |
| PlanarReflectionComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [PlanarReflectionComponentData](/vext/ref/fb/planarreflectioncomponentdata/).              |
| PlanarReflectionComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PlanarReflectionComponentData](/vext/ref/fb/planarreflectioncomponentdata/). |

## Properties

| Name                 | Type                     | Description |
| -------------------- | ------------------------ | ----------- |
| verticalBlurFilter   | [BlurFilter](/vext/ref/fb/blurfilter/) |             |
| horizontalDeviation  | number                   |             |
| groundHeight         | number                   |             |
| verticalDeviation    | number                   |             |
| horizontalBlurFilter | [BlurFilter](/vext/ref/fb/blurfilter/) |             |
| skyRenderEnable      | bool                     |             |
| enable               | bool                     |             |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PlanarReflectionComponentData](/vext/ref/fb/planarreflectioncomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PlanarReflectionComponentData](/vext/ref/fb/planarreflectioncomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
