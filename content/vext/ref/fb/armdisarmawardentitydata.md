---
title: ArmDisarmAwardEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| ArmDisarmAwardEntityData()                                                          | Create a new instance of this container type.                                                                                           |
| ArmDisarmAwardEntityData(ArmDisarmAwardEntityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| ArmDisarmAwardEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [ArmDisarmAwardEntityData](/vext/ref/fb/armdisarmawardentitydata/).                    |
| ArmDisarmAwardEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [ArmDisarmAwardEntityData](/vext/ref/fb/armdisarmawardentitydata/).              |
| ArmDisarmAwardEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [ArmDisarmAwardEntityData](/vext/ref/fb/armdisarmawardentitydata/).                            |
| ArmDisarmAwardEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [ArmDisarmAwardEntityData](/vext/ref/fb/armdisarmawardentitydata/).                    |
| ArmDisarmAwardEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [ArmDisarmAwardEntityData](/vext/ref/fb/armdisarmawardentitydata/).              |
| ArmDisarmAwardEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ArmDisarmAwardEntityData](/vext/ref/fb/armdisarmawardentitydata/). |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ArmDisarmAwardEntityData](/vext/ref/fb/armdisarmawardentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ArmDisarmAwardEntityData](/vext/ref/fb/armdisarmawardentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
