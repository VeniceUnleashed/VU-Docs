---
title: LogicVisualEnvironmentEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                 | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LogicVisualEnvironmentEntityData()                                                          | Create a new instance of this container type.                                                                                                           |
| LogicVisualEnvironmentEntityData(LogicVisualEnvironmentEntityData other)                    | Create a reference copy of an instance of the same type.                                                                                                |
| LogicVisualEnvironmentEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [LogicVisualEnvironmentEntityData](/vext/ref/fb/logicvisualenvironmententitydata/).                            |
| LogicVisualEnvironmentEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [LogicVisualEnvironmentEntityData](/vext/ref/fb/logicvisualenvironmententitydata/).                    |
| LogicVisualEnvironmentEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [LogicVisualEnvironmentEntityData](/vext/ref/fb/logicvisualenvironmententitydata/).              |
| LogicVisualEnvironmentEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LogicVisualEnvironmentEntityData](/vext/ref/fb/logicvisualenvironmententitydata/). |

## Properties

| Name              | Type                                                     | Description |
| ----------------- | -------------------------------------------------------- | ----------- |
| visualEnvironment | [VisualEnvironmentBlueprint](/vext/ref/fb/visualenvironmentblueprint/) |             |
| visibility        | number                                                   |             |

## Methods

| Type                                                                 | Name            | Parameters                                     |
| -------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [LogicVisualEnvironmentEntityData](/vext/ref/fb/logicvisualenvironmententitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LogicVisualEnvironmentEntityData](/vext/ref/fb/logicvisualenvironmententitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
