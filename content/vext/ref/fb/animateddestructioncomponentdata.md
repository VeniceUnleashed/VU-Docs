---
title: AnimatedDestructionComponentData
---
### Base Classes

[AntAnimatableComponentData](/vext/ref/fb/antanimatablecomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                      | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| AnimatedDestructionComponentData()                                                               | Create a new instance of this container type.                                                                                                                |
| AnimatedDestructionComponentData(AnimatedDestructionComponentData other)                         | Create a reference copy of an instance of the same type.                                                                                                     |
| AnimatedDestructionComponentData([AntAnimatableComponentData](/vext/ref/fb/antanimatablecomponentdata/) other) | Upcast an instance of type [AntAnimatableComponentData](/vext/ref/fb/antanimatablecomponentdata/) to [AnimatedDestructionComponentData](/vext/ref/fb/animateddestructioncomponentdata/). |
| AnimatedDestructionComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                           | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [AnimatedDestructionComponentData](/vext/ref/fb/animateddestructioncomponentdata/).                           |
| AnimatedDestructionComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                         | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [AnimatedDestructionComponentData](/vext/ref/fb/animateddestructioncomponentdata/).                         |
| AnimatedDestructionComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)                   | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [AnimatedDestructionComponentData](/vext/ref/fb/animateddestructioncomponentdata/).                   |
| AnimatedDestructionComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other)      | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AnimatedDestructionComponentData](/vext/ref/fb/animateddestructioncomponentdata/).      |

## Methods

| Type                                                                 | Name            | Parameters                                     |
| -------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [AnimatedDestructionComponentData](/vext/ref/fb/animateddestructioncomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AnimatedDestructionComponentData](/vext/ref/fb/animateddestructioncomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
