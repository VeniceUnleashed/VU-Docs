---
title: GeometryTriggerEntityData
---
### Base Classes

[AreaTriggerEntityData](/vext/ref/fb/areatriggerentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| GeometryTriggerEntityData()                                                          | Create a new instance of this container type.                                                                                             |
| GeometryTriggerEntityData(GeometryTriggerEntityData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| GeometryTriggerEntityData([AreaTriggerEntityData](/vext/ref/fb/areatriggerentitydata/) other)      | Upcast an instance of type [AreaTriggerEntityData](/vext/ref/fb/areatriggerentitydata/) to [GeometryTriggerEntityData](/vext/ref/fb/geometrytriggerentitydata/).      |
| GeometryTriggerEntityData([TriggerEntityData](/vext/ref/fb/triggerentitydata/) other)              | Upcast an instance of type [TriggerEntityData](/vext/ref/fb/triggerentitydata/) to [GeometryTriggerEntityData](/vext/ref/fb/geometrytriggerentitydata/).              |
| GeometryTriggerEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [GeometryTriggerEntityData](/vext/ref/fb/geometrytriggerentitydata/).                    |
| GeometryTriggerEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [GeometryTriggerEntityData](/vext/ref/fb/geometrytriggerentitydata/).              |
| GeometryTriggerEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [GeometryTriggerEntityData](/vext/ref/fb/geometrytriggerentitydata/).                            |
| GeometryTriggerEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [GeometryTriggerEntityData](/vext/ref/fb/geometrytriggerentitydata/).                    |
| GeometryTriggerEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [GeometryTriggerEntityData](/vext/ref/fb/geometrytriggerentitydata/).              |
| GeometryTriggerEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GeometryTriggerEntityData](/vext/ref/fb/geometrytriggerentitydata/). |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [GeometryTriggerEntityData](/vext/ref/fb/geometrytriggerentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [GeometryTriggerEntityData](/vext/ref/fb/geometrytriggerentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
