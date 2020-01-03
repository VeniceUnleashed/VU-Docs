---
title: PhantomComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| PhantomComponentData()                                                          | Create a new instance of this container type.                                                                                   |
| PhantomComponentData(PhantomComponentData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| PhantomComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [PhantomComponentData](/vext/ref/fb/phantomcomponentdata/).                      |
| PhantomComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [PhantomComponentData](/vext/ref/fb/phantomcomponentdata/).                    |
| PhantomComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [PhantomComponentData](/vext/ref/fb/phantomcomponentdata/).              |
| PhantomComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PhantomComponentData](/vext/ref/fb/phantomcomponentdata/). |

## Properties

| Name                     | Type                              | Description |
| ------------------------ | --------------------------------- | ----------- |
| boxSize                  | [Vec3](/vext/ref/shared/class/vec3) |             |
| asyncQueryPointerAsset   | [AntRef](/vext/ref/fb/antref/)                  |             |
| enableTrajectoryOverride | [AntRef](/vext/ref/fb/antref/)                  |             |
| trajectoryOverride       | [AntRef](/vext/ref/fb/antref/)                  |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [PhantomComponentData](/vext/ref/fb/phantomcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PhantomComponentData](/vext/ref/fb/phantomcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
