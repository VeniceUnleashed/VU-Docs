---
title: AreaTriggerEntityData
---
### Base Classes

[TriggerEntityData](/vext/ref/fb/triggerentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| AreaTriggerEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| AreaTriggerEntityData(AreaTriggerEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| AreaTriggerEntityData([TriggerEntityData](/vext/ref/fb/triggerentitydata/) other)              | Upcast an instance of type [TriggerEntityData](/vext/ref/fb/triggerentitydata/) to [AreaTriggerEntityData](/vext/ref/fb/areatriggerentitydata/).              |
| AreaTriggerEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [AreaTriggerEntityData](/vext/ref/fb/areatriggerentitydata/).                    |
| AreaTriggerEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [AreaTriggerEntityData](/vext/ref/fb/areatriggerentitydata/).              |
| AreaTriggerEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [AreaTriggerEntityData](/vext/ref/fb/areatriggerentitydata/).                            |
| AreaTriggerEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [AreaTriggerEntityData](/vext/ref/fb/areatriggerentitydata/).                    |
| AreaTriggerEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [AreaTriggerEntityData](/vext/ref/fb/areatriggerentitydata/).              |
| AreaTriggerEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AreaTriggerEntityData](/vext/ref/fb/areatriggerentitydata/). |

## Properties

| Name                         | Type                                                    | Description |
| ---------------------------- | ------------------------------------------------------- | ----------- |
| geometryTransform            | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| include                      | [AreaTriggerInclude](/vext/ref/fb/areatriggerinclude/)                |             |
| insideAreaEventRepeatTime    | number                                                  |             |
| radius                       | number                                                  |             |
| useCharacterEntity           | bool                                                    |             |
| oneInsideAreaEventPerSoldier | bool                                                    |             |
| triggerOnlyOnLeave           | bool                                                    |             |
| resetOnEnable                | bool                                                    |             |
| triggerOnLeaveOnDeath        | bool                                                    |             |
| triggerOnLeaveOnDisable      | bool                                                    |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [AreaTriggerEntityData](/vext/ref/fb/areatriggerentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AreaTriggerEntityData](/vext/ref/fb/areatriggerentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
