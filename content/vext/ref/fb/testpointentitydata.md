---
title: TestPointEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| TestPointEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| TestPointEntityData(TestPointEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| TestPointEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [TestPointEntityData](/vext/ref/fb/testpointentitydata/).                    |
| TestPointEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [TestPointEntityData](/vext/ref/fb/testpointentitydata/).              |
| TestPointEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [TestPointEntityData](/vext/ref/fb/testpointentitydata/).                            |
| TestPointEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [TestPointEntityData](/vext/ref/fb/testpointentitydata/).                    |
| TestPointEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [TestPointEntityData](/vext/ref/fb/testpointentitydata/).              |
| TestPointEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TestPointEntityData](/vext/ref/fb/testpointentitydata/). |

## Properties

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| outputName | string |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [TestPointEntityData](/vext/ref/fb/testpointentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TestPointEntityData](/vext/ref/fb/testpointentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
