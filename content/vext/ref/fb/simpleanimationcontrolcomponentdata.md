---
title: SimpleAnimationControlComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                    | Description                                                                                                                                                   |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SimpleAnimationControlComponentData()                                                          | Create a new instance of this container type.                                                                                                                 |
| SimpleAnimationControlComponentData(SimpleAnimationControlComponentData other)                 | Create a reference copy of an instance of the same type.                                                                                                      |
| SimpleAnimationControlComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [SimpleAnimationControlComponentData](/vext/ref/fb/simpleanimationcontrolcomponentdata/).                      |
| SimpleAnimationControlComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SimpleAnimationControlComponentData](/vext/ref/fb/simpleanimationcontrolcomponentdata/).                    |
| SimpleAnimationControlComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SimpleAnimationControlComponentData](/vext/ref/fb/simpleanimationcontrolcomponentdata/).              |
| SimpleAnimationControlComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SimpleAnimationControlComponentData](/vext/ref/fb/simpleanimationcontrolcomponentdata/). |

## Properties

| Name                         | Type                                                           | Description |
| ---------------------------- | -------------------------------------------------------------- | ----------- |
| binding                      | [SimpleAnimationControlBinding](/vext/ref/fb/simpleanimationcontrolbinding/) |             |
| animationEntitySpacePriority | number                                                         |             |
| run                          | bool                                                           |             |

## Methods

| Type                                                                       | Name            | Parameters                                     |
| -------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SimpleAnimationControlComponentData](/vext/ref/fb/simpleanimationcontrolcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SimpleAnimationControlComponentData](/vext/ref/fb/simpleanimationcontrolcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
