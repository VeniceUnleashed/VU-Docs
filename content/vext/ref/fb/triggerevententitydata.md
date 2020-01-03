---
title: TriggerEventEntityData
---
### Base Classes

[TriggerEntityData](/vext/ref/fb/triggerentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| TriggerEventEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| TriggerEventEntityData(TriggerEventEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| TriggerEventEntityData([TriggerEntityData](/vext/ref/fb/triggerentitydata/) other)              | Upcast an instance of type [TriggerEntityData](/vext/ref/fb/triggerentitydata/) to [TriggerEventEntityData](/vext/ref/fb/triggerevententitydata/).              |
| TriggerEventEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [TriggerEventEntityData](/vext/ref/fb/triggerevententitydata/).                    |
| TriggerEventEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [TriggerEventEntityData](/vext/ref/fb/triggerevententitydata/).              |
| TriggerEventEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [TriggerEventEntityData](/vext/ref/fb/triggerevententitydata/).                            |
| TriggerEventEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [TriggerEventEntityData](/vext/ref/fb/triggerevententitydata/).                    |
| TriggerEventEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [TriggerEventEntityData](/vext/ref/fb/triggerevententitydata/).              |
| TriggerEventEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TriggerEventEntityData](/vext/ref/fb/triggerevententitydata/). |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [TriggerEventEntityData](/vext/ref/fb/triggerevententitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TriggerEventEntityData](/vext/ref/fb/triggerevententitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
