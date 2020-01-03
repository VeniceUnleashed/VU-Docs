---
title: ChildBarrelComponentData
---
### Base Classes

[ChildComponentData](/vext/ref/fb/childcomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| ChildBarrelComponentData()                                                          | Create a new instance of this container type.                                                                                           |
| ChildBarrelComponentData(ChildBarrelComponentData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| ChildBarrelComponentData([ChildComponentData](/vext/ref/fb/childcomponentdata/) other)            | Upcast an instance of type [ChildComponentData](/vext/ref/fb/childcomponentdata/) to [ChildBarrelComponentData](/vext/ref/fb/childbarrelcomponentdata/).            |
| ChildBarrelComponentData([PartComponentData](/vext/ref/fb/partcomponentdata/) other)              | Upcast an instance of type [PartComponentData](/vext/ref/fb/partcomponentdata/) to [ChildBarrelComponentData](/vext/ref/fb/childbarrelcomponentdata/).              |
| ChildBarrelComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [ChildBarrelComponentData](/vext/ref/fb/childbarrelcomponentdata/).                      |
| ChildBarrelComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [ChildBarrelComponentData](/vext/ref/fb/childbarrelcomponentdata/).                    |
| ChildBarrelComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [ChildBarrelComponentData](/vext/ref/fb/childbarrelcomponentdata/).              |
| ChildBarrelComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ChildBarrelComponentData](/vext/ref/fb/childbarrelcomponentdata/). |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ChildBarrelComponentData](/vext/ref/fb/childbarrelcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ChildBarrelComponentData](/vext/ref/fb/childbarrelcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
