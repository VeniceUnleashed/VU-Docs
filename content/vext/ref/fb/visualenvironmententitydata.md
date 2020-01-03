---
title: VisualEnvironmentEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| VisualEnvironmentEntityData()                                                          | Create a new instance of this container type.                                                                                                 |
| VisualEnvironmentEntityData(VisualEnvironmentEntityData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| VisualEnvironmentEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [VisualEnvironmentEntityData](/vext/ref/fb/visualenvironmententitydata/).                    |
| VisualEnvironmentEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [VisualEnvironmentEntityData](/vext/ref/fb/visualenvironmententitydata/).              |
| VisualEnvironmentEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [VisualEnvironmentEntityData](/vext/ref/fb/visualenvironmententitydata/).                            |
| VisualEnvironmentEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [VisualEnvironmentEntityData](/vext/ref/fb/visualenvironmententitydata/).                    |
| VisualEnvironmentEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [VisualEnvironmentEntityData](/vext/ref/fb/visualenvironmententitydata/).              |
| VisualEnvironmentEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VisualEnvironmentEntityData](/vext/ref/fb/visualenvironmententitydata/). |

## Properties

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| visibility | number |             |
| priority   | number |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VisualEnvironmentEntityData](/vext/ref/fb/visualenvironmententitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VisualEnvironmentEntityData](/vext/ref/fb/visualenvironmententitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
