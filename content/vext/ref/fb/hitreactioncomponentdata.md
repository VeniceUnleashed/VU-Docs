---
title: HitReactionComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| HitReactionComponentData()                                                          | Create a new instance of this container type.                                                                                           |
| HitReactionComponentData(HitReactionComponentData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| HitReactionComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [HitReactionComponentData](/vext/ref/fb/hitreactioncomponentdata/).                      |
| HitReactionComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [HitReactionComponentData](/vext/ref/fb/hitreactioncomponentdata/).                    |
| HitReactionComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [HitReactionComponentData](/vext/ref/fb/hitreactioncomponentdata/).              |
| HitReactionComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [HitReactionComponentData](/vext/ref/fb/hitreactioncomponentdata/). |

## Properties

| Name               | Type                                                       | Description |
| ------------------ | ---------------------------------------------------------- | ----------- |
| hitReactionBinding | [HitReactionComponentBinding](/vext/ref/fb/hitreactioncomponentbinding/) |             |
| enabled            | bool                                                       |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [HitReactionComponentData](/vext/ref/fb/hitreactioncomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [HitReactionComponentData](/vext/ref/fb/hitreactioncomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
